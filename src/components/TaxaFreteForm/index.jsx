import { useState } from "react";
import Button from "../Button";
import Section from "../Section";
import Input from "../Input";

const TaxaFreteForm = () => {
  const [frete, setFrete] = useState({
    taxa: "",
  });

  const [arrayFrete, setArrayFrete] = useState([]);

  const handleChangeFrete = (e) => {
    const { name, value } = e.target;
    setFrete({
      ...frete,
      [name]: value,
    });
  };

  const handleSubmitFrete = (e) => {
    e.preventDefault();
    setArrayFrete([...arrayFrete, frete]);
    console.log(frete);
    setFrete({
      taxa: 0
    })}


    return (
      <>
        <Section space={"space-y-2"} title={"Gerenciar Taxa de Entrega"}>
          <form onSubmit={handleSubmitFrete}>
            <Input
              id={"taxa"}
              label={"Taxa de Entrega"}
              name={"taxa"}
              value={frete.taxa}
              onChange={handleChangeFrete}
              required={true}
            />
            <Button label={"Atualizar taxa de frete"} bgColor="bg-yellow-400 mt-4" type="submit" />
          </form>
        </Section>


        {/* EXIBIR TAXAS DE ENTREGA */}
        <Section
          title={"Gerenciar Taxa de Entrega"}
          space={"space-y-4 lg:grid grid-cols-3 gap-2"}
        >
          {arrayFrete.length > 0 ? (
            arrayFrete.map((item, index) => (
              <div
                className="flex justify-between items-center h-fit border p-2 rounded-md space-y-1"
                key={index}
              >
                <div className="flex flex-col">
                    <h1 className="font-bold text-lg">Taxa atual:</h1>
                    <p className="text-slate-500">{item.taxa}%</p>
                </div>
                <Button
                  label={"remover"}
                  bgColor="bg-red-400"
                  onClick={() => alert(index)}
                />
              </div>
            ))
          ) : (
            <div className="flex col-span-3 justify-center text-lg">
              <p>Nenhuma taxa cadastrado</p>
            </div>
          )}
        </Section>
      </>
    );
  };

export default TaxaFreteForm;
