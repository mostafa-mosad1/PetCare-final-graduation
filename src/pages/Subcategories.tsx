import Loader from "@/components/Loader";
import Pop from "@/components/Pop";
import { ISubCategories } from "@/interface";
import { SubCategoriesFunction } from "@/redux/features/SubCategories/SubcategoriesSlice";
import { RootState, useAppDispatch } from "@/redux/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Subcategories() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  //   const navgate = useNavigate();
  useEffect(() => {
    dispatch(SubCategoriesFunction(id!));
  }, [id]);
  const { loading, data }: { loading: boolean; data: ISubCategories[] } =
    useSelector((state: RootState) => state.SubCategories);
  if (loading) return <Loader />;

  const categoryName =
    id === "1"
      ? "Dogs"
      : id === "2"
      ? "Cats"
      : id === "3"
      ? "Fishs"
      : id === "4"
      ? "Hamsters"
      : id === "5"
      ? "Birds"
      : "Subcategories";
  return (
    <>
      <p className="text-center my-10 bg-mains w-fit mx-auto px-4 py-2 text-background text-2xl font-normal rounded-md">
        {categoryName}{" "}
      </p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8 justify-center">
        {data?.map((element: ISubCategories) => (
          <div
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:-translate-y-4 transition-all duration-200 "
            key={element.id}
          >
            <div className="relative">
              <img
                className="rounded-t-lg  h-40 w-full "
                src={`http://127.0.0.1:8000/assets/images/${element.img}`}
                alt={element.name}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black opacity-25 rounded-t-lg" />
            </div>
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {element.name}
              </h5>

              <div>
                <Pop details={element} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Subcategories;
