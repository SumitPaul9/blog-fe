import { Card } from "react-bootstrap";
import dayjs from 'dayjs';
// import './Post.css'

const Post = ({ post }) => {
    return (
        <Card className="deckStyle" style={{ border: "none" }}>
            <Card.Body className="postCover">
                <Card.Title className="text-center p-5">{post.title}</Card.Title>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Posted on: {dayjs(post.createdAt).format('DD-MM-YYYY')}</small>
            </Card.Footer>
        </Card>
    )
}

export default Post
