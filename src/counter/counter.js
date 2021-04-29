import {useState} from "react";


function Counter() {
    let [number, setNumber] = useState(0)
    const plus=()=>setNumber(++number)
    const minus=()=>setNumber(--number)
    const plusHundred =()=>setNumber(number+=100)
    const  minusHundred=()=>setNumber(number-=100)
    const zero=()=>setNumber(number=0)
  return (
    <div>
       <p>{number}</p><button onClick={plus}>+1</button><button onClick={minus}>-1</button>
        <button onClick={plusHundred}>+100</button><button onClick={minusHundred}>-100</button>
        <button onClick={zero}>0</button>
    </div>
  );
}

export default Counter;