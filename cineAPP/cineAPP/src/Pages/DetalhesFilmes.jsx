import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"


function DetalhesFilmes(){
    const {id} = useParams()
    const [filme,setFilme] = useState({})

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-BR`)
            .then(response => response.json())
            .then(response => setFilme(response))
            .catch(error => console.log(error))
        },[]);


    return(
        <>
        <img src={`https://image.tmdb.org/t/p/w1280/${filme.backdrop_path}`}></img>
        <p>{filme.title}</p>
        <p>{filme.vote_average}</p>
        </>
    )
}

export default DetalhesFilmes