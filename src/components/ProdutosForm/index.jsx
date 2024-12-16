import Input from '../Input'
import Button from '../Button'
import Section from '../Section'
import { useState } from 'react';
const ProdutosForm = ({arrayCategory}) => {
  const [produtos, setProdutos] = useState({
    nome: "",
    preco: "",
    descricao: "",
    categoria: "",
  });

  const [arrayProdutos, setArrayProdutos] = useState([]);

  const handleChangeProdutos = (e) => {
    const { name, value } = e.target;
    setProdutos({
      ...produtos,
      [name]: value,
    });
  };

  const handleSubmitProdutos = (e) => {
    e.preventDefault();
    setArrayProdutos([...arrayProdutos, produtos]);
    console.log(produtos);
    setProdutos({
      nome: "",
      preco: "",
      descricao: "",
      categoria: "",
    });
  };
  return (
    <>
      <Section space={"space-y-2"} title={"Adicionar Novo Produto"}>
        <form onSubmit={handleSubmitProdutos}>
          <Input
            id={"nome"}
            label={"Nome"}
            name={"nome"}
            value={produtos.nome}
            onChange={handleChangeProdutos}
            required={true}
          />
          <Input
            id={"preco"}
            label={"Preço"}
            name={"preco"}
            type="number"
            value={produtos.preco}
            onChange={handleChangeProdutos}
            required={true}
          />
          <label
            className="flex flex-col text-gray-700 font-semibold"
            htmlFor="descricaoProduto"
          >
            Descrição
            <textarea
              maxLength={500}
              className="w-full rounded-md outline-none mt-1 p-1.5 bg-slate-100 focus:ring-2 ring-blue-300"
              name="descricao"
              id="descricaoProduto"
              value={produtos.descricao}
              onChange={handleChangeProdutos}
            ></textarea>
          </label>
          <label
            className="flex flex-col text-gray-700 font-semibold"
            htmlFor="categoriaProduto"
          >
            Categoria
            <select
              className="w-full bg-slate-100 rounded-md p-1 mt-1 mb-4"
              name="categoria"
              id="categoriaProduto"
              value={produtos.categoria}
              onChange={handleChangeProdutos}
              required
            >
              <option value="null">Selecione uma categoria</option>
              {arrayCategory.map((item, index) => (
                <option key={index} value={item.nome.toLowerCase()}>
                  {item.nome}
                </option>
              ))}
            </select>
          </label>
          <Button label={"Adicionar Produto"} type="submit" />
        </form>
      </Section>

      {/*Exibir Produtos Cadastrados */}
      <Section
        title={"Produtos Cadastrados"}
        space={"lg:grid grid-cols-3 gap-2"}
      >
        {arrayProdutos.length > 0 ? arrayProdutos.map((item, index) => (
          <div
            className="flex justify-between items-center h-fit border p-2 rounded-md space-y-1"
            key={index}
          >
            <div className='flex flex-col'>
                <h1 className="font-bold text-lg">{item.nome}</h1>
                <p className="text-blue-600 font-bold text-lg">R$ {item.preco}</p>
                <p className="text-slate-500">Categoria: {item.categoria}</p>
            </div>
            <Button
              label={"remover"}
              bgColor="bg-red-400"
              onClick={() => alert(index)}
            />
          </div>
        )) : (
            <div className='flex col-span-3 justify-center text-lg'>
                <p>Nenhum produto cadastrado</p>
            </div>
        )}
      </Section>
    </>
  );
};

export default ProdutosForm;
