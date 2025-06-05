export default function Modal(props) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-blue-900 rounded-lg p-10">
        <h2 className="text-xl font-bold mb-4 text-white">Adicionar Produto</h2>
        <form action="submit" className="flex flex-col items-start">
          <label htmlFor="" id="nomemodal" className="font-normal">
            Nome
          </label>
          <input
            className="my-2 border-2 rounded text-black font-light"
            type="text"
            id="nomemodal"
            onChange={props.getName}
            value={props.Name}
            required
          ></input>
          <label htmlFor="" id="precomodal" className="font-normal">
            Preço
          </label>
          <input
            className="my-2 border-2 rounded text-black font-light"
            type="number"
            id="precomodal"
            onChange={props.getPrice}
            value={props.Price}
            required
          ></input>
          <label htmlFor="" id="precomodal" className="font-normal">
            Estoque
          </label>
          <input
            className="my-2 border-2 rounded text-black font-light"
            type="number"
            id="precomodal"
            onChange={props.getStock}
            value={props.Stock}
            required
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
            onChange={props.getDesc}
            value={props.Desc}
          ></textarea>

          <button
            onClick={props.onSubmit}
            type="submit"
            className="bg-white text-blue-900 px-4 py-2 rounded"
          >
            salvar
          </button>

          <button
            type="button"
            onClick={props.onClickHandlerClose}
            className="bg-red-600 text-white px-4 py-2 rounded"
          >
            Cancelar
          </button>
        </form>
      </div>
    </div>
  );
}
