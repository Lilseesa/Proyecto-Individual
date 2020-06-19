import React, { useState, useEffect } from 'react';

import RepoPage from './RepoPage';
import Home from './Home';
import Navbar from './Navbar';
import About from './About';

import {Link} from 'react-scroll';
import axios from "../utils/axios";

const App = () => {
	const [ repos, setRepos ] = useState([]);

	const getRepos = () => {
		axios
			.get('/user/repos?sort=updated_at&affiliation=owner')
			.then((res) => {
				console.log(res.data);

				//antes this.setStateahora con hooks:
				setRepos(res.data);
			})
			.catch((err) => {console.error(err);
			});
	};
    
    useEffect(() => {
		getRepos();
	} , []);
	
	return(
		<>						
			<header className="header">
				<Navbar></Navbar>
			</header>
			
			<section id="Home">
				<div className="containerHome">
					<Home></Home>

					<div className="btn--container">
						<Link to="RepoPage" smooth={true} duration={1000}>
							<button type="button" className="btn">Ver mis proyectos</button>
						</Link>
					</div>
				</div>
			</section>

			<section id="RepoPage">
				<div className="repoContainer">
					<RepoPage repos={repos}></RepoPage>
				</div>
			</section>

			<section id="AboutPage">
				<div className="aboutCont">
					<About></About>
				</div>
			</section>	
		</>
	);
};

export default App;
