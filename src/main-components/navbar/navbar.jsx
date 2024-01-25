import React from 'react'
import '../navbar/Navbar.css';

import { useRef } from 'react'

import { Link } from 'react-router-dom';
import logoServe from '../../assests/images/logo/1.png'

import { CiUser } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

function Navbar() {

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }


    return (

        <nav className='navba'>
            <Link to="/">
                <div className="nav-container">
                    <img src={logoServe} alt="Logo" />
                </div>
            </Link>
            <div className="nav-menus">
                <ul ref={navRef}>
                    <Link to={"/"}><li>Home</li></Link>
                    <Link to={"about"}><li>About</li></Link>
                    <Link><li>Services</li></Link>
                    <Link><li>Projects</li></Link>
                    <Link><li>Gallery</li></Link>
                    <Link><li>Contact</li></Link>
                    <button className='nav-open nav-close' onClick={showNavbar}><ImCross /></button>

                </ul>
                <button className='nav-open nav-close' onClick={showNavbar}><FaBars /></button>

            </div>
        </nav>
    )
}

export default Navbar;