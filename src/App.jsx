import { Route, Routes } from 'react-router-dom'
import './App.css'
import Events from './components/Events'
import Navbar from './components/Navbar'
import WeatherAPI from './Weather/WeatherAPI'
import Movies from './Movie/Movies'
import MoviePage from './Movie/MoviePage'
import Hooks from './components/Hooks'
import Redux from './Redux/Redux'
import General from './Redux/components/General'

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
          <Route path="/redux" element={<Redux/>}></Route>
          <Route path="/custompage" element={<General/>}></Route>
        </Routes>
    </>
  )
}

export default App
