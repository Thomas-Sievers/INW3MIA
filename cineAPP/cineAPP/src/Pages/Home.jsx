import data from '../../artigos.json'

function Home() {
    return (
        <>
        <div className='grid grid-cols-3'>
        {
            data.map(
                    (filme, index) =>(
                            <div className='card' key={index}>
                                <h1 key={filme.title}>{filme.title}</h1>
                                <img src={filme.image}/>
                                <div className='tags'>
                                    {
                                        filme.tags.map( tag =>(
                                            <span key={tag}>{tag}</span>
                                        ))
                                    }
                                </div>
                                <div className='text'>
                                    {
                                        filme.text.map( text=>(
                                            <p key={text}>{text}    </p>
                                        ))
                                    }
                                </div>
                            </div>
                    )
                )
            }
        </div>
           
    </> 
    );
}

export default Home;