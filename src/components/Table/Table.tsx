import { useState, useEffect } from "react";
import BtnAdd from "../buttons/BtnAdd/BtnAdd";
import produtosJson from "../../assets/produtos.json";
import EditBTN from "../../components/buttons/EditBTN/EditBTN";
import {
  PencilSquareIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/16/solid";
// import produtos from "../../assets/produtos.json";

export default function Table() {
  const [produtos, setProdutos] = useState(() => {
    const localData = localStorage.getItem("produtos");
    return localData ? JSON.parse(localData) : produtosJson;
  });

  useEffect(() => {
    localStorage.setItem("produtos", JSON.stringify(produtos));
  }, [produtos]);

  const novoProduto = (produto) => {
    setProdutos((produtoInit) => [...produtoInit, produto]);
  };

  const deleteProduto = (id) => {
    setProdutos(produtos.filter((prod) => prod.id !== id));
  };

  return (
    <main className="flex flex-col items-center text-xl mt-20">
      <div className="w-3/4">
        <div className="flex justify-end"></div>
        <table className="w-full table-auto text-white border border-collapse divide-y divide-white">
          <thead className="bg-blue-800">
            <tr>
              <th className="p-2">Nome</th>
              <th className="p-2">Preço</th>
              <th className="p-2">Descrição</th>
              <th className="p-2">Estoque</th>
              <th className="p-2">Edit</th>
              <th className="p-2">
                {/* ADD BTN */}
                <BtnAdd onSubmit={novoProduto} />
              </th>
            </tr>
          </thead>
          <tbody>
            {produtos.map((produto, index) => (
              <tr
                key={index}
                className="odd:bg-slate-800 even:bg-gray-500 text-center"
              >
                <td className="py-2">{produto.nome}</td>
                <td className="py-2">{produto.preco}</td>
                <td className="py-2">{produto.descricao}</td>
                <td className="py-2">{produto.estoque}</td>
                <td>
                  {/* Edit BTN */}
                  <EditBTN
                    produto={produto}
                    nome={produto.nome}
                    preco={produto.preco}
                    descricao={produto.descricao}
                    estoque={produto.estoque}
                    onUpdate={(produtoAtualizado) => {
                      setProdutos((prev) =>
                        prev.map((p) =>
                          p.id === produtoAtualizado.id ? produtoAtualizado : p
                        )
                      );
                      localStorage.setItem(
                        "produtos",
                        JSON.stringify(
                          produtos.map((p) =>
                            p.id === produtoAtualizado.id
                              ? produtoAtualizado
                              : p
                          )
                        )
                      );
                    }}
                    onDelete={deleteProduto}
                  />
                </td>
                <td>
                  <Square3Stack3DIcon className="w-6 mx-4" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
