import { useState } from "react";

export default function BtnAdd() {
  const [showModal, setShowModal] = useState(true);
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
      window.alert("tete")
      return
    } else {
      ClearF()
      setShowModal(false)
    }
  };

  const onSubmmit = (e) => {
    e.preventDefault();
    console.log(`${Name} ${Price} ${Desc}`);
    setShowModal(false);
    ClearF();
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-blue-900 rounded-lg p-10">
            <h2 className="text-xl font-bold mb-4 text-white">
              Adicionar Produto
            </h2>
            <form action="submit" className="flex flex-col items-start">
              <label htmlFor="" id="nomemodal" className="font-normal">
                Nome
              </label>
              <input
                className="my-2 border-2 rounded text-black font-light"
                type="text"
                id="nomemodal"
                onChange={getName}
                value={Name}
              ></input>
              <label htmlFor="" id="precomodal" className="font-normal">
                Preço
              </label>
              <input
                className="my-2 border-2 rounded text-black font-light"
                type="number"
                id="precomodal"
                onChange={getPrice}
                value={Price}
              ></input>
              <label htmlFor="" id="descmodal" className="font-normal">
                Descrição
              </label>
              <textarea
                className="my-2 border-2 rounded text-black font-light text-base"
                type="text-box"
                id="descmodal"
                rows={5}
                cols={40}
                maxLength={234}
                onChange={getDesc}
                value={Desc}
              ></textarea>

              <button
                onClick={onSubmmit}
                type="submmit"
                className="bg-white text-blue-900 px-4 py-2 rounded"
              >
                salvar
              </button>

              <button
                onClick={onClickHandlerClose}
                className="bg-red-600 text-white px-4 py-2 rounded"
              >
                Cancelar
              </button>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}
