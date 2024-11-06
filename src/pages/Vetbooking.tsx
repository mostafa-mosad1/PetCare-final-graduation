import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Check, CheckCheck, Hourglass } from "lucide-react";
import useGetHook from "@/Hooks/reactQuery";
import Cookies from "@/Cookies";
import Loader from "@/components/Loader";
import { IVetBooking } from "@/interface";
import axios from "axios";
import toast from "react-hot-toast";

function Vetbooking() {
  const token = Cookies.get("token");

  const { isLoading, data, refetch } = useGetHook({
    queryKey: ["vetBoking"],
    url: "http://127.0.0.1:8000/api/vet-booking",
    config: { headers: { Authorization: `Bearer ${token}` } },
  });
  if (isLoading) return <Loader />;
  async function approveBook(id: number) {
    console.log(id);
    try {
      const res = await axios.put(
        "http://127.0.0.1:8000/api/approve-booking",
        {
          id,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (res.status === 200) {
        toast.success("Your Book has been confirmed ", {
          position: "bottom-center",
          duration: 1500,
          style: {
            backgroundColor: "black",
            color: "white",
            width: "fit-content",
          },
        });
      }
      refetch();
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="my-10">
      <h1 className="text-center text-2xl text-foreground font-semibold my-4">
        Vet Bookings
      </h1>
      <p className="text-center text-lg text-foreground tracking-widest my-4">
        Manage New Appointments and more!
      </p>
      <Table>
        <TableCaption>A list of your recent appointment.</TableCaption>
        <TableHeader>
          <TableRow className="bg-background  rounded-lg">
            <TableHead>ID</TableHead>
            <TableHead>Pet Name</TableHead>
            <TableHead>Appointment</TableHead>
            <TableHead>Patient</TableHead>
            <TableHead className="text-center">Status</TableHead>
            <TableHead className="text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.booking.length === 0 ? (
            <TableRow>
              <TableCell className="font-medium">No</TableCell>
            </TableRow>
          ) : (
            data?.booking?.map((book: IVetBooking, idx: number) => (
              <TableRow key={book.id}>
                <TableCell className="font-medium">{idx + 1}</TableCell>
                <TableCell>{book.pet_name}</TableCell>
                <TableCell>{`${book.date} - ${book.time}`}</TableCell>
                <TableCell className="flex items-center gap-2 ">
                  <img
                    src={`http://127.0.0.1:8000/assets/images/${book.user?.img}`}
                    alt="logo"
                    className="w-10 h-10 rounded-full"
                  />
                  <p className="text-lg capitalize font-normal">
                    {book.user.username}
                  </p>
                </TableCell>
                <TableCell className="text-center">
                  <p
                    className={`py-1  text-xs gap-2 rounded-full flex justify-center items-center capitalize text-white ${
                      book.status === "pending" ? "bg-mains" : "bg-[#269a41da]"
                    }`}
                  >
                    {book.status == "pending" ? (
                      <Hourglass size={16} />
                    ) : (
                      <Check size={16} />
                    )}
                    {book.status}
                  </p>
                </TableCell>
                <TableCell className="text-center">
                  <p
                    onClick={() => approveBook(book.id)}
                    className={`py-1  text-xs gap-2 rounded-full flex justify-center items-center  text-white cursor-pointer   ${
                      book.status === "pending"
                        ? "bg-[#269a41da]"
                        : "bg-[#269a41da]"
                    }`}
                  >
                    {book.status == "pending" ? (
                      <>
                        {" "}
                        <CheckCheck />
                        Approval of Book
                      </>
                    ) : (
                      "Done"
                    )}
                  </p>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default Vetbooking;
