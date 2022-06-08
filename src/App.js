import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./pages/Shered/Navbar";
import Home from "./pages/Home/Home";
import AddProduct from "./pages/Dashboard/AddProduct";
import AddReview from "./pages/Dashboard/AddReview";
import MakeAdmin from "./pages/Dashboard/MakeAdmin";
import MyProfile from "./pages/Dashboard/MyProfile";
import Dashboard from "./pages/Dashboard/Dashboard";
import RequireAuth from "./pages/Login/RequireAuth";
import MyOrders from "./pages/Dashboard/MyOrders";
import Footer from "./pages/Shered/Footer";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Login/SignUp";
import { Toaster } from "react-hot-toast";
import Blogs from "./pages/Blogs/Blogs";
import MyPortfolio from "./pages/MyPortfolio/MyPortfolio";
import Purchase from "./pages/Home/Purchase";
import Payment from "./pages/Dashboard/Payment";
import NotFound from "./pages/Shered/NotFound";
import MangeOrder from "./pages/Dashboard/MangeOrder";
import ManageProducts from "./pages/Dashboard/ManageProducts";
import RequireAdmin from "./pages/Login/RequireAdmin";

function App() {
  return (
    <div className="max-w-7xl mx-4 lg:mx-0">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/purchase/:id"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        ></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route
          path="/MyPortfolio"
          element={<MyPortfolio></MyPortfolio>}
        ></Route>
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyProfile />}></Route>
          <Route path="myOrders" element={<MyOrders />}></Route>
          <Route path="mangeProduct" element={<RequireAdmin><ManageProducts /></RequireAdmin>}></Route>
          <Route path="payment/:id" element={<RequireAdmin><Payment /></RequireAdmin>}></Route>
          <Route path="review" element={<AddReview></AddReview>}></Route>
          <Route path="addProduct" element={<RequireAdmin><AddProduct /></RequireAdmin>}></Route>
          <Route path="mangeOrder" element={<RequireAdmin><MangeOrder /></RequireAdmin>}></Route>
          <Route path="makeAdmin" element={<RequireAdmin><MakeAdmin></MakeAdmin></RequireAdmin>}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer />
      <Toaster position="top-right" reverseOrder={false}></Toaster>
    </div>
  );
}

export default App;
