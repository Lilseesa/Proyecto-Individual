import React from 'react';

import Repo from './Repo';

    const ReposList = ({ repos }) => (
        <div className="container">
            <div className="row">
                {repos.map((repo) => {
                    return <Repo key={repo.id} repo={repo}></Repo>; 
                })}
            </div>
        </div>
    );

export default ReposList;