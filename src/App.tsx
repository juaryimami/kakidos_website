import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Courses from "./components/courses/Courses"
import { LanguageProvider } from "./locales/LanguageContext";

const App = () => {
  return (
    <LanguageProvider>
      <BrowserRouter>
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        {/* <Route path="/courses" element={<Courses />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
    </LanguageProvider>
    
  );
};

export default App;
