import React, { } from 'react'
import './Navbar.css'
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">MUO</div>
            <ul className="nav-links">
                <div className="menu">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li className="services">
                        <a href="/">Services</a>
                    </li>
                    <li><a href="/">Pricing</a></li>
                    <li><a href="/">Contact</a></li>
                </div>
              
            </ul>
            <button className='click_me_btn'>X</button>
           
        </nav>
    )
}

export default Navbar