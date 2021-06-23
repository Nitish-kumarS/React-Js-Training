import { Link } from "react-router-dom";

const Navbar = ()=>{
    return (
        <div className="Header">
        <div className="Newshome">
        <h1>NEWS TODAY</h1>
        </div>
        <div className="Navbar">
        <ul>
        <li><Link id ="NavLink"to="/Home">Home</Link></li>
        <li><Link  id="NavLink"to="/Search">Search</Link></li>
        <li><Link id="NavLink" to="/Filter">Filter</Link></li>
        </ul>
        </div>
        </div>
    );
    
}
export default Navbar;