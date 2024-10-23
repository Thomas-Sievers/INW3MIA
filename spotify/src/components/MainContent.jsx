import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function MainContent(){

  const [ artistas, setArtistas ] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/artistas')
      .then(res => res.json())
      .then(data => setArtistas(data))
      .catch(err => console.log(err))
  }, [])


    return(
      <div className="bg-gray-400 w-3/4 grid grid-cols-4 place-items-center items-center">
        <>
          <h1>Rock</h1>
          {artistas
            .map( artista => (
              <Link to={`/artista/${artista._id}`}>
                <div className=" bg-red-500 w-28 h-28 flex flex-col justify-around items-center">
                  <h1>{artista.name}</h1>
                </div>
              </Link>
            ))
          }
        </>
      </div>
    )
}