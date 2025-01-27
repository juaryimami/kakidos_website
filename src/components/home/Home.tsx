import About from "../about/About";
import Header from "../header/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="mt-[500px] ">
        <About />
      </div>
    </div>
  );
};

export default Home;
