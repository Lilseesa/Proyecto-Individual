import React, { useState, useEffect } from 'react';
import axios from "../utils/axios";

import ReposList from './ReposList'

const RepoPage = ({ RepoPage }) => {

    const [ repos, setRepos ] = useState();

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
	
		<div className="app">
			<div>
				<main className="container">
					<p className="list__item__link list__item__link--active"> Repositories</p>
					{repos && <ReposList repos={repos}></ReposList>}
				</main>
			</div>
		</div>	

	);

}

export default RepoPage;