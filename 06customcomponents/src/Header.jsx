import reactLogo from "./assets/react.svg"
import './Header.css'
function Header(){
    return(
        <header className="header-class">
            <img src={reactLogo}  alt="react logo" className="image"/>
            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-list-item">Pricing</li>
                    <li className="nav-list-item">About</li>
                    <li className="nav-list-item">Contact</li>
                </ul>
            </nav>
        </header>
    )
}
export default Header