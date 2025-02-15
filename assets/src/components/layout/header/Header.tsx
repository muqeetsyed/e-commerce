import {NavLink} from "react-router-dom";

export const Header = () => {
    return (
        <header>
            <div className="top-nav">
                <div className="top-bar">
                    <span>Free shipping on all intl. orders over $35</span>
                    <button className="shop-now">Shop Now</button>
                </div>
                <span>
                    <button className="user-profile-button">
                        <NavLink to="/user-info" style={{textDecoration: 'none'}}>User Profile</NavLink>
                    </button>
                </span>
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
                    <NavLink to="/shop-all">Shop All</NavLink>
                    <NavLink to="/kitchen">Kitchen</NavLink>
                    <NavLink to="/bath">Bath</NavLink>
                    <NavLink to="/on-the-go">On the Go</NavLink>
                    <NavLink to="/about-us">About Us</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
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