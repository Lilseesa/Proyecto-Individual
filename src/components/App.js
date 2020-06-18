import React from 'react';

import RepoPage from './RepoPage';
import Home from './Home';
import Navbar from './Navbar';
import About from './About';

import {Link} from 'react-scroll';

const App = () => {
	
	return(
		<>
			<div className="contenedor">
				
				<header className="header">
					<Navbar></Navbar>
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

					<section id="AboutPage">
						<div className="aboutCont">
							<About></About>
						</div>
					</section>
				</main>
			</div>
		</>
	);
};

export default App;
