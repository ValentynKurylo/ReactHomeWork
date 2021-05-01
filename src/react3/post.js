import './post.css';
function Post({item, search}) {

  return (
    <div className="Post">
        {item.id} - {item.name} <button onClick={()=> search(item.id)}>details</button>
    </div>
  );
}

export default Post;