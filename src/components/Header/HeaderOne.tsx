import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  BriefcaseBusiness,
  LogOut,
  Plus,
  Search,
  ShoppingCart,
  Syringe,
  Menu,
  X,
} from "lucide-react";
import { Moon, Sun } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "./theme-provider";
import Cookies from "@/Cookies";
import { Link, useNavigate } from "react-router-dom";
import Notification from "../Notification";

function HeaderOne() {
  const [showMenu, setShowMenu] = useState(false);
  const typeNav = Cookies.get("type");
  const { setTheme } = useTheme();
  const navigate = useNavigate();

  const handleLinkClick = () => {
    setShowMenu(false);
  };

  return (
    <div className="bg-mains relative z-20 p-2">
      <div className="flex md:flex-row flex-col gap-4 items-center md:items-start container justify-between">
        <div className="md:hidden flex items-center">
          <Button
            onClick={() => setShowMenu(!showMenu)}
            variant="outline"
            size="icon"
          >
            {showMenu ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="flex space-x-1 bg-background border overflow-hidden rounded-full">
          <Search className="m-2" />
          <Input
            type="search"
            className="rounded-none bg-background text-foreground outline-none md:w-40 lg:w-96 border-none"
            placeholder="Title"
          />
        </div>

        <div className="hidden md:flex gap-4 flex-wrap flex-col md:flex-row">
          {typeNav === "Vet" && (
            <Link to={"vet-booking"} onClick={handleLinkClick}>
              <Button className="bg-background text-foreground">
                <Syringe />
                VET Booking
              </Button>
            </Link>
          )}
          {typeNav === "Trader" && (
            <>
              <Link to={"myProudct"} onClick={handleLinkClick}>
                <Button className="bg-background text-foreground">
                  <BriefcaseBusiness />
                  My Products
                </Button>
              </Link>
              <Link to={"addProduct"} onClick={handleLinkClick}>
                <Button className="bg-background text-foreground">
                  <Plus />
                  Add Product
                </Button>
              </Link>
            </>
          )}
          <Link to={"my-booking"} onClick={handleLinkClick}>
            <Button className="bg-background text-foreground">
              <Syringe /> My Booking
            </Button>
          </Link>
          <Link to={"/cart"} onClick={handleLinkClick}>
            <Button className="bg-background text-foreground">
              <ShoppingCart /> Cart
            </Button>
          </Link>

          <Notification />

          <Button
            onClick={() => {
              navigate("/login");
              Cookies.remove("token");
              Cookies.remove("type");
            }}
            className="bg-background text-foreground"
          >
            <LogOut /> LOGOUT
          </Button>
        </div>
      </div>

      {showMenu && (
        <div className="md:hidden absolute top-0 left-0 w-full bg-background z-10 p-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-[#269A41]">PetLife</h1>
            <Button onClick={() => setShowMenu(false)} variant="link">
              <X className="h-6 w-6" />
            </Button>
          </div>
          <ul className="flex flex-col items-center gap-4 mt-5 text-lg font-medium">
            {typeNav === "Vet" && (
              <Link to={"vet-booking"} onClick={handleLinkClick}>
                <Button className="bg-background text-foreground w-full py-2">
                  VET Booking
                </Button>
              </Link>
            )}
            {typeNav === "Trader" && (
              <>
                <Link to={"myProudct"} onClick={handleLinkClick}>
                  <Button className="bg-background text-foreground w-full py-2">
                    My Products
                  </Button>
                </Link>
                <Link to={"addProduct"} onClick={handleLinkClick}>
                  <Button className="bg-background text-foreground w-full py-2">
                    Add Product
                  </Button>
                </Link>
              </>
            )}
            <Link to={"my-booking"} onClick={handleLinkClick}>
              <Button className="bg-background text-foreground w-full py-2">
                My Booking
              </Button>
            </Link>
            <Link to={"/cart"} onClick={handleLinkClick}>
              <Button className="bg-background text-foreground w-full py-2">
                Cart
              </Button>
            </Link>
            <Button
              onClick={() => {
                navigate("/login");
                Cookies.remove("token");
                Cookies.remove("type");
              }}
              className="bg-background text-foreground  py-2"
            >
              LOGOUT
            </Button>
          </ul>
        </div>
      )}
    </div>
  );
}

export default HeaderOne;
