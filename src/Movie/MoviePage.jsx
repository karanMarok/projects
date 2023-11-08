import axios from 'axios';
import { useCallback, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router";
import './Movies.css'

const MoviePage = () => {

    const movieid = useParams();
    const [path, setPath] = useState("");
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");

    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount((prev) => prev + 1);
    }

    const handleDecrement = () => {
        setCount((prev) => prev - 1);
    }

    useMemo(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieid?.id}?api_key=de72e986243ca03647f6d353e4cb67d2`);
                setName(response?.data?.title);
                setPath(response?.data?.poster_path);
                setDesc(response?.data?.overview);
                return response;
            }
            catch (error) {
                console.log("Error handling data!")
            }
        }
        fetchData();
    }, [])

    return (
        <>
            <div className='cards mt-5' style={{ width: "100%" }}>
                <div className="cards d-flex justify-content-around">
                    <img src={`https://image.tmdb.org/t/p/w500/${path}`} className="posterImage" alt="poster" />
                    <div className="aboutMovie">
                        <h1 className="col-6" style={{ paddingTop: "3rem" }}>{name}</h1>
                        <p className='col-6 text-justify' style={{ paddingTop: "1rem", fontSize: "18px" }}>{desc}</p>
                        <p style={{ fontSize: "16px", fontWeight: "bold" }}>Buy Movie</p>
                        <div className="buyButtons">
                            <button className="buyButton" onClick={handleIncrement}> + </button>
                            <h5 style={{margin: "0 10px 0 10px"}}> {count} </h5>
                            <button className="buyButton" onClick={handleDecrement}>-</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
export default MoviePage;