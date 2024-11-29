import { Link } from 'react-router-dom';
import './index.css';

function Menu() {
  return (
    <ul className="navbar-menu">
      <li>
        <Link to="info" className="menu-item">
          InfoProd
        </Link>
      </li>
      <li>
        <Link to="afficher" className="menu-item">
          Afficher
        </Link>
      </li>
      <li>
        <Link to="rechercher" className="menu-item">
          Rechercher
        </Link>
      </li>
      <li>
        <Link to="listProd" className="menu-item">
          ListProduit
        </Link>
      </li>
      <li>
        <Link to="ajouterProd" className="menu-item">
          AjouterProduit
        </Link>
      </li>
    </ul>
  );
}

export default Menu;
