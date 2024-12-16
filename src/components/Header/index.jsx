import { BiCart } from "react-icons/bi";
import { useVisibility } from "../../contexts/VisibilityContext";

const Header = () => {
    const { toggleVisibility } = useVisibility();
    const array = []
    return ( 
        <header className="w-full flex items-center bg-blue-500 h-20">
            <div className="container items-center flex gap-4 mx-auto">
                <h1 className="text-2xl font-bold text-white">Loja Online</h1>
                <input className="w-full outline-none h-fit rounded-md p-2 bg-gray-100 focus:ring-2 ring-gray-400" placeholder="Buscar produtos..." type="text" />
                <div className="relative">
                    <BiCart className="cursor-pointer" size={34} fill="white" onClick={toggleVisibility}/>
                    {array.length > 0 ? (
                        <span className="absolute flex items-center justify-center text-xs text-white w-4 h-4 rounded-full bg-red-600 right-[-5px] top-[-5px] transform">
                        {array.length}
                    </span>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </header>
     );
}
 
export default Header;