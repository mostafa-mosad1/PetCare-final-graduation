import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  BriefcaseBusiness,
  LogOut,
  Plus,
  Search,
  ShoppingCart,
  Syringe,
} from "lucide-react";
import { useState } from "react";
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
import { useAppDispatch } from '@/redux/store';
import { getSearch } from "@/redux/features/Shop/SearchSlice";

function HeaderOne() {
  const typeNav = Cookies.get("type");
  const [searchInput, setSearchInput] = useState("");
  const { setTheme } = useTheme();
 const dispatch = useAppDispatch()
const navgate = useNavigate()
  return (
    <div className="bg-mains   relative z-20 p-2 ">
      <div className="flex md:flex-row flex-col gap-4 items-center md:items-start  container justify-between    ">
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
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(searchInput);
          }}
          action=""
        >
          <div className="flex space-x-1 bg-background  border overflow-hidden rounded-full">
            <Search className="m-2 " />
           <form>
           <Input
              onChange={(e) => {
                setSearchInput(e.target.value);
                dispatch(getSearch(e.target.value));
              }}
              type="search"
              className="rounded-none bg-background text-foreground outline-none md:w-40 lg:w-96 border-none"
              placeholder="Title"
            /> 
           </form>
          </div>
        </form>
        <div className="flex gap-4 flex-wrap flex-col md:flex-row">
          {typeNav === "Vet" && (
            <Link to={"vet-booking"}>
              <Button className="bg-background text-foreground ">
                <Syringe />
                VET Booking
              </Button>
            </Link>
          )}
          {typeNav === "Trader" && (
            <>
              <Link to={"myProudct"}>
                <Button className="bg-background text-foreground ">
                  <BriefcaseBusiness />
                  My Products
                </Button>
              </Link>
              <Link to={"addProduct"}>
                <Button className="bg-background text-foreground ">
                  <Plus />
                  Add Product
                </Button>
              </Link>
            </>
          )}
          <Link to={"my-booking"}>
            <Button className="bg-background text-foreground ">
              <Syringe /> My Booking
            </Button>
          </Link>
          <Link to={"/cart"}>
            <Button className="bg-background text-foreground">
              <ShoppingCart /> Cart
            </Button>
          </Link>
        <Notification/>
          <Button onClick={()=>{
            navgate("/login");
            Cookies.remove("token")
            Cookies.remove("type")
          }} className="bg-background text-foreground">
            <LogOut /> LOGOUT
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HeaderOne;
