// import { Button } from "bootstrap";
import { useEffect, useState } from "react";
// import { Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getPostByIDAction, updatePostAction } from "../actions/postAction";
// import Input from "../components/form/Input";
// import Textarea from "../components/form/Textarea";
import PostForm from "../components/posts/PostForm";

const UpdatePost = () => {
    const {id} = useParams();
    const history = useHistory();
    const dispatch = useDispatch()
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [author, setAuthor] = useState("");
    
    const post = useSelector(state => state.post.post)

    useEffect(() => {
        dispatch (getPostByIDAction(id));
    }, [getPostByIDAction])

    useEffect(() => {
        setTitle(post.title);
        setBody(post.body);
        setAuthor(post.author);
    }, [])

    const onChangeTitle = (e) =>{
        setTitle(e.target.value);
    }

    const onChangeBody = (e) =>{
        setBody(e.target.value);
    }
    const updatedPost = {
        title: title,
        body: body
    }

    const formSubmit =(e)=>{
        e.preventDefault();
        console.log(updatedPost)
         dispatch(updatePostAction(id, updatedPost, history))
         
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

export default UpdatePost
