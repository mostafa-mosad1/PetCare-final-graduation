import Layout from "@/Layout/Layout";
import About from "@/pages/About";
import Login from "@/pages/Login";
import Mybooking from "@/pages/Mybooking";
import Signup from "@/pages/Signup";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/my-booking" element={<Mybooking />}></Route>
      </Route>
    </Route>
  )
);
export default router;
