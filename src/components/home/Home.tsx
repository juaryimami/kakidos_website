import About from "../about/About";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="mt-[500px] ">
        <About />
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
