import { Button } from "@/components/ui/button";
import { CheckInputs } from "@/data";
import { SubmitHandler, useForm } from "react-hook-form";

enum IAnswer {
  yes = "1",
  no = "0",
}

interface IFormInput {
  yala:string
  temprature: IAnswer;
  voming: IAnswer;
  lack_of_appetite: IAnswer;
  urinating: IAnswer;
}

function Services() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  const AllChecks = CheckInputs.map((curInput,index) => (
    <div key={index} className="my-2 ps-4 flex justify-between w-1/2">
      <label>{curInput.label}</label>
      <select className="bg-background text-foreground w-1/4" {...register(`${curInput.type}`)}>
        <option value="1">Yes</option>
        <option value="0">No</option>
      </select>
    </div>
  ));

  return (
    <>
      <div className="">
        <div className="">
          <h2 className="text-4xl text-center font-bold">Check your pet Now !</h2>
          <p className="w-[14%] h-1 bg-foreground my-2 mx-auto"></p>
        </div>
        <div className=" flex justify-center items-center container py-10 bg-red-400 my-4 rounded-md border border-foreground">
          <form className="flex-1 bg-indigo-600 p-4 " onSubmit={handleSubmit(onSubmit)}>
            {AllChecks}
            <label htmlFor="yala">High temperatue?</label>
            <input type="radio" value={"Yes"}  {...register("yala")} />
            <br />

           <Button type="submit" className="mx-auto block" >Submit</Button>
          </form>
          <div className=" bg-gray-700 flex-1">
            result
          </div>
        </div>
          
      </div>
    </>
  );
}

export default Services;
