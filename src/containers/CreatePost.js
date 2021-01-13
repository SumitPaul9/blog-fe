import { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap"
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createPostAction } from "../actions/postAction";
import PostForm from "../components/posts/PostForm";

const CreatePost = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [title, setTitle] = useState(" ")
    const [body, setBody] = useState(" ")
    const [author, setAuthor] = useState(" Sumit");

    const onChangeTitle = (e) =>{
        setTitle(e.target.value);
    }

    const onChangeBody = (e) =>{
        setBody(e.target.value);
    }

    const formSubmit =(e)=>{
        e.preventDefault();
        dispatch(createPostAction(title, body, author))
        history.push(`/posts/`);
    }
    return (
        <PostForm
            // post={post}
            onSubmit={formSubmit}
            onChangeTitle={onChangeTitle}
            onChangeBody={onChangeBody}
            title={ title }
            body={ body } />
    )
}
 
export default CreatePost
