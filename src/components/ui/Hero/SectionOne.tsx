import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BellRing, LogOut, Search, ShoppingCart, Syringe } from "lucide-react";
import { useState } from "react";
import { Moon, Sun } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "./theme-provider";

function SectionOne() {
  const [searchInput, setSearchInput] = useState("");
  const { setTheme } = useTheme();
  return (
    <div className="bg-green-500 p-2 ">
      <div className="flex justify-between items-end  w-full  space-x-2">
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
          <div className="flex space-x-1 bg-background  overflow-hidden rounded-full">
            <Search className="m-2 " />
            <Input
              onChange={(e) => {
                setSearchInput(e.target.value);
              }}
              type="search"
              className="rounded-none bg-background text-foreground outline-none md:w-40 lg:w-96 border-none"
              placeholder="Title"
            />
          </div>
        </form>
        <div className="flex gap-4">
          <Button className="bg-background text-foreground">
            <Syringe /> My Booking
          </Button>
          <Button className="bg-background text-foreground">
            <ShoppingCart /> Shopping Cart
          </Button>
          <Button className="bg-background text-foreground">
            <BellRing /> Notification
          </Button>
          <Button className="bg-background text-foreground">
            <LogOut /> LOG
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SectionOne;
