import About from "../about/About";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Footer1 from "../footer1/Footer";
import Footer2 from "../footer2/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="sm:mt-[500px] ">
        <About />
      </div>
      <Footer1/>
      <Footer/>
      <Footer2/>
    </div>
  );
};

export default Home;
