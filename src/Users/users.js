import {useState} from 'react'
let userList = [
    {name: 'Valentyn', age: 19, married: false},
    {name: 'Victor', age: 27, married: true},
    {name: 'Sasha', age: 17, married: false},
    {name: 'Olga', age: 24, married: false},
    {name: 'Vira', age: 27, married: true},
    {name: 'Maria', age: 20, married: true},
    {name: 'Ivan', age: 19, married: false}]

function User() {
    let [userArray, setUser] = useState(userList)
    const DeleteUser = () => {
        userArray.pop()
        setUser([...userArray])
    }


    return (
        <div className="userList">
            {userArray.map((value, index) => <h2
                key={index}>{value.name} - {value.age} - {value.married.toString()}  </h2>)}
            <button onClick={DeleteUser}>Delete User</button>
        </div>
    );

}

export default User;