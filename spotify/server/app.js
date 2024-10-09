import express from 'express'
import cors from 'cors'
import connectDb from './db.js '
import artista from './Models/Artista.js';

const app = express();
app.use(cors());
const conexao = await connectDb();

conexao.on('err', (err) => {
    console.error('Erro ao conectar no Mongodb', err)
})

conexao.once('open', () => {
    console.log("Conectado ao mongodb")
})

app.get('/artistas', async (req, res) =>{
    const listaArtistas = await artista.find({});
    res.status(200).json(listaArtistas)
})

app.listen(3000, () =>{
    console.log('rodando na porta 3000')
})