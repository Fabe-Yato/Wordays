import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import setaImg from "../../assets/seta.png";
import profilePhoto from "../../assets/batman.webp";
import "./Navbar.css";

const Navbar = () => {
    return(
        <>
           <nav className="navbar-container">
                <RxHamburgerMenu className="menu-hamburguer" /> 
                <div className="search-container">
                        <IoIosSearch className="search-icon"/>
                        <input type="search" id="search" placeholder="Digite uma palavra" />
                </div>
                <h1 className="page-title">Wordays</h1>
                <div className="profile-container">
                    <img className="selector-menu" src={setaImg} alt="menu-selector" />
                    <img className="profile-photo" src={profilePhoto} alt="profile-photo" />
                </div>
           </nav> 
        </>
    )
}

export default Navbar;