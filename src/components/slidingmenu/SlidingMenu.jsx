import './SlidingMenu.css';
import { Outlet, Link } from 'react-router-dom';
const SlidingMenu = ({ isMenuOpen }) => {
  return (
    <div className={`sliding-menu close-menu ${isMenuOpen ? 'open' : ''}`}>
      <ul>
        <li><Link to='/Home'>Home</Link></li>
        <li><Link to='/Contact'>Contact </Link></li>
        <li> <Link to='/About'> About </Link></li>
      </ul>
    </div>
  );
};

export default SlidingMenu;
