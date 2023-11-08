import React, { useEffect, useState } from 'react'
import "../Movie/Movies.css"
import { useNavigate } from 'react-router-dom';
import axios from './axios';

const MoviesAPI = ({ title, fetchURL, isLargeRow }) => {

  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original";
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(fetchURL);
        setMovies(response?.data?.results);
        return response;
      }
      catch (error) {
        console.log("Error handling data!")
      }
    }
    fetchData();
  }, [fetchURL])

  const handleMouseClick = (id) => {
    navigate("/moviesapi/" + `${id}`)
  }

  return (
    <>
      <div className='entireMovie'>
        <p className="title">{title}</p>
        <div className="posters">
          {movies.map((item) => {
            return (
              <>
                <img className={`cardImage ${isLargeRow && "cardImageLarge"}`}
                  key={item?.id}
                  src={`${base_url}${isLargeRow ? item?.poster_path : item.backdrop_path}`}
                  alt="originals"
                  onClick={() => handleMouseClick(item?.id)} />
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default MoviesAPI;