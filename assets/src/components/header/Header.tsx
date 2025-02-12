export const Header = () => {
    return (
        <header>
            <div className="top-bar">
                <p>Free shipping on all intl. orders over $35</p>
                <button className="shop-now">Shop Now</button>
            </div>
            <div className="nav-bar">
                <div>
                    <h1 className="logo">ReClaim</h1>
                </div>

                <div className="search">
                    <i className="fas fa-search"/>
                    <input className="search-text" type="text" placeholder="Search"/>
                </div>

                <div className="nav-links">
                    <a href="#">Shop All</a>
                    <a href="#">Kitchen</a>
                    <a href="#">Bath</a>
                    <a href="#">On the Go</a>
                    <a href="#">About Us</a>
                    <a href="#">Contact</a>
                </div>

                <div className="icon">
                    <a href="#"><i className="fas fa-user"/>Log In</a>
                    <i className="fa fa-heart"/>
                    <i className="fas fa-shopping-bag"></i>
                </div>
            </div>
        </header>
    );
}