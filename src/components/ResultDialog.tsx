import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import useGetHook from "@/Hooks/reactQuery";
import { IFormInputCheck } from "@/interface";

interface Iprops {
  InputCheck: IFormInputCheck;
  setShowResultDialog: (data: boolean) => void;
}

function ResultDialog({ InputCheck, setShowResultDialog }: Iprops) {
  const { data } = useGetHook({
    queryKey: ["result"],
    url: `http://127.0.0.1:8000/api/check?category_id=${InputCheck?.category_id}&temprature=${InputCheck?.temprature}&voming=${InputCheck?.voming}&lack_of_appetite=${InputCheck?.lack_of_appetite}&urinating=${InputCheck?.urinating}`,
  });

  return (
    <Dialog open={true} onOpenChange={() => setShowResultDialog(false)}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="mx-auto text-2xl font-bold">
            Diagnosis
          </DialogTitle>
          <DialogDescription>
            Diseases are abnormal conditions affecting body functions, caused by
            infectious agents, genetic factors.
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center items-center">
          <p className="text-xl font-bold me-2">Result</p>
          <p className="text-xl font-bold">: {data?.result}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ResultDialog;
