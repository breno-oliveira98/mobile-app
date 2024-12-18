import { useContext, useState } from "react";
import Button from "../Button"; // Presumo que o componente Button já exista em seu código.
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
const LoginFormUser = () => {
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: "",
    senha: "",
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
    if (formData.email === "breno@gmail.com" && formData.senha === "admin") {
      setAuth(true);
      navigate("/");
    } else {
        alert('Usuario não cadastrado')
    }
    // Aqui você pode adicionar a lógica para autenticação, como uma chamada para o backend.
    console.log("Dados do login:", formData);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-sm p-8 bg-white shadow-lg rounded-xl">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Digite seu e-mail"
                className="w-full mt-1 p-3 border rounded-md bg-gray-50 focus:ring-2 ring-blue-400"
              />
            </div>
            <div>
              <label
                htmlFor="senha"
                className="block text-sm font-medium text-gray-700"
              >
                Senha
              </label>
              <input
                type="password"
                id="senha"
                name="senha"
                value={formData.senha}
                onChange={handleChange}
                required
                placeholder="Digite sua senha"
                className="w-full mt-1 p-3 border rounded-md bg-gray-50 focus:ring-2 ring-blue-400"
              />
            </div>
          </div>

          <Button
            bgColor="bg-blue-600"
            txtColor="text-white"
            radius="rounded-md"
            type="submit"
            label="Entrar"
          />
        </form>

        <div className="mt-4 text-center">
          <a href="#" className="text-sm text-blue-500 hover:underline">
            Esqueceu a senha?
          </a>
        </div>

        <div className="mt-6 text-center">
          <span className="text-sm text-gray-500">
            Não tem uma conta?{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Cadastre-se
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginFormUser;
