import { useEffect, useState } from "react";
import CardsFilmes from "../components/CardsFilmes";
import "../assets/css/Filmes/container.css";

const chaveApi = import.meta.env.VITE_API_KEY;
const filmesAPI = import.meta.env.VITE_FILMES_NOW;

function Fimes() {
  const [filmes, setFilmes] = useState([]);
  // console.log(filmes)

  useEffect(() => {
    const linkUrlTmdb = ` ${filmesAPI}?${chaveApi} `;

    pegaLinkTmdb(linkUrlTmdb);
  });

  const pegaLinkTmdb = async (url) => {
    const resposta = await fetch(url);
    const dado = await resposta.json();

    setFilmes(dado.results);
  };

  return (
    <>
      <h1 className="titulo">Filmes que estão por vir!</h1>
      <div className="movies">
        {filmes.map((filme) => (
          <CardsFilmes key={filme.id} Filmes={filme} />
        ))}
      </div>
    </>
  );
}

export default Fimes;
