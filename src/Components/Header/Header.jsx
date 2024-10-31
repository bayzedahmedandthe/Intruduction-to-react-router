import {  NavLink } from "react-router-dom";
import "./Header.css"
const Header = () => {
    return (
        <div>
            <h2>Navbar</h2>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>

        </div>
    );
};

export default Header;
