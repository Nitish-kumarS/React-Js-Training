
const Navbar= () => {
    return (  
        <nav className="navbar">
            <h1>Flames</h1>
            <div className="links">
                <a href="/">Home  </a>
                <a href="/flameit" style={{
                    color: "white",
                    borderRadius: '10px',
                    margin: '10px'
                }}>Find relationship</a>
            </div>
        </nav>
    );
}
 
export default Navbar ;