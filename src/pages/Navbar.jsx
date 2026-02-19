import "./Navber.css"
import { NavLink } from 'react-router-dom';


const Navbar = () => {

    return(
        <nav className="navber">
             <ul>
              <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to ="/about">About</NavLink></li>
                <li><NavLink to ="/service">Service</NavLink></li>
               <span class="icon">JC</span>
                <li><NavLink to ="/resume">Resume</NavLink></li>
                <li><NavLink to ="/project"> Project</NavLink></li>
                <li><NavLink to = "/contact">Contact</NavLink></li>

          </ul>

        </nav>

    )
}
export default Navbar;