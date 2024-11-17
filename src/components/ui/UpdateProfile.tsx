// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { Pencil } from "lucide-react";
// import { useAppDispatch } from "@/redux/store";
// import { useState } from "react";
// interface IProps {
//   firstName: string;
//   lastName: string;
//   Address: string;
// }
// function UpdateProfile({ firstName, lastName, Address }: IProps) {
//   const dispatch = useAppDispatch();
 


//   const [oldData,setOldData] = useState({
//     firstname:firstName,
//     lastname:lastName,
//     address:Address
//   })

//  const OnChangeHandler =(e:React.ChangeEvent<HTMLInputElement>)=>{
//     e.preventDefault()
//     const {name,value} = e.target;
//     setOldData({
//         ...oldData,
//         [name] : value
//     })
//  }
//  console.log(oldData)
//   return (
//     <div>
//       <Dialog>
//         <DialogTrigger asChild>
//           <Button
//             className="absolute cursor-pointer top-2 border-none hover:bg-inherit right-4 text-foreground bg-inherit"
//             variant="outline"
//           >
//             <Pencil />
//           </Button>
//         </DialogTrigger>
//         <DialogContent className="sm:max-w-[425px]">
//           <DialogHeader>
//             <DialogTitle>Add New Pet</DialogTitle>
//             <DialogDescription>
//               Make changes to your profile here. Click save when you're done.
//             </DialogDescription>
//           </DialogHeader>
//           <div className="grid gap-4 py-4">
//             <form >
//             <div className="mb-2" >
//                 <label
//                   htmlFor="firstname"
//                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   First Name
//                 </label>
//                 <input
//                 onChange={OnChangeHandler}
//                   type="text"
//                   id="firstname"
//                   value={firstName}
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                 />
//               </div>
//               <div className="mb-2" >
//                 <label
//                   htmlFor="lastname"
//                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   Last Name
//                 </label>
//                 <input
//                   type="text"
//                   value={lastName}
//                   onChange={OnChangeHandler}
//                   id="lastname"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                 />
//               </div>
//               <div className="mb-2" >
//                 <label
//                   htmlFor="address"
//                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   Address
//                 </label>
//                 <input
//                   type="text"
//                   value={Address}
//                   onChange={OnChangeHandler}
//                   id="address"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                 />
//               </div>
             

//               <Button type="submit">Update</Button>
//             </form>
//           </div>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }

// export default UpdateProfile;

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { UpdateFormProfile } from "@/data";
import { AddPetSchema, updateProfileSchema } from "@/validation/Schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import InputError from "../InputError";
import { IUpdate } from "@/interface";
import { Pencil } from "lucide-react";
import { useAppDispatch } from "@/redux/store";
import { UpdateData } from "@/redux/features/UpdateProfileSlice/UpdateProfileSlice";
interface IProps {
    firstName: string;
    lastName: string;
    Address: string;
}
function UpdateProfile({firstName,lastName,Address}: IProps) {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUpdate>({
    resolver: yupResolver(updateProfileSchema),
    defaultValues:{
        firstname:firstName,
        lastname:lastName,
        address:Address
    }
  });
  const onSubmit: SubmitHandler<IUpdate> = async (data) => {
    console.log(data);
    dispatch(UpdateData(data));
  };

  const UpdateDataInputs = UpdateFormProfile.map((el, idx) => (
    <div className="mb-2" key={idx}>
      <label
        htmlFor={el.id}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {el.label}
      </label>
      <input
        type={el.type}
        {...register(el.id, el.validation)}

        id={el.id}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      {errors[el.id] && <InputError msg={errors[el.id]?.message} />}
    </div>
  ));
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            className="absolute cursor-pointer top-2 border-none hover:bg-inherit right-4 text-foreground bg-inherit"
            variant="outline"
          >
            <Pencil />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add New Pet</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <form onSubmit={handleSubmit(onSubmit)}>
              {UpdateDataInputs}

                <Button type="submit">Update</Button>

            </form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default UpdateProfile;
