import { useState } from "react";
import Input from '../Input'
import Button from '../Button'
import Section from '../Section'

const CategoriaForm = ({addCategoria}) => {
  const [categorias, setCategorias] = useState({
    nome: "",
    descricao: "",
  });

  const [arrayCategory, setArrayCategory] = useState([]);

  const handleChangeCategorias = (e) => {
    const { name, value } = e.target;
    setCategorias({
      ...categorias,
      [name]: value,
    });
  };

  const handleSubmitCategorias = (e) => {
    e.preventDefault();
    setArrayCategory([...arrayCategory, categorias]);
    setCategorias({
      nome: "",
      descricao: "",
    });
  };
  return (
    <>
      <Section space={"space-y-2"} title={"Gerenciar Categorias"}>
        <form onSubmit={handleSubmitCategorias}>
          <Input
            label={"Nome da Categoria"}
            id={"categoria"}
            type="text"
            name={"nome"}
            value={categorias.nome}
            onChange={handleChangeCategorias}
            required={true}
          />
          <label
            className="flex flex-col text-gray-700 font-semibold"
            htmlFor="descricao"
          >
            Descrição
            <textarea
              maxLength={500}
              className="w-full rounded-md outline-none mt-1 p-1.5 bg-slate-100 focus:ring-2 ring-blue-300"
              name="descricao"
              id="descricao"
              value={categorias.descricao}
              onChange={handleChangeCategorias}
            ></textarea>
          </label>
          <Button
            type="submit"
            label={"Adicionar Categoria"}
            bgColor="bg-green-600 mt-2"
          />
        </form>
      </Section>

      {/* EXIBIR CATEGORIAS */}
      <Section
        title={"Categorias Existentes"}
        space={"lg:grid grid-cols-3 gap-2"}
      >
        {arrayCategory.length > 0 ? arrayCategory.map((item, index) => (
          <div
            className="flex justify-between items-center h-fit border p-2 rounded-md space-y-1"
            key={index}
          >
            <div className="flex flex-col">
              <h1 className="font-bold text-lg">{item.nome}</h1>
              <p className="text-slate-500">Descrição: {item.descricao}</p>
            </div>
            <Button
              padding="p-1 h-fit"
              label={"Remover"}
              bgColor="bg-red-400"
              onClick={() => alert(index)}
            />
          </div>
        )) : (
          <div className="flex col-span-3 justify-center text-lg">
            <p>Nenhuma categoria cadastrada.</p>
          </div>
        )}
      </Section>
    </>
  );
};

export default CategoriaForm;
