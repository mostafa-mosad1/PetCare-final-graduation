import { Dot } from "lucide-react";
import me from "../assets/log.png";
import useGetHook from "@/Hooks/reactQuery";
import { IVets } from "@/interface";

function Doctor() {
  const { isLoading, data } = useGetHook({
    queryKey: ["doctors"],
    url: "http://127.0.0.1:8000/api/vets",
  });
  if (isLoading) return <p>loading..............</p>;
  console.log(data?.vets);
  return (
    <>
      <div className="text-center text-2xl text-foreground font-semibold my-4">
        Top Doctors to book
      </div>
     <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
     {data?.vets.map((doctor: IVets) => (
        <div key={doctor.id} className="rounded-md overflow-hidden border border-foreground">
          <div className="">
            <img src={`http://127.0.0.1:8000/assets/images/${doctor.img}`} className="w-full h-full" alt="" />
          </div>
          <p className="text-green-500 p-2 flex space-x-1">
            <Dot /> Available
          </p>
          <h2 className="font-semibold text-3xl p-2">DR . {doctor.firstname} {doctor.lastname}</h2>
          <h3 className="font-semibold text-3xl p-2">Vet</h3>
        </div>
      ))}
     </div>
    </>
  );
}

export default Doctor;
