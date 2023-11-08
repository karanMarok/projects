import { Route, Routes } from 'react-router-dom'
import './App.css'
import Events from './components/Events'
import Navbar from './components/Navbar'
import WeatherAPI from './Weather/WeatherAPI'
import Movies from './Movie/Movies'
import MoviePage from './Movie/MoviePage'
import Hooks from './components/Hooks'

function App() {
  return (
    <>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Events/>}/>
          <Route path="/weatherapi/" element={<WeatherAPI/>}/>
          <Route path="/moviesapi/" element={<Movies/>}/>
          <Route path="/moviesapi/:id" element={<MoviePage/>}></Route>
          <Route path="/hooks" element={<Hooks/>}></Route>
        </Routes>
    </>
  )
}

export default App
