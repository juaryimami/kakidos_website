import { useState, ChangeEvent, useContext, MouseEvent } from "react";
import { LanguageContext } from "../../locales/LanguageContext";
import jsPDF from "jspdf";
import emailjs from "@emailjs/browser";

interface FormData {
  callType: "anonymous" | "disclosed";
  startTime: string;
  endTime: string;
  duration: string;
  userId: string;
  email: string;
  created: string;
  price: number;
  receipt: File | null;
  confirmed: boolean;
  orderStatus: string | null;
  rejectionReason: string | null;
}

export default function StatsSection() {
  const { texts } = useContext(LanguageContext);

  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({
    callType: "anonymous",
    startTime: "",
    endTime: "",
    duration: "",
    userId: "",
    email: "",
    created: new Date().toISOString(),
    price: 0,
    receipt: null,
    confirmed: false,
    orderStatus: "pending",
    rejectionReason: null,
  });
  const [invalidFields, setInvalidFields] = useState<string[]>([]);

  const validateForm = (): boolean => {
    const errors: string[] = [];
    const { callType, startTime, endTime, userId, email } = formData;

    if (!startTime) errors.push("startTime");
    if (!endTime) errors.push("endTime");

    if (callType === "anonymous" && !userId) {
      errors.push("userId");
    }
    if (callType === "disclosed" && !email) {
      errors.push("email");
    }

    setInvalidFields(errors);
    return errors.length === 0;
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    let updatedData: FormData = { ...formData, [name]: value };

    if (name === "startTime" || name === "endTime") {
      const start = new Date(updatedData.startTime);
      const end = new Date(updatedData.endTime);
      if (start && end && end > start) {
        const duration = (end.getTime() - start.getTime()) / (1000 * 60);
        updatedData.duration = duration.toString();
        updatedData.price = duration * 0.5;
      }
    }

    setFormData(updatedData);
    if (invalidFields.includes(name)) {
      setInvalidFields(invalidFields.filter((field) => field !== name));
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...formData, receipt: e.target.files[0] });
    }
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, confirmed: e.target.checked });
  };

  const handleContinue = () => {
    if (validateForm()) {
      localStorage.setItem("formData", JSON.stringify(formData));
      setStep(2);
    }
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleCancel = () => {
    localStorage.clear();
    console.log("localStorage cleared:", localStorage.length === 0);
    setFormData({
      callType: "anonymous",
      startTime: "",
      endTime: "",
      duration: "",
      userId: "",
      email: "",
      created: new Date().toISOString(),
      price: 0,
      receipt: null,
      confirmed: false,
      orderStatus: "pending",
      rejectionReason: null,
    });
    setIsPopupOpen(false);
    setStep(1);
  };

  const handleConfirmOrder = async (e: MouseEvent<HTMLButtonElement>) => {
    const orderId = `ORD-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
    console.log(e);
    const storedData: FormData = JSON.parse(localStorage.getItem("formData") || "{}");

    const emailParams = {
      order_id: orderId, // Match template placeholder
      call_type: storedData.callType, // Match template placeholder
      start_time: storedData.startTime, // Match template implied structure
      end_time: storedData.endTime, // Match template implied structure
      duration: storedData.duration, // Already matches
      user_id: storedData.userId, // Match template placeholder
      client_email: storedData.callType === "disclosed" ? storedData.email : "", // Match template placeholder
      created: storedData.created, // Match template implied structure
      price: storedData.price.toFixed(2), // Already matches
      email: "booking@hashimconsultancy.org", // Recipient email
    };

    try {
      const response = await emailjs.send(
        "service_6suamgo",
        "template_vcm7x1t",
        emailParams,
        "9FJX91r2UM2mbNwoW"
      );
      console.log("Email sent successfully", {
        recipient: emailParams.email,
        response: response,
        params: emailParams,
      });

      const bookingData = {
        orderId,
        callType: storedData.callType,
        startTime: storedData.startTime,
        endTime: storedData.endTime,
        duration: storedData.duration,
        userId: storedData.userId,
        userEmail: storedData.email,
        created: storedData.created,
        price: storedData.price,
        confirmed: storedData.confirmed,
        orderStatus: storedData.orderStatus,
        rejectionReason: storedData.rejectionReason,
      };

      console.log("Booking data for potential API:", bookingData);

      const doc = new jsPDF();
      doc.setFontSize(12);
      doc.text("Hashim Consultancy", 20, 20);
      doc.setFontSize(10);
      doc.text("Email: info@hashimconsultancy.org", 20, 28);
      doc.text("Phone: +251-123-456-789", 20, 34);

      doc.setFontSize(16);
      doc.text("Order Confirmation", 20, 50);
      doc.setFontSize(12);
      doc.text(`Order ID: ${orderId}`, 20, 60);
      doc.text(`Call Type: ${storedData.callType}`, 20, 70);
      doc.text(`Start Time: ${storedData.startTime}`, 20, 80);
      doc.text(`End Time: ${storedData.endTime}`, 20, 90);
      doc.text(`Duration: ${storedData.duration} minutes`, 20, 100);
      if (storedData.callType === "disclosed") {
        doc.text(`User ID: ${storedData.userId}`, 20, 110);
        doc.text(`Email: ${storedData.email}`, 20, 120);
      }
      doc.text(`Created: ${storedData.created}`, 20, 130);
      doc.text(`Price: $${storedData.price.toFixed(2)}`, 20, 140);
      doc.text(`Order Status: ${storedData.orderStatus || 'N/A'}`, 20, 150);
      doc.text(`Rejection Reason: ${storedData.rejectionReason || 'N/A'}`, 20, 160);

      doc.setFontSize(10);
      doc.text("Hashim Consultancy", 20, 280);
      doc.text("Email: info@hashimconsultancy.org", 20, 286);
      doc.text("Phone: +251-123-456-789", 20, 292);

      doc.save(`order_${orderId}.pdf`);

      localStorage.clear();
      console.log("localStorage cleared after email send:", localStorage.length === 0);

      alert(`Order Confirmed! Order ID: ${orderId}`);
      setIsPopupOpen(false);
      setStep(1);
    } catch (error: any) {
      console.error("Failed to process order:", {
        error: error.text || error.message || error,
        params: emailParams,
      });
      alert(`Failed to process order: ${error.text || error.message || "Unknown error"}`);
      return;
    }
  };

  return (
    <section className="relative bg-gradient-to-r from-gray-800 via-gray-700 to-[#72b3c5] py-8 px-12 flex flex-col md:flex-row items-center justify-between">
      <div className="flex items-center space-x-8">
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold">24/7</h2>
          <p className="text-sm mt-2">{texts.stateSelection.livestatus}</p>
        </div>
        <div className="h-12 border-r border-gray-400"></div>
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold">20+</h2>
          <p className="text-sm mt-2 underline underline-offset-4">{texts.stateSelection.carriees}</p>
        </div>
      </div>

      <div className="mt-6 md:mt-0">
        <button
          className="bg-white text-[#5fa6b6] font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-2xl hover:bg-gray-100 transition-all duration-300 border border-black"
          onClick={() => setIsPopupOpen(true)}
        >
          {texts.stateSelection.call}
        </button>
      </div>

      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 py-8">
          <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-[#72b3c5] rounded-lg p-6 w-full max-w-4xl h-[80vh] overflow-y-auto shadow-lg my-8">
            <div className="flex-1 overflow-y-auto flex flex-col md:flex-row">
              {step === 1 && (
                <div className="w-full md:w-1/2 p-4 bg-white rounded-lg m-2 min-h-0">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">{texts.registration_steps.heading}</h3>
                  <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                    <li>{texts.registration_steps.step1}</li>
                    <li>{texts.registration_steps.step2}</li>
                    <li>
                      {texts.registration_steps.step3}
                      <ul className="list-disc pl-8 space-y-1 text-gray-700 mt-1">
                        <li>{texts.registration_steps.step3_1}</li>
                        <li dangerouslySetInnerHTML={{ __html: texts.registration_steps.step3_2 }} />
                      </ul>
                    </li>
                    <li>{texts.registration_steps.step4}</li>
                    <li>{texts.registration_steps.step5}</li>
                    <li>{texts.registration_steps.step6}</li>
                  </ol>
                  <p
                    className="mt-4 text-sm bg-gray-50 border border-gray-300 p-3 rounded-md text-gray-700 italic"
                    dangerouslySetInnerHTML={{ __html: texts.registration_steps.note }}
                  />
                </div>
              )}

              {step === 1 && (
                <div className="w-full md:w-1/2 p-4 bg-white rounded-lg m-2 min-h-0">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">{texts.registration_form.heading}</h3>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">{texts.registration_form.calltype}</label>
                        <select
                          name="callType"
                          value={formData.callType}
                          onChange={handleInputChange}
                          className="w-full p-2 border rounded text-gray-700"
                        >
                          <option value="anonymous">Anonymous</option>
                          <option value="disclosed">Disclosed</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">{texts.registration_form.starttime}</label>
                        <input
                          type="datetime-local"
                          name="startTime"
                          value={formData.startTime}
                          onChange={handleInputChange}
                          className={`w-full p-2 border rounded text-gray-700 ${
                            invalidFields.includes("startTime") ? "border-red-500" : ""
                          }`}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700">{texts.registration_form.endtime}</label>
                        <input
                          type="datetime-local"
                          name="endTime"
                          value={formData.endTime}
                          onChange={handleInputChange}
                          className={`w-full p-2 border rounded text-gray-700 ${
                            invalidFields.includes("endTime") ? "border-red-500" : ""
                          }`}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700">{texts.registration_form.duration}</label>
                        <input
                          type="text"
                          value={formData.duration ? `${formData.duration} minutes` : ""}
                          readOnly
                          className="w-full p-2 border rounded bg-gray-100 text-gray-700"
                        />
                      </div>

                      {formData.callType === "anonymous" && (
                        <div>
                          <label className="block text-sm font-medium text-gray-700">{texts.registration_form.user_id}</label>
                          <input
                            type="text"
                            name="userId"
                            value={formData.userId}
                            onChange={handleInputChange}
                            className={`w-full p-2 border rounded text-gray-700 ${
                              invalidFields.includes("userId") ? "border-red-500" : ""
                            }`}
                          />
                        </div>
                      )}

                      {formData.callType === "disclosed" && (
                        <div>
                          <label className="block text-sm font-medium text-gray-700">Email</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`w-full p-2 border rounded text-gray-700 ${
                              invalidFields.includes("email") ? "border-red-500" : ""
                            }`}
                          />
                        </div>
                      )}

                      <div>
                        <label className="block text-sm font-medium text-gray-700">{texts.registration_form.createdat}</label>
                        <input
                          type="text"
                          value={formData.created}
                          readOnly
                          className="w-full p-2 border rounded bg-gray-100 text-gray-700"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700">{texts.registration_form.price}</label>
                        <input
                          type="text"
                          value={formData.price ? `$${formData.price.toFixed(2)}` : ""}
                          readOnly
                          className="w-full p-2 border rounded bg-gray-100 text-gray-700"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-4 mt-4">
                    <button
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                      onClick={handleCancel}
                    >
                      {texts.buttons.cancel}
                    </button>
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                      onClick={handleContinue}
                    >
                      {texts.buttons.contunue}
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="flex flex-col md:flex-row w-full">
                  <div className="w-full md:w-1/2 p-4 bg-white rounded-lg m-2 min-h-0">
                    <h3 className="text-xl font-bold mb-4 text-gray-800">{texts.review.heading}</h3>
                    <div className="space-y-2 text-gray-700">
                      <p><strong>{texts.registration_form.calltype}:</strong> {formData.callType}</p>
                      <p><strong>{texts.registration_form.starttime}:</strong> {formData.startTime}</p>
                      <p><strong>{texts.registration_form.endtime}:</strong> {formData.endTime}</p>
                      <p><strong>{texts.registration_form.duration}:</strong> {formData.duration} {texts.review.minuts}</p>
                      {formData.callType === "anonymous" && (
                        <>
                          <p><strong>{texts.registration_form.user_id}:</strong> {formData.userId}</p>
                        </>
                      )}
                      {formData.callType === "disclosed" && (
                        <>
                          <p><strong>Email:</strong> {formData.email}</p>
                        </>
                      )}
                      <p><strong>{texts.registration_form.createdat}:</strong> {formData.created}</p>
                      <p><strong>{texts.registration_form.price}:</strong> ${formData.price.toFixed(2)}</p>
                    
                    </div>

                    <div className="mt-4">
                      <label className="block text-sm font-medium text-gray-700">{texts.review.uploadreciept}</label>
                      <input
                        type="file"
                        onChange={handleFileChange}
                        className="w-full p-2 border rounded text-gray-700"
                      />
                    </div>

                    <div className="mt-4">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          checked={formData.confirmed}
                          onChange={handleCheckboxChange}
                          className="mr-2"
                        />
                        <span className="text-gray-700">{texts.review.check}</span>
                      </label>
                    </div>

                    <div className="flex space-x-4 mt-4">
                      <button
                        className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
                        onClick={handleBack}
                      >
                        {texts.buttons.back}
                      </button>
                      <button
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                        onClick={handleCancel}
                      >
                        {texts.buttons.cancel}
                      </button>
                      <button
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        onClick={handleConfirmOrder}
                        disabled={!formData.receipt || !formData.confirmed}
                      >
                        {texts.buttons.confirm}
                      </button>
                    </div>
                  </div>

                  <div className="w-full md:w-1/2 p-4 bg-white rounded-lg m-2 min-h-0">
                    <h3 className="text-xl font-bold mb-4 text-gray-800">{texts.payment_options.heading}</h3>
                    <div className="space-y-4">
                      <p className="text-lg font-bold text-gray-800 mb-4">{texts.payment_options.owner}: {texts.payment_options.name}</p>
                      <div className="border border-gray-300 bg-gray-50 p-4 rounded-md">
                        <h4 className="text-lg font-bold text-gray-800 mb-2">{texts.payment_options.oro_int_name}</h4>
                        <p className="text-gray-700">{texts.payment_options.swift_code}: ORIRETAA</p>
                        <p className="text-gray-700">{texts.payment_options.account_no}: 2838505900002</p>
                      </div>
                      <div className="border border-gray-300 bg-gray-50 p-4 rounded-md">
                        <h4 className="text-lg font-bold text-gray-800 mb-2">{texts.payment_options.abidinya_name}</h4>
                        <p className="text-gray-700">{texts.payment_options.swift_code}: ABYSETAA</p>
                        <p className="text-gray-700">{texts.payment_options.account_no}: 225291958</p>
                      </div>
                      <div className="border border-gray-300 bg-gray-50 p-4 rounded-md">
                        <h4 className="text-lg font-bold text-gray-800 mb-2">{texts.payment_options.cooprative_name}</h4>
                        <p className="text-gray-700">{texts.payment_options.swift_code}: CBORETAA</p>
                        <p className="text-gray-700">{texts.payment_options.account_no}: 1045500116134</p>
                      </div>
                      <div className="border border-gray-300 bg-gray-50 p-4 rounded-md">
                        <h4 className="text-lg font-bold text-gray-800 mb-2">{texts.payment_options.dashen_name}</h4>
                        <p className="text-gray-700">{texts.payment_options.swift_code}: DASHETAA</p>
                        <p className="text-gray-700">{texts.payment_options.account_no}: 02923783323812</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}