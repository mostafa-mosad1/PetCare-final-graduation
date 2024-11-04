import { MoveRight } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { ISubCategories } from "@/interface";

interface IProps {
  details: ISubCategories;
}
function Pop({ details }: IProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className=" flex  mt-12">
          <Button>
            Read More
            <MoveRight className="mr-2" />
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{details.name}</DialogTitle>
          <DialogDescription>{details.description}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="relative">
            <img
              className="rounded-lg   "
              src={`http://127.0.0.1:8000/assets/images/${details.img}`}
              alt={details.name}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black opacity-40 rounded-lg" />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default Pop;
