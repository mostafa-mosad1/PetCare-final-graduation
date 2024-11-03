import { Button } from "@/components/ui/button";
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
  const { loading, data } :{loading: boolean, data:ICategories[]} = useSelector((state: RootState) => state.Categories);
  if (loading) return <p>loading.............</p>;
  console.log(data);
  return (
    <>
      <p>Categories Categories Categories</p>
      {data?.map((element:ICategories)=><Button key={element.id} onClick={()=>{
        navgate(`/Subcategories/${element.id}`)
      }}>{element.name}</Button>)}
    </>
  );
}

export default Categories;
