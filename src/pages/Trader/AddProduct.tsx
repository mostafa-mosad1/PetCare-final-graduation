import { Button } from "@/components/ui/button";
import { SubmitHandler, useForm } from "react-hook-form";
import { IProduct } from "@/interface";
import { addProductInputs } from "@/data";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useAddProductShopMutation } from "@/redux/features/Shop/ShopSlice";
import { addProudctSchema } from "@/validation/Schema";
import { yupResolver } from "@hookform/resolvers/yup";
import InputError from "@/components/InputError";
import { ChangeEvent, useState } from "react";
import toast from "react-hot-toast";

function AddProduct() {
  const [img, setImg] = useState<FileList | null>(null);
  const [image, setImage] = useState(null);

  const [addNewProduct, { isLoading }] = useAddProductShopMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProduct>({
    resolver: yupResolver(addProudctSchema),
  });
  async function handleChangeimg(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target?.files![0];

    await setImg(e.target.files);
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result); 
      };
      reader.readAsDataURL(file);
    } else {
      setImage(null);
    }
  }

  const onSubmit: SubmitHandler<IProduct> = async (data) => {
    const formData = new FormData();
    formData.append("category_id", data.category_id.toString());
    formData.append("type", data.type);
    formData.append("title", data.title);
    formData.append("stock", data.stock.toString());
    formData.append("price", data.price.toString());
    if (img) {
      formData.append("img", img[0]);
    }

    try {
      await addNewProduct(formData);
      toast.success("You Product Added Successfully In Shop", {
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
  };
  const AllChecks = addProductInputs.map((curInput, index) => (
    <div key={index} className="my-2 space-y-2  flex flex-col w-3/4 mx-auto">
      <label className="text-lg font-semibold" htmlFor={curInput.id}>
        {curInput.label}
      </label>
      <input
        id={curInput.id}
        type={curInput.type}
        className="rounded-md px-4 md:py-2 bg-background text-foreground "
        placeholder={curInput.placeholder}
        {...register(curInput.id, curInput.validation)}
      />
      {errors[curInput.id] && <InputError msg={errors[curInput.id]?.message} />}
    </div>
  ));
  return (
    <>
      <div className="py-10 my-4 ">
        <h1 className="text-center text-2xl text-foreground font-semibold my-4">
          Add New Product
        </h1>
        <p className="text-center text-lg text-foreground tracking-widest my-4">
          Please fill out the form below to add a new product to your shop.
        </p>
        <div className=" border border-foreground rounded-md p-2   items-center flex justify-">

       
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" rounded-lg  w-3/4  py-4 shadow-lg"
        >
          <div
            className="flex md:items-center md:justify-between flex-col md:flex-row  gap-4  w-3/4 mx-auto
 "
          >
            <div className="my-2 flex flex-col space-y-2 flex-1  ">
              <label className="text-lg font-semibold">Category</label>
              <select
                className="rounded-md px-4 md:py-2  bg-background text-foreground"
                {...register("category_id")}
              >
                <option value="1">Dogs</option>
                <option value="2">Cats</option>
                <option value="3">Fish</option>
                <option value="4">Hamster</option>
                <option value="5">Bird</option>
              </select>
            </div>
            <div className="my-2 flex flex-col space-y-2  flex-1 ">
              <label className="text-lg font-semibold">Type</label>
              <select
                className="rounded-md px-4 md:py-2  bg-background text-foreground"
                {...register("type")}
              >
                <option value="pet">pet</option>
                <option value="food">food</option>
                <option value="Accessories">Accessories</option>
                <option value="Treatment">Treatment</option>
              </select>
            </div>
          </div>
          {AllChecks}
          <div className="my-2 space-y-2 flex flex-col w-3/4 mx-auto">
            <Label className="text-lg font-semibold" htmlFor="picture">
              Picture
            </Label>
            <Input
              className="rounded-md  md:py-2 block bg-background text-foreground "
              id="picture"
              type="file"
              accept="image/*"
              onChange={(e) => handleChangeimg(e)}
            />
            {!img && <InputError msg="Add Photo Please" />}
          </div>
          <Button
            variant={"secondary"}
            className="mx-auto mt-10 block px-4 py-2 bg-mains rounded-md hover:bg-mains  text-white"
          >
            {isLoading ? (
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
              "  Add Product"
            )}
          </Button>
        </form>
        <div
       className=" w-1/4  border-2 border-gray-300 rounded-lg flex justify-center items-center overflow-hidden"
      >
        {image ? (
          <img
            src={image}
            alt="Selected"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <p className="text-foreground p-4 text-2xl font-bold" >No Image</p>
        )}
      </div>
        </div>
      
      </div>
    </>
  );
}

export default AddProduct;
