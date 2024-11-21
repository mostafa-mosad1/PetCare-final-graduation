import ResultDialog from "@/components/ResultDialog";
import { Button } from "@/components/ui/button";
import { CheckInputs } from "@/data";
import { IFormInputCheck } from "@/interface";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

function Services() {
  const [holdData, setHoldData] = useState<IFormInputCheck | null>(null);
  const [showResultDialog, setShowResultDialog] = useState(false);
  const { register, handleSubmit } = useForm<IFormInputCheck>();

  const onSubmit: SubmitHandler<IFormInputCheck> = (data) => {
    setHoldData(data);
    setShowResultDialog(true);
  };

  const AllChecks = CheckInputs.map((curInput, index) => (
    <div
      key={index}
      className="my-2 space-y-2 ps-4 flex items-center justify-between w-1/2 mx-auto"
    >
      <label>{curInput.label}</label>
      <select
        className="bg-background text-foreground p-1 rounded-md w-1/2"
        {...register(`${curInput.type}`)}
      >
        <option value="1">Yes</option>
        <option value="0">No</option>
      </select>
    </div>
  ));

  return (
    <>
      <h1 className="text-center text-2xl text-foreground font-semibold my-4">
        Services
      </h1>
      <p className="text-center text-lg text-foreground tracking-widest my-4">
        Check your pet Now!{" "}
      </p>
      <div className="py-10 my-4 rounded-md border border-foreground">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="my-2 space-y-2 ps-4 flex items-center justify-between w-1/2 mx-auto">
            <label>Type Pet</label>
            <select
              className="bg-background text-foreground p-1 rounded-md w-1/2"
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

          <Button className="mx-auto mt-10 block px-4 py-2 bg-mains rounded-md  text-white">
            Check
          </Button>
        </form>

        {holdData && showResultDialog && (
          <ResultDialog
            InputCheck={holdData}
            setShowResultDialog={setShowResultDialog}
          />
        )}
      </div>
    </>
  );
}

export default Services;
