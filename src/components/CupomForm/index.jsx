import { useState } from "react";
import Button from "../Button";
import Section from "../Section";
import Input from "../Input";

const CupomForm = () => {
  const [cupom, setCupom] = useState({
    codigo: "",
    porcentagem: 0,
  });

  const [arrayCupom, setArrayCupom] = useState([]);

  const handleChangeCupom = (e) => {
    const { name, value } = e.target;
    setCupom({
      ...cupom,
      [name]: value,
    });
  };

  const handleSubmitCupom = (e) => {
    e.preventDefault();
    setArrayCupom([...arrayCupom, cupom]);
    console.log(cupom);
    setCupom({
      codigo: "",
      porcentagem: 0,
    })}


    return (
      <>
        <Section space={"space-y-2"} title={"Gerenciar Cupons de Desconto"}>
          <form onSubmit={handleSubmitCupom}>
            <Input
              id={"codigo"}
              label={"Código do Cupom"}
              name={"codigo"}
              value={cupom.codigo}
              onChange={handleChangeCupom}
              required={true}
            />
            <Input
              id={"precoCupom"}
              label={"Porcentagem de Desconto"}
              name={"porcentagem"}
              type="number"
              value={cupom.porcentagem}
              onChange={handleChangeCupom}
              required={true}
            />
            <Button label={"Adicionar Cupom"} bgColor="bg-orange-400 mt-4" type="submit" />
          </form>
        </Section>


        {/* EXIBIR CUPONS CADASTRADOS */}
        <Section
          title={"Cupons Cadastrados"}
          space={"lg:grid grid-cols-3 gap-2 "}
        >
          {arrayCupom.length > 0 ? (
            arrayCupom.map((item, index) => (
              <div
                className="flex justify-between items-center h-fit border p-2 rounded-md space-y-1"
                key={index}
              >
                <div className="flex flex-col">
                  <h1 className="font-bold text-lg">{item.codigo}</h1>
                  <p className="text-slate-500">{item.porcentagem}% de desconto</p>
                </div>
                <Button
                  label={"remover"}
                  bgColor="bg-red-400 h-fit"
                  onClick={() => alert(index)}
                />
              </div>
            ))
          ) : (
            <div className="flex col-span-3 justify-center text-lg">
              <p>Nenhum cupom cadastrado</p>
            </div>
          )}
        </Section>
      </>
    );
  };

export default CupomForm;
