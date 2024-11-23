import pets from "../assets/Images/pets.jpg";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { RadioGroupPet } from "@/data";
import { Button } from "@/components/ui/button";
import { useGetProudctShopQuery } from "@/redux/features/Shop/ShopSlice";
import { IProudctShop } from "@/interface";
import SkeletonCard from "@/components/SkeletonCard";
import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { useAddProudctCartMutation } from "@/redux/features/Cart/CartSlice";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Input } from "@/components/ui/input";

function Shop() {
  const [category, setCategory] = useState<string | null>(null);
  const [type, setType] = useState<string | null>(null);
  const [search, setSearch] = useState<string | null>(null);
  const { SearchText } = useSelector((store: RootState) => store.Search);
  const { data, isLoading } = useGetProudctShopQuery({
    category,
    type,
    search,
  });
  // console.log(SearchText);
  const [addtoCart, { isLoading: loadingCart }] = useAddProudctCartMutation();
  const renderRadioPet = RadioGroupPet.map((el) => (
    <div className="flex items-center space-x-2" key={el.id}>
      <RadioGroupItem
        value={el.value}
        id={el.id}
        className="peer h-4 w-4 border-2 border-white rounded-full bg-white dark:bg-gray-700 checked:bg-blue-500 checked:border-blue-500 dark:checked:bg-blue-400 dark:checked:border-blue-400 focus:outline-none"
      />
      <Label htmlFor={el.id} className="text-lg">
        {el.Label}
      </Label>
    </div>
  ));

  async function handleAddCart(id: number) {
    try {
      await addtoCart(String(id));
      toast.success("Proudct Add Successfully to Cart", {
        position: "bottom-center",
        duration: 1500,
        style: {
          backgroundColor: "black",
          color: "white",
          width: "fit-content",
        },
      });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="flex gap-8 justify-center mb-5 bg-[#112e4ff1] p-4 rounded-md">
      <div className="flex flex-col sticky h-fit top-4 left-0 z-10 space-y-4">
        <h2 className="text-xl leading-5 text-background">Pet Category</h2>
        <div>
          <Select
            onValueChange={(value) => {
              setCategory(value);
            }}
            defaultValue=""
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a Pet" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Pets</SelectLabel>
                <SelectItem value="1">Dog</SelectItem>
                <SelectItem value="2">Cat</SelectItem>
                <SelectItem value="3">Fish</SelectItem>
                <SelectItem value="4">Hamster</SelectItem>
                <SelectItem value="5">Bird</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="text-background">
          <RadioGroup
            onValueChange={(value) => {
              setType(value);
            }}
            defaultValue=""
          >
            {renderRadioPet}
          </RadioGroup>
        </div>
      </div>

      <div className="flex-1">
        <div>
          <img
            src={pets}
            alt="pets"
            loading="lazy"
            className="w-full h-64 object-cover rounded-md"
          />
        </div>

        <form
          className="flex my-4"
          onSubmit={(e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            const form = e.currentTarget;
            const input = form.elements.namedItem(
              "searchInput"
            ) as HTMLInputElement;

            setSearch(input.value);
          }}
        >
          <Input
            id="searchInput"
            type="search"
            className=" flex-1  me-4 rounded-md bg-background text-foreground outline-none md:w-40 lg:w-96 border-none"
            placeholder="Title"
          />
          <Button className="bg-background text-foreground" type="submit">
            Search
          </Button>
        </form>

        <div>
          {isLoading ? (
            <SkeletonCard />
          ) : data?.products?.length === 0 ? (
            <h1 className="text-center text-foreground text-2xl p-4">
              No Products Yet!
            </h1>
          ) : (
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-4 py-4">
              {data?.products?.map((el: IProudctShop) => (
                <div
                  key={el.id}
                  className="bg-secondary overflow-hidden group border-2 border-transparent hover:border-2 hover:border-green-500 rounded-md p-2 cursor-pointer h-[400px]"
                >
                  <div className="flex flex-col h-full">
                    <Link to={`proudctDetails/${el.id}`}>
                      <div>
                        <img
                          src={`http://127.0.0.1:8000/assets/images/${el.img}`}
                          alt={el.title}
                          loading="lazy"
                          className="w-full h-[200px] object-cover rounded-md"
                        />
                      </div>
                      <div className="py-2 px-1 flex flex-col gap-4 justify-between ">
                        <h2 className="text-[#269A41] font-semibold capitalize">
                          {el.type}
                        </h2>
                        <h2 className="font-semibold">{el.title}</h2>
                        <div className="flex justify-between items-center my-2">
                          <h3 className="font-medium">{el.price} EGP</h3>
                          <h3 className="font-medium">Instock : {el.stock}</h3>
                        </div>
                      </div>
                    </Link>

                    <div className="flex items-center gap-3">
                      <Button
                        onClick={() => handleAddCart(el.id)}
                        className="w-full flex justify-center bg-green-500 p-2 text-white font-bold rounded-md translate-y-[200%] group-hover:translate-y-[0%] transition-all duration-500 disabled:bg-green-200"
                      >
                        {loadingCart ? "load" : "Add To Cart"}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Shop;
