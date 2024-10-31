import SectionOne from "@/components/ui/Hero/SectionOne";
import SectionTwo from "@/components/ui/Hero/SectionTwo";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <SectionOne />
      <SectionTwo />
      <Outlet />
    </div>
  );
}

export default Layout;
