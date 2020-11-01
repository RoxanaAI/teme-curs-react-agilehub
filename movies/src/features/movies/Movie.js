import React from 'react';
import { Redirect } from 'react-router-dom';

function Movie({ movie }) {

    function showDetails(){
        return <Redirect to='/MovieDetails'></Redirect>;
    }

    return (
        <React.Fragment key={movie._id} >
            <div onClick={showDetails}>
                <h1>Title: { movie.Title }</h1>
                <img src={ movie.Poster } alt="cover" width="100" />
                <div>
                    Genre : {movie.Genre}
                </div>
                <div>
                    Language : {movie.Language}
                </div>
                <div>
                    Country : {movie.Country}
                </div>
                <div>
                    Runtime: {movie.Runtime}
                </div>
            </div>
        </React.Fragment>
    );
}

export default Movie;