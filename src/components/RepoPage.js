import React from 'react';

import ReposList from './ReposList'

const RepoPage = (props) => {

	const { repos } = props;

    return(
	
		<div className="app">
			<div>
				<main className="container">
					<p className="list__item__link list__item__link--active font-weight-bolder">Repositorios</p>
					{repos.length && <ReposList repos={repos}></ReposList>}
				</main>
			</div>
		</div>	

	);

}

export default RepoPage;