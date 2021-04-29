import {useState} from 'react'
let userList = [
    {name: 'Valentyn', age: 19, married: false},
    {name: 'Victor', age: 27, married: true},
    {name: 'Sasha', age: 17, married: false},
    {name: 'Olga', age: 24, married: false},
    {name: 'Vira', age: 27, married: true},
    {name: 'Maria', age: 20, married: true},
    {name: 'Ivan', age: 19, married: false}]

function DeleteOne() {
    let [userArray, setUser] = useState(userList)
    const DeleteUser = (ev) => {
        let b = document.getElementById(ev.target.id)
        userArray.splice(ev.target.id,1)
        setUser([...userArray])
    }


    return (
        <div className="userList">
            {userArray.map((value, index) => <h2
               userArray key={index} >{value.name} - {value.age} - {value.married.toString()} - {value.id = index}
                    <button id={index} onClick={DeleteUser}>Delete User</button></h2> )}

        </div>
    );

}
export default DeleteOne;