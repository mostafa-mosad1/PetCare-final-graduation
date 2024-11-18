import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Cookies from "@/Cookies";
import axios from "axios";
import { ImageUp } from "lucide-react";


export default function ChangeImage() {


//  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const input = document.getElementById("picture") as HTMLInputElement; // احصل على الحقل
//     if (input?.files?.[0]) {
//       console.log(input.files[0]); // الملف المرفوع
//     } else {
//       console.log("لم يتم اختيار أي ملف.");
//     }
//   };
  


const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const input = document.getElementById("picture") as HTMLInputElement; 
    if (input?.files?.[0]) {
      const file = input.files[0];
      console.log("الملف المرفوع:", file);
  
      const formData = new FormData();
      formData.append("img", file); 
  
      // إرسال البيانات باستخدام axios
      try {
        const response = await axios.post("http://127.0.0.1:8000/api/change-image", formData, {
          headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${Cookies.get("token")}`,
          },
        });
        console.log("الاستجابة من الخادم:", response.data);
      } catch (error) {
        console.error("حدث خطأ أثناء رفع الملف:", error);
      }
    } else {
      console.log("لم يتم اختيار أي ملف.");
    }
  };
  


  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="absolute cursor-pointer top-2 border-none hover:bg-inherit right-14 text-foreground bg-inherit"
          variant="outline"
        >
          <ImageUp />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmitHandler}>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="picture">Picture</Label>
            <Input id="picture" type="file" />
          </div>

          <Button className="block mx-auto my-3" type="submit">Save changes</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
