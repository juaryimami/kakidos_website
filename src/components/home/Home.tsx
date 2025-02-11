import About from "../about/About";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Footer1 from "../footer1/Footer";
import Footer2 from "../footer2/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="mt-[500px] ">
        <About />
      </div>
      <Footer/>
      <Footer1/>
      <Footer2/>
    </div>
  );
};

export default Home;
