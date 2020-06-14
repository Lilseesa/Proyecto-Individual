import React from 'react';

import RepoPage from './RepoPage';
import Home from './Home';
import {Link} from 'react-scroll';

const App = () => {
	
	return(
		<>
			<div className="contenedor">
				
				<header className="header">
					<nav className="navbar">

						<Link to="Home" smooth={true} duration={1000}>
							<img className="icon" alt="logo" src={require('../img/LogoSven.png')}></img>
						</Link>

						<div className="navbar--elements">
							<Link className="element" to="Home" smooth={true} duration={1000}>
								Home
							</Link>
							<Link className="element" to="RepoPage" smooth={true} duration={1000}>
								Projects
							</Link>
							<Link className="element" to="RepoPage" smooth={true} duration={1000}>
								Resume
							</Link>
							<Link className="element" to="RepoPage" smooth={true} duration={1000}>
								Contact
							</Link>
							<Link className="element" to="RepoPage" smooth={true} duration={1000}>
								About
							</Link>
						</div>

					</nav>
				</header>

				<main>
					<section id="Home">
						<div className="containerHome">
							<Home></Home>

							<div className="btn--container">
								<Link to="RepoPage" smooth={true} duration={1000}>
									<button type="button" className="btn">See my projects</button>
								</Link>
							</div>
						</div>
					</section>

					<section id="RepoPage">
						<div className="repoContainer">
							<RepoPage></RepoPage>
						</div>
					</section>
				</main>
			</div>
		</>
	);
};

export default App;

//token 8c758a06934d0225984a926ace3687fda7713b51