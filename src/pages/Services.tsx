import ResultDialog from "@/components/ResultDialog";
import { CheckInputs } from "@/data";
import { IFormInputCheck } from "@/interface";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

function Services() {
  const [holdData, SetHoldData] = useState<IFormInputCheck>();
  const { register, handleSubmit } = useForm<IFormInputCheck>();
  const onSubmit: SubmitHandler<IFormInputCheck> = (data) => {
    SetHoldData(data);
   
  };

  const AllChecks = CheckInputs.map((curInput, index) => (
    <div
      key={index}
      className="my-2  space-y-2 ps-4 flex items-center justify-between w-1/2 mx-auto"
    >
      <label>{curInput.label}</label>
      <select
        className="bg-background text-foreground p-1 rounded-md w-1/2  "
        {...register(`${curInput.type}`)}
      >
        <option value="1">Yes</option>
        <option value="0">No</option>
      </select>
    </div>
  ));

  return (
    <>
      <h2 className="text-4xl text-center font-bold">Check your pet Now !</h2>
      <div className="   py-10  my-4 rounded-md border border-foreground">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="my-2  space-y-2 ps-4 flex items-center justify-between w-1/2 mx-auto">
            <label>Type Pet</label>
            <select
              className="bg-background text-foreground p-1 rounded-md w-1/2  "
              {...register("category_id")}
            >
              <option value="1">Dogs</option>
              <option value="2">Cats</option>
              <option value="3">Fish</option>
              <option value="4">Hamster</option>
              <option value="5">Bird</option>
            </select>
          </div>
          {AllChecks}

          <ResultDialog InputCheck={holdData!} />
        </form>
      </div>
    </>
  );
}

export default Services;
