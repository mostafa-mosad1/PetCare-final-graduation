import { ISubCategories } from "@/interface";


function SubCategoriesDetails({id,name,description,img,category_id}:ISubCategories) {
    return (
        <>
         <div key={id} className="w-full my-10 mx-auto flex flex-col lg:flex-row justify-center items-center lg:space-x-4 space-y-8 lg:*:space-y-0  ">
          <div className="w-4/12">
           
            <img src={`${img}`} className="w-full" alt="" />
          </div>
          <div className="w-8/12 flex flex-col gap-4 ">
            <h2 className="text-2xl font-semibold">{name}</h2>
            <h2 className="text-2xl ms-2 text-gray-500">
              {description}
            </h2>
            <h2 className="text-2xl font-sans">
              {category_id}
            </h2>
          
           
          </div>
        </div>
        </>
    )
}

export default SubCategoriesDetails;