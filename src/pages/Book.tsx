import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { VerifiedIcon } from "lucide-react";
import BookingSlot from "@/components/BookingSlot";

function Book() {
  const { id } = useParams();
  const { doctorDetails } = useSelector((state: RootState) => state.doctor);
  return (
    <div>
      <div className="flex gap-4 md:flex-row flex-col items-center md:items-start ">
        <div className="" key={id}>
          <img
            src={`http://127.0.0.1:8000/assets/images/${doctorDetails?.img}`}
            className=" object-cover max-w-72 h-56 rounded-md"
            alt={doctorDetails?.username}
            loading="lazy"
          />
        </div>
        <div className="flex-1  ">
          <div className="border border-solid border-gray-400 rounded-md p-4">
            <h2 className="capitalize text-xl font-semibold flex items-center ">
              Dr. {doctorDetails?.username}
              <VerifiedIcon fill="blue" color="white" />
            </h2>
            <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
              <p>Number :</p>
              <button className="py-0.5 px-2 border text-xs rounded-full">
                {doctorDetails?.contact_number}
              </button>
            </div>
            <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
              <p>Address :</p>
              <p className="py-0.5 px-2 border text-xs rounded-full">
                {doctorDetails?.address}
              </p>
            </div>
            <div>
              <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
                About{" "}
              </p>
              <p className="text-sm text-gray-500 max-w-[700px] mt-1">
                Dr.{doctorDetails?.username} has a strong commitment to
                delivering comprehensive medical care, focusing on preventive
                medicine, early diagnosis, and effective treatment strategies.
                Dr.
                {doctorDetails?.username} has a strong commitment to delivering
                comprehensive medical care, focusing on preventive medicine,
                early diagnosis, and effective treatment strategies.
              </p>
            </div>
            <p className="text-gray-500 font-medium mt-4">
              Appointment fee : <span className="text-gray-600">$60</span>
            </p>
          </div>
          <div className="mt-5">
            <BookingSlot doctor_id={id} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Book;
