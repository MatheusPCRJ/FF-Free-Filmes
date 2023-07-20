import "../assets/css/CardsFilmes/container.css"

const imagemFilmes = import.meta.env.VITE_IMG;

function CardsFilmes({ Filmes }) {
  return (
    <>
      <div className="container">
        <div className="container__card" key={Filmes.id}>
          <img
            src={imagemFilmes + Filmes.poster_path}
            alt="Imagem do Filme"
            className="container__imagem"
          />
          <p className="container__nomeFilme">{Filmes.title}</p>
          <p className="container__estreia">
            Estreia em: {Filmes.release_date}
          </p>
          <button className="container__botao">Mais detalhes</button>
        </div>
        ;
      </div>
    </>
  );
}

export default CardsFilmes;
