
import { useState } from "react";
import CategoriaForm from '../../components/CategoriaForm'
import ProdutosForm from '../../components/ProdutosForm';
import CupomForm from "../../components/CupomForm";
import TaxaFreteForm from "../../components/TaxaFreteForm";

const AdminPage = () => {
    const [arrayCategory, setArrayCategory] = useState([
        { nome: "Breno", descricao: "ola" },
      ]);
    
      // Função para adicionar categoria
      const addCategoria = (categoria) => {
        setArrayCategory([...arrayCategory, categoria]);
      };
 
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
      {/* CATEGORIAS */}
      <CategoriaForm addCategoria={addCategoria}/>

      {/* ADICIONAR PRODUTOS */}
      <ProdutosForm arrayCategory={arrayCategory}/>

      {/* ADICIONAR PRODUTOS */}
      <CupomForm  />


      <TaxaFreteForm />
    </div>
  );
};

export default AdminPage;
