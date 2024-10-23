import { useParams } from 'react-router-dom'

export default function artistsDetails(){
    const {id} = useParams()
    return(
        <p>{id}</p>
    )
}