import { Link } from "react-router-dom";
import "../assets/styles/customStyles.css";

function Menu() {
  return (
    <div className="w-1/12 bg-emerald-50 shadow-sm fixed menu">
      <ul className="m-2 font-semibold text-md">
        <li className="menu-item">
          <Link to="/">Misiones</Link>
        </li>
        <li className="menu-item">
          <Link to={"/stories"}>Historias</Link>
        </li>
        <li className="menu-item">
          <Link to={"/skills"}>Habilidades</Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
