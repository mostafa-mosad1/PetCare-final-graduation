import { Dot } from "lucide-react";
import useGetHook from "@/Hooks/reactQuery";
import { IVets } from "@/interface";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/redux/store";
import { getDoctorDetails } from "@/redux/features/Doctor/DoctorSlice";
import Loader from "@/components/Loader";

function Doctor() {
  const navgite = useNavigate();
  const dispatch = useAppDispatch();
  const { isLoading, data } = useGetHook({
    queryKey: ["doctors"],
    url: "http://127.0.0.1:8000/api/vets",
  });
  if (isLoading) return <Loader />;
  return (
    <div className="my-10">
      <h1 className="text-center text-2xl text-foreground font-semibold my-4">
        Top Doctors to book
      </h1>
      <p className="text-center text-lg text-foreground tracking-widest my-4">
        Simply browse through our extensive list of trusted doctors.
      </p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 my-8">
        {data?.vets.map((doctor: IVets) => (
          <div
            key={doctor.id}
            className=" overflow-hidden border-2 rounded-md border-blue-200 hover:-translate-y-4 transition-all duration-200  "
            onClick={async () => {
              await dispatch(getDoctorDetails(doctor));
              navgite(`/book/${doctor.id}`);
            }}
          >
            <div className="relative">
              <img
                src={`http://127.0.0.1:8000/assets/images/${doctor.img}`}
                className=" object-cover w-full h-52"
                alt={doctor.username}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black opacity-10 " />
            </div>
            <div className="p-2 ">
              <p className="text-green-500 font-medium  flex space-x-1">
                <Dot /> Available
              </p>
              <h2 className="font-semibold text-lg capitalize">
                Dr . {doctor.firstname} {doctor.lastname}
              </h2>
              <h3 className="font-semibold text-sm text-[#4b5563] ">Vet</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Doctor;
