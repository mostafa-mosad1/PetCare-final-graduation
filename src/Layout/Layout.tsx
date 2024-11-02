import HeaderOne from "@/components/Header/HeaderOne";
import HeaderTwo from "@/components/Header/HeaderTwo";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <HeaderOne />
      <HeaderTwo />
      <Outlet />
    </div>
  );
}

export default Layout;
