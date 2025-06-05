import { useState } from "react";
import Modal from "../../Modal/Modal";

export default function BtnAdd(props) {
  const [showModal, setShowModal] = useState(false);
  const [Name, setName] = useState("");
  const [Price, setPrice] = useState("");
  const [Stock, setStock] = useState("");
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
      const novoProduto = {
        id: Date.now(),
        nome: Name,
        preco: Number(Price),
        estoque: Number(Stock) || 0,
        descricao: Desc || "Ainda sem descrição",
      };

      const produtosSalvos = JSON.parse(localStorage.getItem("produtos")) || [];
      produtosSalvos.push(novoProduto);
      localStorage.setItem("produtos", JSON.stringify(produtosSalvos));
      props.onSubmit(novoProduto);
      setShowModal(false);
      ClearF();
    } else {
      window.alert("Os campos Nome e Preço são obrigatórios.");
    }
  };

  function getName(e) {
    setName(e.target.value);
  }

  function getPrice(e) {
    setPrice(e.target.value);
  }

  function getStock(e) {
    setStock(e.target.value);
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
          getStock={getStock}
          getDesc={getDesc}
          Name={Name}
          Price={Price}
          Stock={Stock}
          Desc={Desc}
          onSubmit={onSubmit}
          onClickHandlerClose={onClickHandlerClose}
          onc
        />
      ) : null}
    </>
  );
}
