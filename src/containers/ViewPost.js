import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams,useHistory } from 'react-router-dom'
import { deletePostAction, getPostByIDAction } from "../actions/postAction";
import dayjs from 'dayjs'

const ViewPost = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const post = useSelector(state => state.post.post)
    const { isLoggedIn } = useSelector(state => state.auth)
    
    const handleEdit = () =>{
         history.push(`/blog/post/update/${post._id}`)
    }

    const handleDelete = () =>{
        dispatch(deletePostAction(post._id))
        history.push(`/posts/`);
    }

    useEffect(() => {
        dispatch(getPostByIDAction(id));
    }, [dispatch, getPostByIDAction])

    if (Object.keys(post).length === 0) return <div />;
    return (
        <Container className="mt-4 viewPost">
            <Row>
               <Col className ="text-center postTitle">
                    <h2>{ post.title }</h2>
               </Col> 
            </Row>
            <Row className="my-4" style={{ whiteSpace: "pre-wrap"}}>
                <Col>{ post.body }</Col>
            </Row>
            <Row className="d-flex flex-column font-italic footerStyle">
                <Col>Created by: {post.author}</Col>
                <Col>Date: { dayjs(post.createdAt).format('YYYY-MM-DD') } </Col>
            </Row>
            { isLoggedIn && ( 
                <Row className="mt-4">
                    <Col className="text-center">
                       
                        <button
                            className="btn mr-2 btn-outline-info"
                            onClick={handleEdit}>
                            Edit 
                        </button>

                           <button 
                                className="btn btn-danger"
                                onClick={handleDelete}>
                                    Delete
                            </button>
                    </Col>
                </Row>
            )}
        </Container>
    )
}

export default ViewPost
