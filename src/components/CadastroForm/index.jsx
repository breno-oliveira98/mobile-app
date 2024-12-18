// src/components/CadastroForm.js
import React, { useEffect, useState } from "react";
import Button from "../Button";
import Input from "../Input";
import axios from "axios";

const CadastroForm = () => {
  const [estados, setEstados] = useState([]);
  const [cidades, setCidades] = useState([]);
  const [errorSenha, setErrorSenha] = useState('')

  const fetchCep = async () => {
    try {
      const res = await axios.get(
        `https://brasilapi.com.br/api/cep/v2/${formData.cep}`
      );
      const data = res.data;

      setFormData((prevFormData) => ({
        ...prevFormData,
        endereco: data.street,
        bairro: data.neighborhood,
        estado: data.state,
        cidade: data.city,
      }));
    } catch (error) {
      console.error("Erro ao buscar o cep", error);
    }
  };

  const getEstados = async () => {
    try {
      const res = await axios.get(
        "https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome"
      );
      const data = res.data;
      setEstados(data);
    } catch (error) {
      console.error("Erro ao buscar os estados:", error);
    }
  };

  const getCidades = async () => {
    try {
      const res = await axios.get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${formData.estado}/municipios?orderBy=nome`
      );
      const data = res.data;
      setCidades(data);
    } catch (error) {
      console.error("Erro ao buscar os estados:", error);
    }
  };

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
    telefone: "",
    endereco: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    estado: "",
    cep: "",
    dataNascimento: "",
  });

  useEffect(() => {
    getCidades();
  }, [formData.estado]);

  useEffect(() => {
    getEstados();
  }, []);

  useEffect(() => {
    if (formData.cep.length === 8) {
      fetchCep();
    }
  }, [formData.cep]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "confirmarSenha") {
      if (value !== formData.senha) {
        setErrorSenha("As senhas não coincidem");
      } else {
        setErrorSenha(""); // Se as senhas forem iguais, remove o erro
      }
    }

    if (name === "senha") {
      if (formData.confirmarSenha && value !== formData.confirmarSenha) {
        setErrorSenha("As senhas não coincidem");
      } else {
        setErrorSenha(""); // Se as senhas forem iguais, remove o erro
      }
    }    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados do cadastro: ", formData);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-4xl p-8 bg-white shadow-lg rounded-xl">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
          Registre-se
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Dados Pessoais */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="col-span-2">
              <Input
                id="nome"
                label="Nome Completo"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-span-2">
              <Input
                id="email"
                type="email"
                label="E-mail"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-span-1">
              <Input
                id="telefone"
                type="tel"
                label="Telefone"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-span-1">
              <Input
                id="dataNascimento"
                type="date"
                label="Data de Nascimento"
                name="dataNascimento"
                value={formData.dataNascimento}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-span-1">
              <Input
                id="senha"
                type="password"
                label="Senha"
                name="senha"
                value={formData.senha}
                onChange={handleChange}
                required
              />
              <small className="text-red-500 font-semibold">{errorSenha}</small>
            </div>
            <div className="col-span-1">
              <Input
                id="confirmarSenha"
                type="password"
                label="Confirmar Senha"
                name="confirmarSenha"
                value={formData.confirmarSenha}
                onChange={handleChange}
                required
              />
              <small className="text-red-500 font-semibold">{errorSenha}</small>
            </div>
          </div>

          {/* Endereço */}
          <h3 className="text-xl font-medium text-gray-800 mt-6 mb-4">
            Endereço
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="col-span-1">
              <Input
                id="cep"
                label="CEP"
                name="cep"
                value={formData.cep}
                onChange={handleChange}
                required
                className="w-full max-w-[7rem]" // Reduzindo largura para 7 dígitos
              />
            </div>
            <div className="col-span-2">
              <Input
                id="endereco"
                label="Endereço"
                name="endereco"
                value={formData.endereco}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-span-1">
              <Input
                id="numero"
                label="Número"
                name="numero"
                value={formData.numero}
                onChange={handleChange}
                required
                className="w-full max-w-[7rem]" // Reduzindo largura para 7 dígitos
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="col-span-1">
              <Input
                id="complemento"
                label="Complemento"
                name="complemento"
                value={formData.complemento}
                onChange={handleChange}
              />
            </div>
            <div className="col-span-1">
              <Input
                id="bairro"
                label="Bairro"
                name="bairro"
                value={formData.bairro}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-span-1">
              <label
                htmlFor="estado"
                className="block text-sm font-medium text-gray-700"
              >
                Estado
              </label>
              <select
                id="estado"
                name="estado"
                value={formData.estado}
                onChange={handleChange}
                className="w-full mt-1 p-2 rounded-md bg-gray-100 border border-gray-300 focus:ring-2 ring-blue-400"
                required
              >
                <option value="">Selecione o estado</option>
                {estados.map((item) => (
                  <option key={item.id} value={item.sigla}>
                    {item.sigla}
                  </option>
                ))}

                {/* Adicione mais estados conforme necessário */}
              </select>
            </div>
            <div className="col-span-1">
              <label
                htmlFor="cidade"
                className="block text-sm font-medium text-gray-700"
              >
                Cidade
              </label>
              <select
                id="cidade"
                name="cidade"
                value={formData.cidade}
                onChange={handleChange}
                required
                className="w-full mt-1 p-2 rounded-md bg-gray-100 border border-gray-300 focus:ring-2 ring-blue-400"
              >
                <option value="">Selecione a cidade</option>
                {cidades.map((cidade) => (
                  <option key={cidade.id} value={cidade.nome}>
                    {cidade.nome}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Botão de Submit */}
          <Button
            bgColor="bg-blue-600"
            txtColor="text-white"
            radius="rounded-md"
            type="submit"
            label="Criar Conta"
          />
        </form>
      </div>
    </div>
  );
};

export default CadastroForm;
