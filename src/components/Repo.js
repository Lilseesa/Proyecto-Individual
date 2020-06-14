import React from 'react';

const Repo = ({ repo }) => (
    <div className="col-3 my-3">
        <div className="card">
            <div className="card-body ">
                <h3 className="card-title">
                    <a target="_blank" href={repo.svn_url} rel="noopener noreferrer">
                        {repo.name}
                    </a>
                    {repo.private ? <small className="badge-private d-none">Private</small> : ''}
                </h3>
                <p className="card-description">{repo.description}</p>
                <p className="list__item__description card-text">{repo.language}</p>
                <button type="button" className="btn btn-card">More</button>
            </div>
        </div>
    </div>
);

export default Repo;