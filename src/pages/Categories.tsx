/* import { Button } from "@/components/ui/button";
import { ICategories } from "@/interface";
import { CategoriesFunction } from "@/redux/features/Categories.ts/CategoriesSlice";
import { RootState, useAppDispatch } from "@/redux/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Categories() {
  const dispatch = useAppDispatch();
  const navgate = useNavigate();
  useEffect(() => {
    dispatch(CategoriesFunction());
  }, [dispatch]);
  const { loading, data }: { loading: boolean; data: ICategories[] } =
    useSelector((state: RootState) => state.Categories);
  if (loading) return <p>loading.............</p>;
  console.log(data);
  return (
    <>
      <div className="flex flex-col gap-4">
        <h1 className="text-center text-3xl font-bold">Categories </h1>
        <p className="text-center text-lg font-normal lowercase tracking-widest">
          KNOW WHAT TYPE OF PETS YOU WANT{" "}
        </p>
        <div className="flex justify-between items-center flex-wrap mt-5">
          {data?.map((element: ICategories) => (
            <Button
              className="rounded-3xl capitalize font-medium px-6 "
              variant="secondary"
              key={element.id}
              onClick={() => {
                navgate(`/categories/Subcategories/${element.id}`);
              }}
            >
              {element.name}
            </Button>
          ))}
        </div>
      </div>
    </>
  );
}

export default Categories;
 */
