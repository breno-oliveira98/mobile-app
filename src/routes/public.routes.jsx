import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginFormAdmin from "../components/LoginFormAdmin";
import Layout from "../components/Layout";
import CadastroForm from "../components/CadastroForm";
import NotFoundPage from "../pages/NotFoundPage";
import LoginFormUser from "../components/LoginFormUser";
import ProductPage from "../pages/ProductPage";
import Home from "../pages/Home";

const PublicRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/produtos" element={<ProductPage />} />
          <Route path="/" element={<Home />} />
        </Route>

        {/* External User */}
        <Route path="/login" element={<LoginFormUser />} />
        <Route path="/cadastro" element={<CadastroForm />} />
        {/* External Admin */}
        <Route path="/admin" element={<LoginFormAdmin />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PublicRoutes;
