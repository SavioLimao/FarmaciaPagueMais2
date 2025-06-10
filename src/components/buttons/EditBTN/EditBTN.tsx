import { PencilSquareIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import Modal from "../../Modal/Modal";
export default function EditBTN(props) {
  const [ShowModal, setShowModal] = useState(false);
  const [Name, setName] = useState(props.nome);
  const [Price, setPrice] = useState(props.preco);
  const [Desc, setDesc] = useState(props.descricao);
  const [Stock, setStock] = useState(props.estoque);

  const nameUpdate = (e) => {
    setName(e.target.value);
  };
  const priceUpdate = (e) => {
    setPrice(e.target.value);
  };
  const descUpdate = (e) => {
    setDesc(e.target.value);
  };
  const stockUpdate = (e) => {
    setStock(e.target.value);
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    const upDated = {
      ...props.produto,
      nome: Name,
      preco: Number(Price),
      descricao: Desc,
      estoque: Number(Stock),
    };
    props.onUpdate(upDated);
    setShowModal(false);
  };

  const onClickHandler = () => {
    setShowModal(true);
  };

  const DeleteHandler = () => {
    const checkDell = window.confirm(
      "Tem certeza que deseja apagar este item?"
    );
    if (!checkDell) return;

    props.onDelete(props.produto.id);
    setShowModal(false);
  };

  return (
    <>
      <button className="bg-red-700 p-2 active:bg-red-800 rounded">
        <PencilSquareIcon
          className="w-5 h-5 text-white"
          onClick={onClickHandler}
        />
      </button>

      {ShowModal ? (
        <Modal
          getName={nameUpdate}
          Name={Name}
          getPrice={priceUpdate}
          Price={Price}
          getStock={stockUpdate}
          Stock={Stock}
          getDesc={descUpdate}
          Desc={Desc}
          onSubmit={handlesubmit}
          onClickHandlerClose={() => setShowModal(false)}
          Edit={true}
          onDelete={DeleteHandler}
        />
      ) : null}
    </>
  );
}
