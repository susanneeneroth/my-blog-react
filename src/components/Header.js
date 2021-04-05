const Header = () => {
    return ( 
        <header>
            <h1>My blog</h1>
            <form id="form">
                <input type="text" id="search" placeholder="Blog search" />
                <button className="header-btn">Search</button>
            </form>
        </header>
     );
}
 
export default Header;