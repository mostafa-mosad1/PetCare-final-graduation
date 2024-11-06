import { Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ICategories } from "@/interface";
import { CategoriesFunction } from "@/redux/features/Categories/CategoriesSlice";
import { RootState, useAppDispatch } from "@/redux/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "@/components/Loader";
function CategoreLayout() {
  const [id, setId] = useState(0);
  const dispatch = useAppDispatch();
  const navgate = useNavigate();
  useEffect(() => {
    dispatch(CategoriesFunction());
  }, [dispatch]);
  const { loading, data }: { loading: boolean; data: ICategories[] } =
    useSelector((state: RootState) => state.Categories);
  if (loading) return <Loader />;
  return (
    <div>
      <div className="flex flex-col gap-4">
        <h1 className="text-center text-3xl font-bold">Categories </h1>
        <p className="text-center text-lg font-normal lowercase tracking-widest">
          KNOW WHAT TYPE OF PETS YOU WANT{" "}
        </p>

        <div className="flex gap-3 justify-between items-center flex-wrap mt-5">
          {data?.map((element: ICategories) => (
            <div
              key={element.id}
              className={`flex flex-col  p-2 rounded-lg items-center cursor-pointer ${
                element.id === id ? "bg-mains" : "bg-background"
              }`}
              onClick={() => {
                navgate(`/categories/Subcategories/${element.id}`);
                setId(element.id);
              }}
            >
              <img
                src={`http://127.0.0.1:8000/assets/images/${element.img}`}
                className="w-20 h-20 rounded-full object-cover "
                alt={element.name}
                loading="lazy"
              />
              <Button
                className="rounded-2xl mt-2 capitalize font-medium px-6 tracking-widest "
                variant="secondary"
                key={element.id}
              >
                {element.name}
              </Button>
            </div>
          ))}
        </div>
      </div>
      <div className="my-6">
        <Outlet />
      </div>
    </div>
  );
}

export default CategoreLayout;
