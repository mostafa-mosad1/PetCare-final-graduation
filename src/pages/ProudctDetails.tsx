import { Button } from "@/components/ui/button";
import { IProudctShop } from "@/interface";
import { useGetProudctShopQuery } from "@/redux/features/Shop/ShopSlice";
import { useParams } from "react-router-dom";

function ProudctDetails() {
  const { data, isLoading } = useGetProudctShopQuery("");

  const { id } = useParams();

  if (isLoading) return "Load";
  const detailProudct: IProudctShop = data.products.find(
    (el: IProudctShop) => el.id === +id!
  );
  return (
    <div>
      <div className="py-10 w-5/6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[30%_minmax(0,1fr)] gap-3 ">
          <div>
            <div className="w-full">
              <img
                src={`http://127.0.0.1:8000/assets/images/${detailProudct.img}`}
                alt={detailProudct.title}
                className="w-full object-cover h-64 md:h-auto"
                loading="lazy"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center p-4  bg-[#112e4ff1] text-foreground rounded-md">
            <h2 className="font-semibold text-lg md:text-xl">
              Title : {detailProudct.title}
            </h2>
            <p className="my-4  text-sm md:text-base capitalize">
              Category : {detailProudct.type}
            </p>
            <h3 className="font-medium text-sm md:text-base ">
              Instock : {detailProudct.stock}
            </h3>
            <div className="flex justify-between items-center my-2 text-sm md:text-base">
              <h3 className="font-medium">Price : {detailProudct.price} EGP</h3>
            </div>
            <Button className="w-full flex justify-center bg-green-500 p-2 text-white font-bold rounded-md transform transition-transform duration-500 disabled:bg-green-200">
              ADD TO CART
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProudctDetails;
