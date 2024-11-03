import ProtectRoute from "@/Auth/ProtectRoute";
import Cookies from "@/Cookies";
import Layout from "@/Layout/Layout";
import About from "@/Pages/About";
import Categories from "@/Pages/Categories";
import Login from "@/Pages/Login";
import Mybooking from "@/Pages/Mybooking";

import Signup from "@/Pages/Signup";
import Subcategories from "@/Pages/Subcategories";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
const isAllow = Cookies.get("token");
// console.log(isAllow);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* 1 */}
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <ProtectRoute isAllow={isAllow} path="/login">
              <About />
            </ProtectRoute>
          }
        ></Route>
        <Route
          path="/my-booking"
          element={
            <ProtectRoute isAllow={isAllow} path="/login">
              <Mybooking />
            </ProtectRoute>
          }
        ></Route>
      </Route>

      {/* 2 */}
      <Route
        path="/login"
        element={
          <ProtectRoute isAllow={!isAllow} path="/">
            <Login />
          </ProtectRoute>
        }
      ></Route>
      <Route
        path="/signup"
        element={
          <ProtectRoute isAllow={!isAllow} path="/">
            <Signup />
          </ProtectRoute>
        }
      ></Route>
      <Route
        path="/Categories"
        element={
          <Categories />
        }
      ></Route>
      <Route
        path="/subcategories/:id"
        element={
          <Subcategories />
        }
      ></Route>
    </Route>
  )
);
export default router;
