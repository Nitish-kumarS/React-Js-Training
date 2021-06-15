import {Link} from 'react-router-dom';

const Navbar= () => {
    return (  
        <nav className="navbar">
            <h1>Flames</h1>
            <div className="links">
                <Link to="/">Home  </Link>
                <Link to="/Form" style={{
                    color: "white",
                    borderRadius: '10px',
                    margin: '10px'
                }}>Forms</Link>
            </div>
        </nav>
    );
}
 
export default Navbar ;