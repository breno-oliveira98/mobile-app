import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import LayoutAdmin from "../components/LayoutAdmin";
import NotFoundPage from "../pages/NotFoundPage";
import ProductPage from "../pages/ProductPage";
import Home from "../pages/Home";

const PrivateRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
        <Route path="/produtos" element={<ProductPage />} />
        <Route path="/" element={<Home />} />
        </Route>

        {/* ROTA DE ADMIN */}
        <Route path="/painel" element={<LayoutAdmin />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PrivateRoutes;
