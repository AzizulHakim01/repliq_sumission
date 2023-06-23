import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import AdminRoute from "./components/Routes/AdminRoute";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import CreateProduct from "./pages/Admin/CreateProduct";
import Products from "./pages/Admin/Products";
import AdminOrders from "./pages/Admin/AdminOrders";
import CartPage from "./pages/CartPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/dashboard/" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/products" element={<Products />} />
          <Route path="admin/orders" element={<AdminOrders />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
