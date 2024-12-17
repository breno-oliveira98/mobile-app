import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import LayoutAdmin from "../components/LayoutAdmin";
import NotFoundPage from "../pages/NotFoundPage";

const PrivateRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />

        {/* ROTA DE ADMIN */}
        <Route path="/painel" element={<LayoutAdmin />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PrivateRoutes;
