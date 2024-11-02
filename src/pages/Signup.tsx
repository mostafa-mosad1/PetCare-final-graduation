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
import { RootState, useAppDispatch } from "@/redux/store";
import { setAccount } from "@/redux/features/Signup/signupSlice";
import { useSelector } from "react-redux";
function Signup() {
  const { isloading } = useSelector((state: RootState) => state.signup);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IRegister>({
    resolver: yupResolver(schemaRegister),
  });
  const onSubmit: SubmitHandler<IRegister> = async (data) => {
    console.log(data);
    await dispatch(setAccount(data));
  };
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
                    <SelectItem value="Customer">Customer</SelectItem>
                    <SelectItem value="Vet">Vet</SelectItem>
                    <SelectItem value="Trader">Trader</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {errors.type && <InputError msg={errors.type.message} />}
            </div>
            <div className="flex justify-center">
              <Button
                className="bg-[#269a41da] px-12 text-lg rounded-2xl mt-5"
                disabled={isloading}
              >
                {isloading ? (
                  <svg
                    aria-hidden="true"
                    role="status"
                    className="inline w-4 h-4 me-3 text-white animate-spin"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#E5E7EB"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    />
                  </svg>
                ) : (
                  "Submit"
                )}
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
