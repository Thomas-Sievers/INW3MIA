import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Carousel, Modal, Button } from 'antd';

function Filmes() {

    const [filmes, setFilmes] = useState([])

    useEffect(()=>{
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e&langague=pt-BR')
        .then(response => response.json())
        .then(response => setFilmes(response.results))
        .catch(error => console.log(error))
    },[]);

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
        <h1 className='text-white underline m-5 text-5xl'>Destaques</h1>
        <div className='listaFilmes flex [&>div]:flex-shrink-0 flex-row w-full overflow-x-scroll gap-3'>
            {
                filmes.map(
                    filme => (
                        <div className="flex flex-row items-center w-[30%] h-1/4 p-2 m-4 bg-white rounded-md" key={filme.id}>
                            <div>
                            <img src={`https://image.tmdb.org/t/p/w300/${filme.poster_path}`}></img>
                            </div>
                            <div className='m-4 w-full'>
                            <h1 className='underline mb-2'>{filme.title}</h1>
                            <p>{filme.overview}</p>
                            </div>
                        </div>
                    )
                )
            }
        </div>

        <h1 className='text-white underline m-5 text-5xl'>Recomendações</h1>
        <div className='listaFilmes flex [&>div]:flex-shrink-0 flex-row w-full overflow-x-scroll gap-3'>
            {
                filmes.map(
                    filme => (
                        <div className="flex flex-col items-center w-[30%] h-1/4 p-2 m-4 bg-white rounded-md" key={filme.id}>
                            <div>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}></img>
                            </div>
                            <div className='m-4 w-full'>
                            <h1 className='underline mb-2'>{filme.title}</h1>
                            </div>
                            <div className='flex flex-row w-full justify-around'>
                            <img className='h-10' src="play.png" alt="" />
                            <Link onClick={()=> moreDetail(filme)}><img className='h-10' src="plus.png" alt="" /></Link>
                            </div>
                        </div>
                    )
                )
            }
        </div>
        <Modal
                title={filmes.title}
                open  = {mostrarModal}
                footer={
                    <Button  onClick={closeDetail} className="bg-navbar text-white hover:bg-none ">
                        Ok
                    </Button>
          }
          onCancel={closeDetail}>
            <h1 className='underline'>{aModal.title}</h1>
            <p>{aModal.overview}</p>
        </Modal>
    </>
    );
};

export default Filmes;