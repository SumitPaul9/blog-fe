import { Link } from "react-router-dom"
import Post from '../posts/Post'
// import './listpost.css'

const ListPost = ({ posts }) => {
    return (
        <div className="grid-container mx-3">
         {posts.map(post => (
            <Link to={`/blog/post/${post._id}`} key={post._id}>
               <Post post={post} />
            </Link>
         ))}
      </div>
    )
}

export default ListPost
