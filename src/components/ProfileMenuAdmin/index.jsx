import { useState } from "react";
import { FcManager } from "react-icons/fc";
import { Link } from "react-router-dom";

const ProfileMenuAdmin = () => {

    const links = [
        { name: 'Home', url: '/' },
        { name: 'Sobre', url: '/sobre' },
        { name: 'Serviços', url: '/servicos' },
        { name: 'Contato', url: '/contato' },
      ];

  // Estado para controlar se o menu está visível ou não
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  // Função para alternar a visibilidade do menu
  const toggleMenu = () => {
    
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <div className="relative">
      {/* Ícone de perfil */}
      <button
        onClick={toggleMenu}
        className="flex items-center px-6 rounded-full"
      >
        <FcManager size={30} />
      </button>

      {/* Menu */}
      <div
        className={`menu menu-default flex flex-col bg-white text-gray-700 items-center shadow-md rounded-lg w-[100px] absolute top-full right-0 mt-2 transition-transform duration-300 ${
          isMenuVisible
            ? "transform opacity-100"
            : "transform opacity-0 pointer-events-none"
        }`}
      >
        {links.map((link, index) => (
            <Link key={index} to={link.url} className="menu-item hover:bg-slate-100 rounded-lg w-full text-center">
            <p className="menu-link" >
              <span className="menu-title">{link.name}</span>
            </p>
          </Link>
        ))}
        


      </div>
    </div>
  );
};

export default ProfileMenuAdmin;
