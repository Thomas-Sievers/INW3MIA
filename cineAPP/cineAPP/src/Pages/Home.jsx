import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Carousel, Modal, Button } from 'antd';
import Data from "../../artigos.json";
   

function Home() {
    const [filmes, setFilmes] = useState([])

    useEffect( () =>{
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e`)
        .then( response => response.json())
        .then(response => setFilmes(response.results))
        .catch(error => console.log(error))
    },[])

    const [aModal, setaModal] = useState({});
    const [mostrarModal, setMostrarModal] = useState(false);

    const moreDetail = items => {
        setMostrarModal(true);
        setaModal(items);
      };
    
      const closeDetail = () => {
        setMostrarModal(false);
      };

    return (
        <>
            <Carousel arrows infinite={false}>
            {
                    filmes.map(
                        filme => (
                                <>
                                <div className="flex justify-center mb-6">
                                    <img className="" src={`https://image.tmdb.org/t/p/w1280/${filme.backdrop_path}`} alt="" />
                                </div>
                                </>
                        ) 
                    )
            }
            </Carousel>

            <div className="flex flex-col justify-center items-center">
                <h1 className="text-white underline text-5xl m-5">Destaques de Notícias</h1>
            {
                Data.map(
                    (filme,index) =>(
                        <>
                        <div className="flex rounded-md w-[67%] bg-white p-6 m-4" key={index}>
                            <div >
                                <img className="h-full" src={filme.image} alt="" />
                            </div>
                            <div className="w-full m-4">
                                <h2 className="underline mb-5">{filme.title}</h2>
                                <p>{filme.text}</p>
                                <Link className='bg-navbar text-white w-full' onClick={()=> moreDetail(filme)}>Leia mais</Link>
                            </div>
                        </div>
                        </>
                    )
                )
            }    
            </div>  
            <Modal
                title={Data.title}
                open  = {mostrarModal}
                footer={
                    <Button  onClick={closeDetail} className="bg-navbar text-white hover:bg-none ">
                        Ok
                    </Button>
          }
          onCancel={closeDetail}>
            <p className="my-3">continuação da matéria</p>
        </Modal>
        </> 
    );
}

export default Home;