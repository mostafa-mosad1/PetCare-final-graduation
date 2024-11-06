import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Hourglass } from "lucide-react";
import useGetHook from "@/Hooks/reactQuery";
import Cookies from "@/Cookies";
import Loader from "@/components/Loader";
import { IBookingVet } from "@/interface";

function Mybooking() {
  const token = Cookies.get("token");

  const { isLoading, data } = useGetHook({
    queryKey: ["booking"],
    url: "http://127.0.0.1:8000/api/my-booking",
    config: { headers: { Authorization: `Bearer ${token}` } },
  });
  if (isLoading) return <Loader />;
  return (
    <div className="my-10">
      <h1 className="text-center text-2xl text-foreground font-semibold my-4">
        My Booking
      </h1>
      <p className="text-center text-lg text-foreground tracking-widest my-4">
        Review Reservations
      </p>
      <Table>
        <TableCaption>A list of your recent appointment.</TableCaption>
        <TableHeader>
          <TableRow className="bg-background  rounded-lg">
            <TableHead>ID</TableHead>
            <TableHead>Pet Name</TableHead>
            <TableHead>Appointment</TableHead>
            <TableHead>Doctor</TableHead>
            <TableHead className="text-center">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.booking.map((book: IBookingVet, idx: number) => (
            <TableRow key={book.id}>
              <TableCell className="font-medium">{idx + 1}</TableCell>
              <TableCell>{book.pet_name}</TableCell>
              <TableCell>{`${book.date} - ${book.time}`}</TableCell>
              <TableCell className="flex items-center gap-2 ">
                <img
                  src={`http://127.0.0.1:8000/assets/images/${book.doctor.img}`}
                  alt="logo"
                  className="w-10 h-10 rounded-full"
                />
                <p className="text-lg capitalize font-normal">
                  {book.doctor.username}
                </p>
              </TableCell>
              <TableCell className="text-center">
                <p className="py-1 bg-mains text-xs gap-2 rounded-full flex justify-center items-center capitalize text-white">
                  <Hourglass size={16} />
                  {book.status}
                </p>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default Mybooking;
