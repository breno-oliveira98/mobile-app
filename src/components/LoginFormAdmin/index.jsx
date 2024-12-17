import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {AuthContext} from "../../contexts/AuthContext";

const LoginFormAdmin = () => {
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      username: "",
      password: "",
    });
    if (formData.username === "admin" && formData.password === "123") {
      setAuth(true)
      window.alert('Logado com sucesso!')
      navigate('/painel')
    } else {
      setError("Credenciais inválidas");
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Admin Login
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Usuario
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              name="username"
              type="text"
              value={formData.username}
              onChange={handleChange}
              placeholder="Insira seu nome de usuario"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Senha
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Insira sua senha"
            />
            <small className="flex justify-center text-red-500 font-semibold">{error}</small>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Entrar
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Esqueceu a senha?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginFormAdmin;
