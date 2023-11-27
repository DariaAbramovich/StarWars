
import { BrowserRouter, NavLink } from 'react-router-dom'
import "./Header.css"

export const Header = () => {
    return (
        <div className="container">
            <ul className="link_container">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/people">People</NavLink></li>
            </ul>
        </div>
    )
}