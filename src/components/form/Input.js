import { Form } from "react-bootstrap"
import  PropTypes  from "prop-types";


const Input = ({ name, label, type, placeholder, onChange, value, onBlur, text}) => {
    return (
        <Form.Group controlId={ text.module + name }>
            <Form.Label>{ text.label }</Form.Label>
            <Form.Control 
                name={ name }
                type={ type } 
                placeholder={ placeholder }
                onChange={ onChange }
                value={ value }
                onBlur={ onBlur } 
                isInvalid={ text.error ? true : false} />
            <Form.Control.Feedback type="invalid">
                { text.error }
            </Form.Control.Feedback>
        </Form.Group>
    )
};

// Input.propTypes = {
//     name: PropTypes.string.isRequired,
//     type: PropTypes.string.isRequired,
//     placeholder: PropTypes.string.isRequired,
//     value: PropTypes.string.isRequired,
//     onChange: PropTypes.string.isRequired,
//     onBlur: PropTypes.string.isRequired,
//     text: PropTypes.string.isRequired,
// }

export default Input
