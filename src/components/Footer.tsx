import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className=" bg-mains">
      <div className="flex md:justify-between container md:flex-row flex-col  pt-6 pb-2  gap-4   ">
        <div className="flex-1">
          <h2 className="text-4xl font-semibold">Pet Care</h2>
          <p className="w-[4%] h-1 bg-foreground my-2"></p>
          <p className="w-3/4 text-xl">
            A website for people who intersted in pets, you can find all what
            you need (pets , food ,accessories and medicine )
          </p>
        </div>
        <div className="flex-1">
          <h2 className="text-4xl font-semibold">Quick links</h2>
          <p className="w-[4%] h-1 bg-foreground my-2"></p>
          <ul className=" flex   flex-col ">
            <Link to="/">
              <li className=" lg:text-lg lg:px-2 px-1 ">HOME</li>
              <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
            </Link>
            <Link to={"/shop"}>
              <li className=" lg:text-lg lg:px-2 px-1 ">SHOP</li>
              <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
            </Link>
            <Link to={"/categories"}>
              <li className=" lg:text-lg lg:px-2 px-1 ">Category</li>
              <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
            </Link>
            <Link to={"/doctor"}>
              <li className=" lg:text-lg lg:px-2 px-1 ">Doctor</li>
              <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
            </Link>
            <Link to={"/services"}>
              <li className=" lg:text-lg lg:px-2 px-1 ">Services</li>
              <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
            </Link>
            <Link to={"/about"}>
              <li className=" lg:text-lg lg:px-2 px-1 ">About</li>
              <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
            </Link>
            <Link to={"/profile"}>
              <li className=" lg:text-lg lg:px-2 px-1 ">Profile</li>
              <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
            </Link>
          </ul>
        </div>
        <div className="flex-1">
          <h2 className="text-4xl font-semibold ">Have a Question?</h2>
          <p className="w-[4%] h-1 bg-foreground my-2"></p>

          <p className="text-xl my-2">
            203 Fake St. Mansoura, El-Dakahlia, Egypt
          </p>
          <p className="text-xl my-2">+20 1234567890</p>
          <p className="text-xl my-2">info@yourdomain.com</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
