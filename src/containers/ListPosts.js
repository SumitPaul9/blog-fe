import { useEffect, useState } from "react"
import { Button, Container, Form, Nav } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { getPostsAction } from "../actions/postAction";
import ListPost from '../components/posts/ListPost';

const ListPosts = (props) => {
    const dispatch = useDispatch()
    const [search, setSearch] = useState("");
    const [display, setDisplay] = useState(false)
    const { isLoggedIn } = useSelector(state => state.auth);
    const { posts } = useSelector(state => state.post)
    const auth = isLoggedIn;
    
    const handleChange = (e)=>{
        setSearch(e.target.value);
        dispatch(getPostsAction());
    }

    useEffect(() => {
        console.log(props)
        if(isLoggedIn){
            dispatch(getPostsAction());
        }
    }, [dispatch])
    

    useEffect(() => {
        setTimeout(() => { 
           if (posts.length === 0) setDisplay(true);
        }, 1000);
     }, [posts]);
    return (
        <>
            <div className="grid-container-top mx-3">
                <Nav className= "justify-content-between mt-2 mb-2">
                    { auth && (
                        <Link to="/blog/post/create">
                        <Button variant="light" className="styleBtn">
                           +
                        </Button>
                     </Link>
                    )}

                <Form>
                    <Form.Group controlId="searchBar">
                        <Form.Control
                            type="text"
                            name = "search"
                            placeholder="Search Post..."
                            style={{ height: 40 }}
                            value = {search}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Form>
                </Nav>
            </div>
            {posts.length > 0 ? (
                <ListPost
                    posts={posts.filter(post =>
                        post.title.toLowerCase().includes(search)
                    )}
                />
            ) : (
                display && (
                <Container
                    style={{ height: "50vh" }}
                    className="d-flex flex-column justify-content-center align-items-center"
                >
                    {" "}
                    <p className="text-secondary h3">No Post Found !</p>
                </Container>
                )
            )}
        </>
        
    )
}

export default ListPosts
