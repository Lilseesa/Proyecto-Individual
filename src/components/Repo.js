import React from 'react';

const Repo = ({ repo, repoInfo }) => (
    <div className="col-3 my-3">
        <div className="card">
            <div className="card-body ">
                <h3 className="card-title">
                    <a className="repoTitle" target="_blank" href={repo.svn_url} rel="noopener noreferrer">
                        {repo.name}
                    </a>
                </h3>
                <p className="card-description">{repo.description}</p>
                <p className="list__item__description card-text">{repo.language}</p>
                <a type="button" className="btn btn-repo" href={repo.svn_url} target="_blank" rel="noopener noreferrer">Ver página</a>
            </div>
        </div>
    </div>
);

export default Repo;