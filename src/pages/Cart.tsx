import { Minus, Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useGetCartQuery } from "@/redux/features/Cart/CartSlice";
import { IOrder } from "@/interface";
import cartEmpty from "../assets/Images/cartEmpty.png";
import Loader from "@/components/Loader";
import { Link } from "react-router-dom";
function Cart() {
  const { data, isLoading } = useGetCartQuery("");

  if (isLoading) return <Loader />;
  const finalPrice = data?.cartItems.reduce(
    (acc: number, el: IOrder) => +el.product.price + acc,
    0
  );
  return (
    <div className="p-4 bg-background rounded-md">
      <div className="md:flex-row flex-col flex justify-between items-center border-b-2 border-foreground py-2">
        <p className="font-normal text-lg capitalize">continue shopping</p>
        <p className="font-normal text-lg capitalize">
          {data.cartItems.length} Items
        </p>
        <p className="font-normal text-lg capitalize">
          need help ? call (+20) 111-222-3333
        </p>
      </div>
      <div className="flex gap-5 my-5 md:flex-row flex-col">
        <div className="flex-1 left overflow-auto max-h-[400px]">
          {data.cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center w-full p-2 mt-4 ">
              <span>Your cart is empty!</span>
              <img
                src={cartEmpty}
                alt="cartEmpty"
                loading="lazy"
                className="w-72"
              />
            </div>
          ) : (
            <>
              {" "}
              {data.cartItems.map((el: IOrder) => (
                <div
                  className="flex md:justify-between md:items-center border border-foreground p-2 md:flex-row flex-col m-2  "
                  key={el.id}
                >
                  <div>
                    <img
                      src={`http://127.0.0.1:8000/assets/images/${el.product.img}`}
                      alt={el.product.title}
                      className="block md:w-40 rounded-md "
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1 ms-5 text-lg font-light capitalize ">
                    <Link to={`/shop/proudctDetails/${el.product.id}`}>
                      <h3 className="underline">{el.product.title} </h3>
                    </Link>
                    <p>Category : {el.product.type}</p>
                    <p>Price : {el.product.price} EGP</p>
                    <p>Quantity : {el.quantity} </p>
                  </div>
                  <div className="flex flex-col gap-2 cursor-pointer">
                    <p className="flex justify-center bg-green-500 p-2 rounded-md">
                      Increase <Plus />
                    </p>
                    <p className="flex justify-center bg-red-500 p-2 rounded-md">
                      Decrease <Minus />
                    </p>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
        <div className="right">
          <div>
            <p className="capitalize font-normal text-lg">enter promo code</p>
            <div className="flex gap-3 mt-2 ">
              <Input placeholder="Enter Promo" />
              <Button>Submit</Button>
            </div>
            <h3 className="capitalize text-lg mt-3">
              <span className="text-yellow-700 underline text-lg">signin</span>{" "}
              to your account to see available <br /> rewards
            </h3>
            <div className="capitalize font-normal text-lg mt-2">
              <p>estimated sales tax : 5%</p>
              <p>All tax : {finalPrice * 0.05}</p>
              <p>estimated total : {finalPrice * 1.05}</p>
            </div>
            <Button className="w-full mt-4 text-lg">Check out</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
