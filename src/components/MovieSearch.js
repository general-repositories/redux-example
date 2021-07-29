import { useState } from 'react';

import MovieApiService from '../services/movieApi.service';

import SearchBar from './SearchBar';

const MovieSearch = () => {
    const movieApiService = new MovieApiService();

    const [searchResults, setSearchResults] = useState(); 
    const onSearch = async (title) => {
        const results = await movieApiService.getMoviesByTitle(title);

        setSearchResults(results.Search);
    }

    const addMovieToList = (id) => {
        console.log(id);
    }

    return (
        <div>
            <SearchBar onSearch={onSearch}/>
            {
                searchResults && searchResults.map((movie) => (
                    <div key={movie.imdbID}>
                        <img src={movie.Poster} alt={`${movie.Title} poster`} />
                        <h3>{ movie.Title }</h3>
                        <button onClick={() => addMovieToList(movie.imdbID)}>Add To List</button>
                    </div>
                ))
            }
        </div>
    )
}

export default MovieSearch;