import { useContext } from "react";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { FcManager } from "react-icons/fc";
import ProfileMenuAdmin from "../ProfileMenuAdmin";

const HeaderAdmin = () => {
    const navigate = useNavigate()
    const {auth, setAuth} = useContext(AuthContext)

    const logout = () => {
        setAuth(false)
        console.log(auth);
        navigate('/admin')
        
    }

    return ( 
        <header className="w-full flex items-center bg-blue-500 h-20">
            <div className="container items-center justify-between text-white flex gap-4 mx-auto">
                <h1 className="text-2xl font-bold">Loja Online</h1>
                <h1 className="text-3xl font-bold">Painel de Administrador</h1>
                <div className="flex items-center gap-3">
                    <ProfileMenuAdmin />
                    <RiLogoutBoxRLine title="Sair" className="cursor-pointer hover:fill-red-600" size={24} onClick={logout} />
                </div>
                
            </div>
        </header>
     );
}
 
export default HeaderAdmin;