import React from "react";
import BtnAdd from "../buttons/btn-add";

const Main = () => {
  return (
    <main className="flex items-end text-xl justify-around mt-20">
      <div className="border overflow-hidden w-3/4">
      <table className=" text-zinc-100 border border-collapse border-zinc-100 border-solid  flex flex-col py-2 divide-white">
        <thead className="flex justify-around divide-white">
          <th className="">Nome</th>
          <th className="">Preço</th>
          <th className="">Descrição</th>
          <th className="">Estoque</th>
        </thead>
        <tbody>
          <tr className="flex justify-around">
            <td className="w-32 text-center">Dipirona</td>
            <td className="w-32 text-center">12,50</td>
            <td className="w-32 text-center">Remedio para dor de cabeça</td>
            <td className="w-32 text-center">Qtd. 200</td>
          </tr>
          <tr className="flex justify-around ">
            <td className="w-32 text-center">Nimesulida</td>
            <td className="w-32 text-center">12,50</td>
            <td className="w-32 text-center">Antiflamatório</td>
            <td className="w-32 text-center">Qtd. 100</td>
          </tr>
        </tbody>
      </table>
      </div>
      <BtnAdd />
    </main>
  );
};

export default Main;