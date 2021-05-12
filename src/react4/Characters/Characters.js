import {useEffect, useState} from 'react';
import Character from "./Character";
import {
  BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom'
import InventoryDetails from "../Inventory/InventoryDeteils";
import CharacterInform from "./CharacterInform";
export default function Characters(props){
    let [characters, setCharacters] = useState([])
    useEffect(()=>{
        fetch( 'https://api.sampleapis.com/futurama/characters').then(value => value.json()).then(value => {setCharacters([...value])})
    },[])
    return(
        <div>
            {characters.map(value => <Character key={value.id} item={value}/>)}
            <Switch>
                <Route path={'/characters/:id'} component={CharacterInform}/>
            </Switch>
        </div>
    )
}
