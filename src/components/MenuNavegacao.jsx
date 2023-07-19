import { BiSearchAlt2 } from "react-icons/bi";

import "../assets/css/cabecalho.css";
import "../assets/css/menu/nav.css";
import "../assets/css/form/form-header.css";
import { Link } from "react-router-dom";

function MenuNavegacao() {
  return (
    <>
      <header className="cabecalho">
        <Link to="/">
          <h1 className="logo">FF Free Filmes</h1>
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
