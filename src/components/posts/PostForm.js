import { Button } from "bootstrap"
import { useState } from "react"
import { Col, Container, Form, Row } from "react-bootstrap"
import Input from "../form/Input"
import Textarea from "../form/Textarea"

const PostForm = ({ onSubmit, onChangeTitle, onChangeBody, title, body}) => {
   
    return (
        <Container>
         <Row>
            <Col className="mx-auto">
               <Form noValidate onSubmit={onSubmit} className="p-sm-3 p-xs-1">
                  <Input
                     name="title"
                     type="text"
                     placeholder="Enter Post Title"
                     value={title}
                     onChange={onChangeTitle}
                     // onBlur={onBlur}
                     text={{
                        module: "post",
                        label: "Title",
                        // error: errors.title
                     }}
                  />
                  <Textarea
                     name="body"
                     placeholder="Write your post here..."
                     value={body}
                     onChange={onChangeBody}
                     // onBlur={onBlur}
                     text={{
                        module: "post",
                        label: "Description",
                        // error: errors.body
                     }}
                  />
                  <button
                     variant="outline-info"
                     type="submit"
                     // // disabled={loading}
                     className="mt-3"
                  >
                     Submit
                  </button>
               </Form>
            </Col>
         </Row>
      </Container>
    )
}

export default PostForm
