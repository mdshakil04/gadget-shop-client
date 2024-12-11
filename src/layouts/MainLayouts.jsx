import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayouts = () => {
  return (
    <div className=" ">
      <div>
        <Navbar />
      </div>
      <div className=" min-h-screen">
        <Outlet></Outlet>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayouts;
