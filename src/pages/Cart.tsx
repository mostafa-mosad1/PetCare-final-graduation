import { Minus, Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  useConfirmCartMutation,
  useDecreaseProductNumberMutation,
  useGetCartQuery,
  useIncreaseProductNumberMutation,
} from "@/redux/features/Cart/CartSlice";
import { IOrder } from "@/interface";
import cartEmpty from "../assets/Images/cartEmpty.png";
import Loader from "@/components/Loader";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
function Cart() {
  const { data, isLoading } = useGetCartQuery("");
  const [increaseFunction] = useIncreaseProductNumberMutation();
  const [decreaseFunction] = useDecreaseProductNumberMutation();
  const [confirmFunction, { isLoading: loadChechout }] =
    useConfirmCartMutation();

  if (isLoading) return <Loader />;
  const finalPrice = data?.cartItems.reduce(
    (acc: number, el: IOrder) => +el.product.price * el.quantity + acc,
    0
  );
  return (
    <div className="p-4 bg-background rounded-md">
      <div className="md:flex-row flex-col flex justify-between items-center border-b-2 border-foreground py-2">
        <p className="font-normal text-lg capitalize">continue shopping</p>
        <p className="font-normal text-lg capitalize">
          {data?.cartItems?.length} Items
        </p>
        <p className="font-normal text-lg capitalize">
          need help ? call (+20) 111-222-3333
        </p>
      </div>
      <div className="flex gap-5 my-5 md:flex-row flex-col">
        <div className="flex-1 left overflow-auto max-h-[400px]">
          {data?.cartItems?.length === 0 ? (
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
              {data?.cartItems?.map((el: IOrder) => (
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
                    <p>Price : {+el.product.price * el.quantity} EGP</p>
                    <p>Quantity : {el.quantity} </p>
                  </div>
                  <div className="flex flex-col gap-2 cursor-pointer">
                    <Button
                      onClick={() => {
                        increaseFunction({
                          quantity: +el.quantity + 1,
                          cart_id: el.id,
                        });
                      }}
                      className="flex justify-center bg-green-500 text-foreground p-2 rounded-md"
                    >
                      {" "}
                      Increase <Plus />
                    </Button>
                    <Button
                      onClick={() => {
                        decreaseFunction({
                          quantity: +el.quantity - 1,
                          cart_id: el.id,
                        });
                      }}
                      className="flex justify-center text-foreground bg-red-500 p-2 rounded-md"
                    >
                      {" "}
                      Decrease <Minus />
                    </Button>
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
              <p>All tax : {(finalPrice * 0.05).toFixed(2)}</p>
              <p>estimated total : {(finalPrice * 1.05).toFixed(2)}</p>
            </div>
            <Button
              onClick={() => {
                confirmFunction("");
                toast.success("The Amount has been paid Successfully ", {
                  position: "bottom-center",
                  duration: 1500,
                  style: {
                    backgroundColor: "black",
                    color: "white",
                    width: "fit-content",
                  },
                });
              }}
              className="w-full mt-4 text-lg"
            >
              {loadChechout ? (
                <svg
                  aria-hidden="true"
                  role="status"
                  className="inline w-4 h-4 me-3 text-white animate-spin"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="#E5E7EB"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentColor"
                  />
                </svg>
              ) : (
                "Check Out"
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
