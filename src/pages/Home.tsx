import dog from "../assets/Images/staffordshire.jpg";
import cat from "../assets/Images/cats.jpg";
import { Link } from "react-router-dom";
import { useGetProudctShopQuery } from "@/redux/features/Shop/ShopSlice";
import { IProudctShop } from "@/interface";
import Slider from "react-slick";
const categories = [
  { id: 1, name: "Dogs", img: dog },
  { id: 2, name: "Cats", img: cat },
];

const Main3 = () => {
  return (
    <div className="main3 bg-cover bg-center h-[75vh] w-full mt-6">
      <div className="textphoto h-full flex items-end justify-center bg-black bg-opacity-30">
        <p className="text-white text-[100px] font-[Alba Super, sans-serif] text-center mb-[1%]">
          Best Pets you'll Love
        </p>
      </div>
    </div>
  );
};

const MainTitle = ({ name }: { name: string }) => {
  return (
    <h2 className="main-title mx-auto mb-[80px] mt-[40px] border border-black text-5xl px-5 py-2 w-fit relative z-[1] transition-all duration-300 text-black">
      <a href="#">{name}</a>
      <div className="main-title__before absolute top-[50%] left-[-45px] w-[26px] h-[26px] bg-[#182747] rounded-full transform translate-y-[-50%]"></div>
      <div className="main-title__after absolute top-[50%] right-[-45px] w-[26px] h-[26px] bg-[#182747] rounded-full transform translate-y-[-50%]"></div>
    </h2>
  );
};

const Shop = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    arrows: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const { data } = useGetProudctShopQuery("");

  const productsToDisplay = data?.products.slice(0, 4);

  return (
    <div>
      <MainTitle name={"Shop"} />

      <div>
        <div className="slider-container w-full ">
          <Slider {...settings}>
            {productsToDisplay?.map((product: IProudctShop) => (
              <div
                key={product.id}
                className="bg-secondary overflow-hidden group border-2 border-transparent hover:border-2 hover:border-green-500 rounded-md p-2 cursor-pointer h-[400px]"
              >
                <div className="flex flex-col h-full">
                  <Link to={`shop/proudctDetails/${product.id}`}>
                    <div>
                      <img
                        src={`http://127.0.0.1:8000/assets/images/${product.img}`}
                        alt={product.title}
                        loading="lazy"
                        className="w-full h-[200px] object-cover rounded-md"
                      />
                    </div>
                    <div className="py-2 px-1 flex flex-col gap-4 justify-between ">
                      <h2 className="text-[#269A41] font-semibold capitalize">
                        {product.type}
                      </h2>
                      <h2 className="font-semibold">{product.title}</h2>
                      <div className="flex justify-between items-center my-2">
                        <h3 className="font-medium">{product.price} EGP</h3>
                        <h3 className="font-medium">
                          Instock : {product.stock}
                        </h3>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};
const CategorySection = () => {
  return (
    <div>
      <MainTitle name={"Categore"} />
      <div className="maincategory flex justify-around gap-4 mt-4 mb-20">
        {categories.map((category) => (
          <div
            key={category.id}
            className=" bg-cover w-full bg-center rounded-[70px] h-[40vh]"
            style={{
              backgroundImage: `url('${category.img}')`,
            }}
          >
            <div className="flex items-end h-full bg-black bg-opacity-20 rounded-[70px]">
              <Link
                to={`categories/Subcategories/${category.id}`}
                className="text-white text-[50px] underline ml-[30px] mb-[15px]"
              >
                {category.name}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const MainPage = () => {
  return (
    <div>
      <Main3 />
      <Shop />
      <CategorySection />
    </div>
  );
};

export default MainPage;
