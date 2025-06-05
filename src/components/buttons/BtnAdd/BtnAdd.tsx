import { useState } from "react";
import Modal from "../../Modal/Modal";
export default function BtnAdd() {
  const [showModal, setShowModal] = useState(false);
  const [Name, setName] = useState("");
  const [Price, setPrice] = useState("");
  const [Desc, setDesc] = useState("");

  const ClearF = () => {
    setName("");
    setPrice("");
    setDesc("");
  };

  const onClickHandler = () => {
    setShowModal(true);
  };
  const onClickHandlerClose = () => {
    if (Name || Price || Desc) {
      if (!window.confirm("Se fechar agora perderá as os dados já inseridos"))
        return;
    }
    ClearF();
    setShowModal(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (Name && Price) {
      console.log(`${Name} ${Price} ${Desc || 'Ainda sem descrição'}`);
      setShowModal(false);
      ClearF();
    }
    else {
      window.alert("Os campos Nome e Preço são obrigatórios.");
    }
  };

  function getName(e) {
    setName(e.target.value);
  }

  function getPrice(e) {
    setPrice(e.target.value);
  }
  function getDesc(e) {
    setDesc(e.target.value);
  }

  return (
    <>
      <button
        onClick={onClickHandler}
        className="text-blue-900 bg-white w-10 h-10 flex justify-center items-center text-4xl font-bold pb-2 active:bg-gray-300 shadow-inner"
        title="Clique para adicionar um item"
      >
        +
      </button>

      {showModal ? (
        <Modal
          getName={getName}
          getPrice={getPrice}
          getDesc={getDesc}
          Name={Name}
          Price={Price}
          Desc={Desc}
          onSubmit={onSubmit}
          onClickHandlerClose={onClickHandlerClose}
          onc
        />
      ) : null}
    </>
  );
}
