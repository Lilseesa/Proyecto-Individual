import React from 'react';

import {Link} from 'react-scroll';

const Navbar = () => {
    return(

        <nav className="navbar">

            <Link to="Home" smooth={true} duration={1000}>
                <img className="icon" alt="logo" src={require('../img/LogoSven.png')}></img>
            </Link>

            <div className="navbar--elements">
                <Link className="element" to="Home" smooth={true} duration={1000}>
                    Inicio
                </Link>
                <Link className="element" to="RepoPage" smooth={true} duration={1000}>
                    Proyectos
                </Link>
                <Link className="element" to="AboutPage" smooth={true} duration={1000}>
                    Acerca de mi
                </Link>
            </div>

        </nav>

    );
}


export default Navbar;