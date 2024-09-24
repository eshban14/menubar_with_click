import './Nav.css'
import { Outlet, Link } from 'react-router-dom';
const Nav = () => {
  return (
    <div className="nav">
      <div className="navicons">
        <li><i className="fa-solid fa-house"></i></li>
        <li><i className="fa-solid fa-address-book"></i></li>
        <li><i className="fa-solid fa-address-card"></i></li>
      </div>
    </div>
  );
}

export default Nav;
