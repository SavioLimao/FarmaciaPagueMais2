import React from "react";
import BtnAdd from "../buttons/BtnAdd/BtnAdd";
import { PencilSquareIcon, Square3Stack3DIcon } from "@heroicons/react/16/solid";

export default function Table(props) {
  let produtos = [
    {
      id: 1,
      nome: "Dipirona",
      preco: 12.5,
      descricao: "Remédio para dor e febre lorem",
      estoque: 200,
    },
    {
      id: 2,
      nome: "Nimesulida",
      preco: 14.0,
      descricao: "Anti-inflamatório e analgésico",
      estoque: 100,
    },
    {
      id: 3,
      nome: "Paracetamol",
      preco: 9.75,
      descricao: "Analgésico e antitérmico",
      estoque: 300,
    },
    {
      id: 4,
      nome: "Ibuprofeno",
      preco: 11.9,
      descricao: "Anti-inflamatório não esteroide",
      estoque: 150,
    },
    {
      id: 5,
      nome: "Omeprazol",
      preco: 18.3,
      descricao: "Redutor de acidez estomacal",
      estoque: 80,
    },
  ];

  return (
    <main className="flex flex-col items-center text-xl mt-20">
      <div className="w-3/4">
      <div className="flex justify-end">
        {/* <BtnAdd /> */}
      </div>
        <table className="w-full table-auto text-white border border-collapse divide-y divide-white">
          <thead className="bg-blue-800">
            <tr>
              <th className="p-2">Nome</th>
              <th className="p-2">Preço</th>
              <th className="p-2">Descrição</th>
              <th className="p-2">Estoque</th>
              <th className="p-2">Edit</th>
              <th className="p-2"><BtnAdd /></th>
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
                  <button className="bg-red-700 p-2 active:bg-red-800 rounded">
                    <PencilSquareIcon className="w-5 h-5 text-white" />
                  </button>
                </td>
                <td>
                  <Square3Stack3DIcon className="w-6 mx-4" />
                </td>
              </tr>
            ))}
            {/* <td className="py-2">{props.nome}</td>
              <td className="py-2">{props.preco}</td>
              <td className="py-2">{props.descricao}</td>
              <td className="py-2">{props.estoque}</td>
              */}
          </tbody>
        </table>
      </div>
    </main>
  );
}
