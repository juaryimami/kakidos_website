import { useState, ChangeEvent, MouseEvent } from "react";
import jsPDF from "jspdf";

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
}

export default function StatsSection() {
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
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    let updatedData: FormData = { ...formData, [name]: value };

    if (name === "startTime" || name === "endTime") {
      const start = new Date(updatedData.startTime);
      const end = new Date(updatedData.endTime);
      if (start && end && end > start) {
        const duration = (end.getTime() - start.getTime()) / (1000 * 60); // Duration in minutes
        updatedData.duration = duration.toString();
        updatedData.price = duration * 0.5;
      }
    }

    setFormData(updatedData);
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
    localStorage.setItem("formData", JSON.stringify(formData));
    setStep(2);
  };

  const handleConfirmOrder = (e: MouseEvent<HTMLButtonElement>) => {
    const orderId = `ORD-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
    const storedData: FormData = JSON.parse(localStorage.getItem("formData") || "{}");

    // Generate PDF
    const doc = new jsPDF();
    doc.text("Order Confirmation", 20, 20);
    doc.text(`Order ID: ${orderId}`, 20, 30);
    doc.text(`Call Type: ${storedData.callType}`, 20, 40);
    doc.text(`Start Time: ${storedData.startTime}`, 20, 50);
    doc.text(`End Time: ${storedData.endTime}`, 20, 60);
    doc.text(`Duration: ${storedData.duration} minutes`, 20, 70);
    if (storedData.callType === "disclosed") {
      doc.text(`User ID: ${storedData.userId}`, 20, 80);
      doc.text(`Email: ${storedData.email}`, 20, 90);
    }
    console.log(e)
    doc.text(`Created: ${storedData.created}`, 20, 100);
    doc.text(`Price: $${storedData.price.toFixed(2)}`, 20, 110);
    doc.save(`order_${orderId}.pdf`);

    // Simulate sending email to company
    console.log("Sending email to company with order details:", {
      orderId,
      ...storedData,
    });

    // Clear all localStorage data
    localStorage.clear();

    alert(`Order Confirmed! Order ID: ${orderId}`);
    setIsPopupOpen(false);
    setStep(1);
  };

  return (
    <section className="relative bg-gradient-to-r from-gray-800 via-gray-700 to-[#72b3c5] py-8 px-12 flex flex-col md:flex-row items-center justify-between">
      {/* Left side: Stats */}
      <div className="flex items-center space-x-8">
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold">24/7</h2>
          <p className="text-sm mt-2">Online support</p>
        </div>
        <div className="h-12 border-r border-gray-400"></div>
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold">20+</h2>
          <p className="text-sm mt-2 underline underline-offset-4">Certified therapist</p>
        </div>
      </div>

      {/* Right side: Button */}
      <div className="mt-6 md:mt-0">
        <button
          className="bg-white text-[#5fa6b6] font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-2xl hover:bg-gray-100 transition-all duration-300 border border-black"
          onClick={() => setIsPopupOpen(true)}
        >
          Book your call today
        </button>
      </div>

      {/* Popup */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 py-8">
          <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-[#72b3c5] rounded-lg p-6 w-full max-w-4xl max-h-[80vh] overflow-y-auto flex flex-col md:flex-row shadow-lg my-8">
            {/* Left: Instructions */}
            {step === 1 && (
              <div className="w-full md:w-1/2 p-4 bg-white rounded-lg m-2">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Registration Steps</h3>
                <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                  <li>Select your call type (anonymous or disclosed).</li>
                  <li>Choose the start and end time for your session.</li>
                  <li>Provide user details if required (based on call type).</li>
                  <li>Review the calculated duration and price.</li>
                  <li>Click "Continue" to review your details.</li>
                  <li>Upload a receipt and confirm the order.</li>
                </ol>
              </div>
            )}

            {/* Right: Form */}
            {step === 1 && (
              <div className="w-full md:w-1/2 p-4 bg-white rounded-lg m-2">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Registration Form</h3>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Call Type</label>
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
                      <label className="block text-sm font-medium text-gray-700">Start Time</label>
                      <input
                        type="datetime-local"
                        name="startTime"
                        value={formData.startTime}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded text-gray-700"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">End Time</label>
                      <input
                        type="datetime-local"
                        name="endTime"
                        value={formData.endTime}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded text-gray-700"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">Duration</label>
                      <input
                        type="text"
                        value={formData.duration ? `${formData.duration} minutes` : ""}
                        readOnly
                        className="w-full p-2 border rounded bg-gray-100 text-gray-700"
                      />
                    </div>

                    {formData.callType === "disclosed" && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700">User ID</label>
                        <input
                          type="text"
                          name="userId"
                          value={formData.userId}
                          onChange={handleInputChange}
                          className="w-full p-2 border rounded text-gray-700"
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
                          className="w-full p-2 border rounded text-gray-700"
                        />
                      </div>
                    )}

                    <div>
                      <label className="block text-sm font-medium text-gray-700">Created</label>
                      <input
                        type="text"
                        value={formData.created}
                        readOnly
                        className="w-full p-2 border rounded bg-gray-100 text-gray-700"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">Price</label>
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
                    className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
                    onClick={() => setIsPopupOpen(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    onClick={handleContinue}
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {/* Review and Confirm Step */}
            {step === 2 && (
              <div className="w-full p-4 bg-white rounded-lg m-2">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Review Your Details</h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Call Type:</strong> {formData.callType}</p>
                  <p><strong>Start Time:</strong> {formData.startTime}</p>
                  <p><strong>End Time:</strong> {formData.endTime}</p>
                  <p><strong>Duration:</strong> {formData.duration} minutes</p>
                  {formData.callType === "disclosed" && (
                    <>
                      <p><strong>User ID:</strong> {formData.userId}</p>
                      <p><strong>Email:</strong> {formData.email}</p>
                    </>
                  )}
                  <p><strong>Created:</strong> {formData.created}</p>
                  <p><strong>Price:</strong> ${formData.price.toFixed(2)}</p>
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700">Upload Receipt</label>
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
                    <span className="text-gray-700">I confirm everything is correct</span>
                  </label>
                </div>

                <div className="flex space-x-4 mt-4">
                  <button
                    className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
                    onClick={() => setIsPopupOpen(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    onClick={handleConfirmOrder}
                    disabled={!formData.receipt || !formData.confirmed}
                  >
                    Confirm Order
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}