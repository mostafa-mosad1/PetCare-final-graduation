import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png.svg";
import { AlignRight, Menu } from "lucide-react";
function HeaderTwo() {
  const navigate = useNavigate();

  const [showMenu, setShoweMenu] = useState(false);
  return (
    <div className="flex container items-center justify-between text-sm py-2 mb-5 border-b border-b-gray-400 ">
      <img
        onClick={() => navigate("/")}
        className="w-14 cursor-pointer"
        src={logo}
        alt="Logo"
        loading="lazy"
      />
      <h1 className="lg:text-3xl text-lg font-bold text-[#269A41]">PetLife</h1>
      <ul className="hidden md:flex justify-end  gap-5 font-medium flex-1">
        <NavLink to="/">
          <li className="py-1 lg:text-lg lg:px-2 px-1 ">HOME</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to={"/shop"}>
          <li className="py-1 lg:text-lg lg:px-2 px-1 ">SHOP</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to={"/categories"}>
          <li className="py-1 lg:text-lg lg:px-2 px-1 ">Category</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to={"/doctor"}>
          <li className="py-1 lg:text-lg lg:px-2 px-1 ">Doctor</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to={"/services"}>
          <li className="py-1 lg:text-lg lg:px-2 px-1 ">Services</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to={"/about"}>
          <li className="py-1 lg:text-lg lg:px-2 px-1 ">About</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to={"/profile"}>
          <li className="py-1 lg:text-lg lg:px-2 px-1 ">Profile</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-4">
        <div onClick={() => setShoweMenu(true)} className="w-6 md:hidden">
          <Menu />
        </div>

        {/*-----Mobile Menu ------*/}
        <div
          className={` ${
            showMenu ? "fixed w-full" : "h-0 w-0"
          } md:hidden right-0 top-0  z-20 overflow-hidden bg-white transition-all`}
        >
          <div className="flex items-center justify-between px-5 my-14">
            <img className="w-20" src={logo} alt="" />
            <h1 className="text-3xl font-bold text-[#269A41]">PetLife</h1>

            <div className="w-7" onClick={() => setShoweMenu(false)}>
              <AlignRight />
            </div>
          </div>
          <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium ">
            <NavLink onClick={() => setShoweMenu(false)} to="/">
              <p className="px-4 py-2 rounded inline-block">Home</p>
            </NavLink>
            <NavLink onClick={() => setShoweMenu(false)} to="/shop">
              <p className="px-4 py-2 rounded inline-block">SHOP</p>
            </NavLink>
            <NavLink onClick={() => setShoweMenu(false)} to="/categories">
              <p className="px-4 py-2 rounded inline-block">Category</p>
            </NavLink>
            <NavLink onClick={() => setShoweMenu(false)} to="/doctor">
              <p className="px-4 py-2 rounded inline-block">Doctor</p>
            </NavLink>
            <NavLink onClick={() => setShoweMenu(false)} to="/services">
              <p className="px-4 py-2 rounded inline-block">Services</p>
            </NavLink>
            <NavLink onClick={() => setShoweMenu(false)} to="/about">
              <p className="px-4 py-2 rounded inline-block">About</p>
            </NavLink>
            <NavLink onClick={() => setShoweMenu(false)} to="/profile">
              <p className="px-4 py-2 rounded inline-block">Profile</p>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HeaderTwo;
