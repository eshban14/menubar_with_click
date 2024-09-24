import './Layout.css'
import { Outlet } from 'react-router-dom';
const Layout = ({ toggleMenu }) => {
  return (
    <>
      <header className='header'>
        <div className="logo">
          My site
          <i className="fa-solid fa-bars" onClick={toggleMenu}></i> 
        </div>
      </header>

      <div className="main">
       
       <Outlet/>
       
      </div>
    </>
  );
}

export default Layout;
