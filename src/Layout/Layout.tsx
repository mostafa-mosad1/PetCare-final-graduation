import Footer from "@/components/Footer";
import HeaderOne from "@/components/Header/HeaderOne";
import HeaderTwo from "@/components/Header/HeaderTwo";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="">
      <HeaderOne />
      <HeaderTwo />
      <div className="container">
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
}

export default Layout;
