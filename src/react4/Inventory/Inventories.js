import {useEffect, useState} from 'react';
import Inventory from "./Inventory";
import {
  BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom'
import InventoryDetails from "./InventoryDeteils";

export default function Inventories(props){
    let [inventories, setInventories] = useState([])
    useEffect(()=>{
        fetch( 'https://api.sampleapis.com/futurama/inventory').then(value => value.json()).then(value => {setInventories([...value])})
    },[])
    return(
        <div>
            {inventories.map(value => <Inventory key={value.id} item={value} />)}

        </div>
    )
}