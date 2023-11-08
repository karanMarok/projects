import React from 'react'
import MoviesAPI from './MoviesAPI'
import requests from './requests'

const Movies = () => {
  return (
    <>
      <MoviesAPI title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals} isLargeRow />
      <MoviesAPI title="Trending" fetchURL={requests.fetchTrending} />
      <MoviesAPI title="Top Rated" fetchURL={requests.fetchTopRated} />
      <MoviesAPI title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <MoviesAPI title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <MoviesAPI title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <MoviesAPI title="Romantic Movies" fetchURL={requests.fetchRomanceMovies} />
      <MoviesAPI title="Documentaries" fetchURL={requests.fetchDocumentaries} />
    </>
  )
}

export default Movies;