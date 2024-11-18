import { Button } from "@/components/ui/button";
import { SubmitHandler, useForm } from "react-hook-form";
import { IProduct } from "@/interface";
import { addProductInputs } from "@/data";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useAddProductShopMutation } from "@/redux/features/Shop/ShopSlice";

function AddProduct() {
  const [addNewProduct, { isLoading, data, isError }] =
    useAddProductShopMutation();

  const { register, handleSubmit } = useForm<IProduct>();

  const onSubmit: SubmitHandler<IProduct> = async (data, e) => {
    console.log(data)
    const image = e?.target.picture.files[0];
    const formData = new FormData();

    formData.append("category_id", data.category_id.toString());
    formData.append("type", data.type);
    formData.append("title", data.title);
    formData.append("stock", data.stock.toString());
    formData.append("price", data.price.toString());
    formData.append("img", image);

    try {
     const res = await addNewProduct(formData); // أرسل formData مباشرةً
      console.log(res)
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  console.log(data);
  console.log(isError);

  const AllChecks = addProductInputs.map((curInput, index) => (
    <div
      key={index}
      className="my-2 space-y-2 ps-4 flex items-center justify-between w-3/4 mx-auto"
    >
      <label htmlFor={curInput.id}>{curInput.label}</label>
      <input
        id={curInput.id}
        type={curInput.type}
        className="rounded-xl px-4 md:py-2 bg-background text-foreground w-[60%]"
        placeholder={curInput.placeholder}
        {...register(curInput.id, curInput.validation)}
      />
    </div>
  ));
  return (
    <>
      <p>addProduct</p>
      <div className="py-10 my-4 ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="my-2 space-y-2 ps-4 flex items-center justify-between w-3/4 mx-auto">
            <label>Category</label>
            <select
              className="rounded-xl px-4 md:py-2 w-[60%] bg-background text-foreground"
              {...register("category_id")}
            >
              <option value="1">Dogs</option>
              <option value="2">Cats</option>
              <option value="3">Fish</option>
              <option value="4">Hamster</option>
              <option value="5">Bird</option>
            </select>
          </div>
          <div className="my-2 space-y-2 ps-4 flex items-center justify-between w-3/4 mx-auto">
            <label>Type</label>
            <select
              className="rounded-xl px-4 md:py-2 w-[60%] bg-background text-foreground"
              {...register("type")}
            >
              <option value="pet">pet</option>
              <option value="food">food</option>
              <option value="Accessories">Accessories</option>
              <option value="Treatment">Treatment</option>
            </select>
          </div>
          {AllChecks}
          <div className="my-2 space-y-2 ps-4 flex items-center justify-between w-3/4 mx-auto">
            <Label htmlFor="picture">Picture</Label>
            <Input
              className="rounded-xl px-4 md:py-2 bg-background text-foreground w-[60%]"
              id="picture"
              type="file"
            />
          </div>
          <Button
            variant={"secondary"}
            className="mx-auto mt-10 block px-4 py-2 bg-gray-500 rounded-md hover:bg-green-500  text-white"
          >
            Add Product
          </Button>
        </form>
      </div>
    </>
  );
}

export default AddProduct;
