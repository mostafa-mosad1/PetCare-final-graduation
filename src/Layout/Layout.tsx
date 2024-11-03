import HeaderOne from "@/components/Header/HeaderOne";
import HeaderTwo from "@/components/Header/HeaderTwo";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="">
      <HeaderOne />
      <HeaderTwo />
      <Outlet />
    </div>
  );
}

export default Layout;
