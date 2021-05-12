import {useParams} from 'react-router-dom'
import{useState, useEffect} from 'react'
export default function CharacterInform({item}){
let params = useParams()
    console.log(params);
    let [inform, setInform] = useState([])
    useEffect(()=>{
        fetch( 'https://api.sampleapis.com/futurama/characters' + params.id).then(value => value.json()).then(value => {setInform(value)})
    },[inform])
    return (
        <div>
            {params.id} -- {inform.age}
        </div>
    )
}