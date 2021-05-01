import {useEffect, useState} from 'react';
import Post from "./post";
import './posts.css';
function Posts() {
    let [posts, setPosts] = useState([])
    let [onePost, setOnePost] = useState(null)
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/comments').then(value => value.json()).then(value => {setPosts([...value])})
    },[])
    let but = document.getElementById('but')
    console.log(but);
    const search = (id)=>{
        let findPost = posts.find(value => value.id === id)
        console.log(findPost);
        setOnePost(findPost)
    }
    const deletePost = (ev) =>{
         let b = document.getElementById(ev.target.id)
        posts.splice(ev.target.id,1)
        setPosts([...posts])
    }
    return (
    <div className="Posts">
        <div className='wrapPosts'>{
            posts.map((value => <Post key={value.id} item={value} search={search}/>))
        }</div>
        <div className='wrapPost'>
            {
               onePost ?  ( <div> {onePost.id} <br/> {onePost.name} <br/> {onePost.email} <br/> {onePost.body}
                <br/> <button id='but' onClick={deletePost}>delete</button></div>) : (<div>user not defined</div>)            }
        </div>
    </div>
  );
}

export default Posts;