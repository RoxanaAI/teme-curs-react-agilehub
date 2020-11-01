import React, {useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function MovieDetails() {
    const { moveId } = useParams();
    const [movie, setDetail] = useState([]);

    async function featchData(){
       var data =  await fetch(`https://movies-app-siit.herokuapp.com/movies/${moveId}`);
        data.json()
        .then( (data) => {
            setDetail(data);
            console.log(data);
        })    
    }

    useEffect( () => {
        featchData()
    }, []);

    if(!movie) {
        return <h1>Loading ...</h1>;
    }

    return (
        <div>
            <h1>{ movie.title }</h1>
            <div>
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
        </div>
    )
}