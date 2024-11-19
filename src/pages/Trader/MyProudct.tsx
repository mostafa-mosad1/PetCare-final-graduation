import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useGetHook from "@/Hooks/reactQuery";
import Cookies from "@/Cookies";
import Loader from "@/components/Loader";
import { IProudctShop } from "@/interface";
import DeleteProudct from "@/components/DeleteProudct";

function MyProudct() {
  const token = Cookies.get("token");

  const { isLoading, data, refetch } = useGetHook({
    queryKey: ["myProudct"],
    url: "http://127.0.0.1:8000/api/my-products",
    config: { headers: { Authorization: `Bearer ${token}` } },
  });
  if (isLoading) return <Loader />;
  return (
    <div className="my-10">
      <h1 className="text-center text-2xl text-foreground font-semibold my-4">
        My Proudct
      </h1>
      <p className="text-center text-lg text-foreground tracking-widest my-4">
        Review Your Proudct
      </p>
      <Table>
        <TableCaption>A list of your recent Proudct.</TableCaption>
        <TableHeader>
          <TableRow className="bg-background  rounded-lg">
            <TableHead>ID</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Type of Proudct</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Stock</TableHead>
            <TableHead>Image</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.products.length === 0 ? (
            <TableRow>
              <TableCell colSpan={7} className="font-medium text-center">
                No Proudcts Yet!
              </TableCell>
            </TableRow>
          ) : (
            data?.products?.map((el: IProudctShop, idx: number) => (
              <TableRow key={el.id}>
                <TableCell className="font-medium">{idx + 1}</TableCell>
                <TableCell>{el.title}</TableCell>
                <TableCell>{el.type} </TableCell>
                <TableCell>{el.price} </TableCell>
                <TableCell>{el.stock} </TableCell>
                <TableCell className=" ">
                  <img
                    src={`http://127.0.0.1:8000/assets/images/${el.img}`}
                    alt="logo"
                    className="w-10 h-10 rounded-full"
                  />
                </TableCell>
                <TableCell className="cursor-pointer">
                  <div>
                    <DeleteProudct id={el.id} refetch={refetch} />
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default MyProudct;
