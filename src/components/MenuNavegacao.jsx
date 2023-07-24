import { BiSearchAlt2 } from "react-icons/bi";
import { Link } from "react-router-dom";

import "../assets/css/MenuNavegacao/cabecalho.css";
import "../assets/css/MenuNavegacao/menu/nav.css";
import "../assets/css/MenuNavegacao/form/form-header.css";


function MenuNavegacao() {
  return (
    <>
      <header className="cabecalho">
        <Link to="/">
          <h1 className="logo">FreeFi Free Filmes</h1>
        </Link>

        <nav className="menu">
          <Link to="filmes">
            <li className="menu__item">Filmes</li>
          </Link>

          <Link to="series">
            <li className="menu__item">Séries</li>
          </Link>

          <form className="form">
            
            <input
              className="form__pesquisar"
              type="text"
              placeholder="Busque um filme"
            />
            <button type="sumit" className="form__button">
              <BiSearchAlt2 />
            </button>

          </form>

        </nav>

      </header>
    </>
  );
}

export default MenuNavegacao;
