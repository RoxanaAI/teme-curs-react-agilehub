import React, {useState, useEffect} from 'react';
import Movie from './Movie';

export default function MoviesList() {
    const [moviesList, setMoviesList] = useState([]);

    const numberOfPages = 9;
    var currentPage = 1;
    // do {
        fetchData(currentPage);
        currentPage++;
    // }while(currentPage <= numberOfPages);

    async function fetchData(currentPage){
        var url = 'https://movies-app-siit.herokuapp.com/movies?take=10&skip=' + (currentPage - 1) * 10;
        const res = await fetch(url);
        res.json()
        .then(res => { 
            const { results } = res;
            // setPagesNumber(res.pagination.numberOfPages);
            setMoviesList(results);
        })
    }

    useEffect(() => {
        fetchData()
    },[]);

    if(!moviesList) {
        return <h1>Loading ...</h1>;
    }

    return (
        <>
            <dl>
                { moviesList.map(item => <Movie key={item._id} movie={item} />) }
            </dl>
        </>
    );
}