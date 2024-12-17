import { Outlet } from "react-router-dom";
import AdminPage from "../../pages/admin";
import HeaderAdmin from "../HeaderAdmin";
const LayoutAdmin = () => {

  return (

      <div className="w-full bg-[#f3f4f6]">
        <HeaderAdmin />
        <div className="container mx-auto flex-1 h-screen mt-5 px-2">
          <Outlet />
          <AdminPage />
          
        </div>
      </div>

  );
};

export default LayoutAdmin;
