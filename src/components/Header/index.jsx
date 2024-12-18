import { BiCart } from "react-icons/bi";
import Button from "../Button";
import { useVisibility } from "../../contexts/VisibilityContext";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";

const Header = () => {
  const { auth } = useContext(AuthContext);
  const { toggleVisibility } = useVisibility();
  const array = [];
  return (
    <header className="w-full flex flex-col items-center justify-center py-5 bg-blue-500 h-fit">
      <div className="container items-center flex gap-4 mx-auto">
        <h1 className="text-2xl font-bold text-white">Loja Online</h1>
        <input
          className="flex-1 outline-none h-fit rounded-md p-2 bg-gray-100 focus:ring-2 ring-gray-400"
          placeholder="Buscar produtos..."
          type="text"
        />
        {!auth ? (
          <div className="flex">
            <Link to={"/login"}>
              <Button label="Entrar" />
            </Link>
            <Link to={"/cadastro"}>
              <Button label="Cadastre-se" bgColor="underline" />
            </Link>
          </div>
        ) : null}

        <div className="relative">
          <BiCart
            className="cursor-pointer"
            size={34}
            fill="white"
            onClick={toggleVisibility}
          />
          {array.length > 0 ? (
            <span className="absolute flex items-center justify-center text-xs text-white w-4 h-4 rounded-full bg-red-600 right-[-5px] top-[-5px] transform">
              {array.length}
            </span>
          ) : (
            ""
          )}
        </div>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
