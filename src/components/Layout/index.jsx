import { Outlet } from "react-router-dom";
import Header from "../Header";
import Cart from "../Cart";
import { useVisibility } from "../../contexts/VisibilityContext";
import Home from "../../pages/Home";
const Layout = () => {
  const { isVisible } = useVisibility();

  return (

      <div className="w-full bg-[#f3f4f6]">
        <Header />
        <div className="container mx-auto flex-1 h-screen mt-5 px-2">
          <Outlet />
          {isVisible && <Cart />}
          
        </div>
      </div>

  );
};

export default Layout;
