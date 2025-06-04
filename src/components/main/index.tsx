import React from "react";
import BtnAdd from "../buttons/btn-add";

const Main = () => {
  return (
    <main className="flex items-end text-xl justify-around mt-20">
      <div className=" flex justify-center">
        <div
        // className="border overflow-hidden"
        >
          <table className=" text-white border border-collapse  flex flex-col divide-white ">
            <thead className="flex justify-around divide-white bg-blue-800 h-12">
              <th className="">Nome</th>
              <th className="">Preço</th>
              <th className="">Descrição</th>
              <th className="">Estoque</th>
              <th>Edit</th>
            </thead>
            <tbody>
              <tr className="flex items-center justify-around items-center  odd:bg-slate-800 even:bg-gray-100">
                <td className="w-32 text-center">Dipirona</td>
                <td className="w-32 text-center">12,50</td>
                <td className="w-32 text-center">Remedio para dor de cabeça</td>
                <td className="w-32 text-center">Qtd. 200</td>
                <button className="bg-red-700 p-3 active:bg-red-800 rounded m-1">
                  Edit
                </button>
              </tr>
              <tr className="flex items-center justify-around odd:bg-slate-800 even:bg-slate-950 ">
                {/* text-blue-800 */}
                <td className="w-32 text-center">Nimesulida</td>
                <td className="w-32 text-center">12,50</td>
                <td className="w-32 text-center">Antiflamatório</td>
                <td className="w-32 text-center">Qtd. 100</td>
                <button className="bg-red-700 p-3 active:bg-red-800 rounded m-1">
                  Edit
                </button>
              </tr>
            </tbody>
          </table>
        </div>
        <BtnAdd />
      </div>
    </main>
  );
};

export default Main;
