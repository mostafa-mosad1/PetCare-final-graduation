import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { BellRing } from "lucide-react";
import useGetHook from "./../Hooks/reactQuery";
import Cookies from "@/Cookies";
import { INotification } from "@/interface";

function Notification() {
  const { isLoading, data, } = useGetHook({
    queryKey: ["Notification"],
    url: "http://127.0.0.1:8000/api/notifications",
    config: {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    },
  });
  const allNotifications = data?.notifications.map((item:INotification,index:number)=>{
 return   <div key={item.id}>
        <p className=" hover:bg-foreground hover:text-black hover:font-bold hover:text-xl text-foreground border-foreground border-2 my-4 p-2 rounded-md capitalize " >{index+1} - {item.notification}</p>
    </div>
  })
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <Button className="bg-background  text-foreground">
            <BellRing /> Notification
          </Button>
        </DialogTrigger>
        <DialogContent >
          <DialogHeader>
            <DialogTitle className="text-center my-4" >Notifications</DialogTitle>
            <DialogDescription >
             {data?.notifications.length !=0? 
             
             allNotifications:<p>No Notifications</p>}
             
            
             
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default Notification;
