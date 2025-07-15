import { Link } from "react-router-dom"

function NavBar(){
    return(
         <nav className="navabar">
            <div className="navbar-brand">
                <Link to="/">Anime Site</Link>
            </div>
            <div className="navbar-menu">
                <Link to = "/" className="nav-link">Home</Link>
                <Link to ="/favorite" className="nav-link">Favorites</Link>
            </div>
        </nav>
    )
       
    
}
export default NavBar