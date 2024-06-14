
import { Toaster } from "react-hot-toast";

import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";
import Experience from "./Component/Experience/Experience";
import Footer from "./Component/Footer/Footer";
import Home from "./Component/Home/Home";
import Navbar from "./Component/Navbar/Navbar";
import Portfolio from "./Component/Portfolio/Portfolio";



const App = () => {
   return (
    <>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
      <Toaster />
    </>
   );
};

export default App;