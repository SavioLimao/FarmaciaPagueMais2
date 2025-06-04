import React, { useState } from "react";
import Header from "./components/header/Header";
import Table from "./components/Table/Table";
import Title from "./components/title";
import Footer from "./components/footer";
import Modal from "./components/buttons/BtnAdd/BtnAdd";

const App = () => {
  let produtos = [
    {
      id: 1,
      nome: "Dipirona",
      preco: 12.5,
      descricao: "Remédio para dor e febre",
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
    <>
      <Header />
      <Title />
      <Table />
      <Footer />
    </>
  );
};

export default App;
