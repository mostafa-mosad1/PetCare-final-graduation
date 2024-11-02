import Layout from "@/Layout/Layout";
import About from "@/Pages/About";
import Login from "@/Pages/Login";
import Mybooking from "@/Pages/Mybooking";
import Signup from "@/Pages/Signup";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* 1 */}
      <Route path="/" element={<Layout />}>
        <Route index element={<About />}></Route>
        <Route path="/my-booking" element={<Mybooking />}></Route>
      </Route>

      {/* 2 */}
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
    </Route>
  )
);
export default router;
