import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1>Bem-vindo à Página Inicial</h1>
      <nav>
        <Link href="/login">Login</Link>
        <br />
        <Link href="/dashboard">Painel de Controle</Link>
      </nav>
    </div>
  );
};

export default Home;
