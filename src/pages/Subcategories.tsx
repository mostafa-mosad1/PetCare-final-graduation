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
  }, [dispatch]);
  const { loading, data }: { loading: boolean; data: ISubCategories[] } =
    useSelector((state: RootState) => state.SubCategories);
  if (loading) return <p>loading.............</p>;
  console.log(data);

  return (
    <>
      <p>subcategories</p>
      {data?.map((element: ISubCategories) => (
        <p key={element.id}>{element.name}</p>
      ))}
    </>
  );
}

export default Subcategories;
