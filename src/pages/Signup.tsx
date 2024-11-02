import { Button } from "@/components/ui/button";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import registerAn from "../assets/Images/login.json";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { formRegister } from "@/data";
import { IRegister } from "@/interface";
import { schemaRegister } from "@/validation/Schema";
import InputError from "@/components/InputError";
function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IRegister>({
    resolver: yupResolver(schemaRegister),
  });
  const onSubmit: SubmitHandler<IRegister> = (data) => console.log(data);
  const renderRegister = formRegister.map((el, idx) => (
    <div className="flex flex-col" key={idx}>
      <div className="flex justify-between items-center">
        <label htmlFor={el.id} className="md:text-lg lg:text-xl font-normal">
          {el.name}
        </label>
        <input
          type={el.type}
          className="rounded-xl px-4 md:py-2 w-[60%]"
          placeholder={el.placeholder}
          {...register(el.id, el.validation)}
        />
      </div>
      {errors[el.id] && <InputError msg={errors[el.id]?.message} />}
    </div>
  ));

  return (
    <div className="md:h-screen w-full flex items-center justify-center bg-[#269a41da]">
      <div className="md:rounded-[2.5rem] m-2 md:m-0 rounded-md bg-[#E2EDFF] flex md:flex-row flex-col md:justify-between md:items-center md:p-10 p-6 container ">
        <div className="flex-col flex  flex-1 md:space-y-6 space-y-3 p-4">
          <div className="flex flex-col space-y-3">
            <h1 className="text-3xl font-bold">Sign up</h1>
            <p className="text-lg font-normal">
              Always Have Account ?{" "}
              <Link to={"/login"} className="underline text-blue-500">
                Login Here
              </Link>
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col space-y-4">
              {renderRegister}

              <Select
                onValueChange={(value) => {
                  setValue("type", value);
                }}
                defaultValue=""
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Who?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>You Are</SelectLabel>
                    <SelectItem value="Custmoer">Custmoer</SelectItem>
                    <SelectItem value="Vet">Vet</SelectItem>
                    <SelectItem value="Trader">Trader</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {errors.type && <InputError msg={errors.type.message} />}
            </div>
            <div className="flex justify-center">
              <Button className="bg-[#269a41da] px-12 text-lg rounded-2xl mt-5">
                Submit
              </Button>
            </div>
          </form>
        </div>
        <div className="flex flex-1">
          <div className=" ">
            <Lottie animationData={registerAn} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
