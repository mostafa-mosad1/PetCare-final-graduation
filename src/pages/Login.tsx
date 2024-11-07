import { useForm, SubmitHandler } from "react-hook-form";
import { ILoginInput } from "./../interface/index";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "@/validation/Schema";
import { FormLogin } from "@/data";
import InputError from "@/components/InputError";
import Lottie from "lottie-react";
import LoginAnimated from "../assets/Images/register.json";
import { useAppDispatch } from "@/redux/store";
import { SignInFuncation } from "@/redux/features/SignIn/SignInSlice";
import { GetUserProfile } from "@/redux/features/Profile/ProfileSlice";

function Login() {
  const dispatch = useAppDispatch();
  const navgate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginInput>({ resolver: yupResolver(LoginSchema) });
  const onSubmit: SubmitHandler<ILoginInput> = async (data) => {
    console.log(data);
    const LoginResose = await dispatch(SignInFuncation(data));
    await dispatch(GetUserProfile(LoginResose.payload));

    navgate("/");
  };

  const renderLogin = FormLogin.map((el, idx) => (
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
    <>
      <div className="md:h-screen w-full flex items-center justify-center bg-[#269a41da]">
        <div className="md:rounded-[2.5rem] m-2 md:m-0 rounded-md bg-[#E2EDFF] flex md:flex-row flex-col md:justify-between items-center md:p-10 p-6 container ">
          <div className="flex w-full order-2    ">
            <div className=" ">
              <Lottie animationData={LoginAnimated} />
            </div>
          </div>
          <div className="w-full order-1 md:order-2 text-center space-y-2">
            <h1 className="text-3xl mb-10 font-bold">Sign In</h1>
            <form className=" space-y-4" onSubmit={handleSubmit(onSubmit)}>
              {renderLogin}

              <Button
                variant={"default"}
                className="bg-[#269a41da] px-12 text-lg rounded-2xl mt-5"
                type="submit"
              >
                Sign In
              </Button>
            </form>
            <p className=" text-xl font-bold ">
              Don't have account?{" "}
              <Link className="text-green-500 underline" to={"/signup"}>
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
