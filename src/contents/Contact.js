import React, { Component } from 'react';
import {Form,Col,Button} from 'react-bootstrap'
import Social from '../components/Social';
import axios from 'axios';

// const [validated, setValidated] = useState(false);


class Contact extends Component {

    constructor(props){
        super(props);
        this.state={
            validated:false,
            firstName:'',
            lastName:'',
            email:'',
            contactNo:'',
            comment:''
        }
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChange = (e) => {
        /*
          Because we named the inputs to match their
          corresponding values in state, it's
          super easy to update the state
        */
        this.setState({ [e.target.name]: e.target.value });
      }

     handleSubmit = (event) => {    
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } 
        const newfeedback = {
            feedback_firstname: this.state.firstName,
            feedback_lastname: this.state.lastName,
            feedback_email: this.state.email,
            feedback_contactNo: this.state.contactNo,
            feedback_comment: this.state.comment
        };

        axios.post('http://localhost:4000/feedbacks/add', newfeedback)
        .then(res => console.log(res.data));
        
            // console.log('Thank you for submitting : ' + JSON.stringify(this.state));
            alert('Thank you for submitting : ' + JSON.stringify(this.state));    
            this.setState({
                    validated: true,
                    // firstName:'',
                    // lastName:'',
                    // email:'',
                    // contactNo:'',
                    // comment:''
                 });      
      };
      
        render() {
            const { firstName, lastName,email, contactNo,comment} = this.state;
            return (
            <div className="condiv">
                <h1 className="subtopic">Contact Me</h1>
                <h5>Email  :   dharmikvalani57@gmail.com</h5>
                <br></br>
                <Form  noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
                    <Form.Row>
                            <Form.Group as={Col} controlId="formfname" >
                                <Form.Label>First Name*</Form.Label>
                                <Form.Control  
                                    onChange={this.onChange}  
                                    value={firstName}
                                    name="firstName"
                                    type="text"
                                    placeholder="Enter FirstName" required/>

                                <Form.Control.Feedback  type="invalid">Please Enter Your FirstName</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col}  controlId="formlname">
                                <Form.Label>LastName</Form.Label>
                                <Form.Control  
                                    onChange={this.onChange}
                                    value={lastName}
                                    name="lastName"
                                    type="text"
                                    placeholder="Enter LastName" />
                            </Form.Group> 
                    </Form.Row>
                    <Form.Row>
                            <Form.Group as={Col} md="6" controlId="formemail">
                                    <Form.Label>Email*</Form.Label>
                                    <Form.Control 
                                        onChange={this.onChange}
                                        value={email}
                                        name="email"
                                        type="email"
                                        placeholder="Enter Email" required/>
                                    <Form.Control.Feedback type="invalid">Please Enter EmailId</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="formcontact">
                                    <Form.Label>Contact No</Form.Label>
                                    <Form.Control 
                                        onChange={this.onChange}
                                        value={contactNo}
                                        name="contactNo"
                                        type="text"
                                        placeholder="Enter Contact No"/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Group controlId="formcomment">
                            <Form.Label>Comment*</Form.Label>
                            <Form.Control 
                                onChange={this.onChange}
                                value={comment}
                                name='comment'
                                as="textarea"
                                rows="3" required/>
                            <Form.Control.Feedback type="invalid">Please Enter Comment </Form.Control.Feedback>
                     </Form.Group>
                    <Form.Check
                        type="checkbox"
                        className="my-1 mr-sm-2"
                        id="formcheck"
                        label="Remember me"
                        custom
                    />
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <Social/>
            </div>
            )
        }
}
export default Contact