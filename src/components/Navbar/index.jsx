import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="container ml-64 w-full mt-1">
      <ul className="flex list-none h-fit p-3 gap-6">
        <li>
          <Link to={'/'} className="text-2xl font-semibold text-white hover:text-pink-600">Home</Link>
        </li>
        <li>
          <Link to={'/produtos'} className="text-2xl font-semibold text-white hover:text-pink-600">Produtos</Link>
        </li>
        <li>
          <Link className="text-2xl font-semibold text-white hover:text-pink-600">Categorias</Link>
        </li>
        <li>
          <Link className="text-2xl font-semibold text-white hover:text-pink-600">Meus Pedidos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
