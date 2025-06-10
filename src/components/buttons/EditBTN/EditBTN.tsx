import { PencilSquareIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import Modal from "../../Modal/Modal";
export default function EditBTN(props) {
  const [ShowModal, setShowModal] = useState(false);
  const [Name, setName] = useState(props.nome);
  const [Price, setPrice] = useState(props.preco);
  const [Desc, setDesc] = useState(props.descricao);
  const [Stock, setStock] = useState(props.estoque);

  const onClickHandler = () => {
    setShowModal(true);
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
          getName={""}
          Name={""}
          getPrice={""}
          Price={""}
          getStock={""}
          Stock={""}
          getDesc={""}
          Desc={""}
          onSubmit={""}
          onClickHandlerClose={""}
          Dell={true}
        />
      ) : null}
    </>
  );
}
