import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginFormAdmin from '../components/LoginFormAdmin'
import Layout from "../components/Layout";
import NotFoundPage from "../pages/NotFoundPage";

const PublicRoutes = () => {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />} />
                <Route path="/admin" element={<LoginFormAdmin />} />

                <Route path="*" element={<NotFoundPage />}/>
            </Routes>
        </BrowserRouter>
     );
}
 
export default PublicRoutes;