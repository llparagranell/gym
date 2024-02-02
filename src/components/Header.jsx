import "../css/Header.css";
import { GiMoebiusTriangle } from "react-icons/gi";
import { Link } from "react-router-dom";

function Header() {
  const openNav = () =>{
    document.getElementById("mySidenav").style.width = "100%";
  }
  
  const closeNav = ()=> {
    document.getElementById("mySidenav").style.width = "0";
  }
  return (
    <>
      <nav>
        <ul>
          <h1 className="logo"><GiMoebiusTriangle/></h1>
        </ul>
        <ul className="res">
          <Link className="font-small" to='/'>Home</Link>
          <Link className="font-small">Programs</Link>
          <Link className="font-small">Contact</Link>
          <Link className="font-small">Plans</Link>
          <Link className="font-small" to="/bmi">BMI</Link>
        </ul>
        <span className="span-res" onClick={openNav}>&#9776;</span>
      </nav>
      
<div id="mySidenav" className="sidenav">
  <a  className="closebtn" onClick={closeNav}>&times;</a>
  <Link className="font-small" to='/'>Home</Link>
          <Link className="font-small">Programs</Link>
          <Link className="font-small">Contact</Link>
          <Link className="font-small">Plans</Link>
          <Link className="font-small" to="/bmi">BMI</Link>
</div>
    </>
  );
}

export default Header;
