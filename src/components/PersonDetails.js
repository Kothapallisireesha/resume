import React, { useState } from 'react'
import { Form, InputGroup } from 'react-bootstrap';
import { ArrowRight, } from 'react-bootstrap-icons';
import { withRouter } from 'react-router-dom';
import PhoneIcon from '@material-ui/icons/Phone';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function PersonDetails(props) {
    const [personDetails, setpersonDetails] = useState({
        firstName: '',
        email: '',
        lastName: ''
    })
    //console.log('person', personDetails);
    const [firstNameError, setfirstNameError] = useState("")
    const validateFirstName = () => {
        if (personDetails.firstName) {
            let regex = /^[a-zA-Z ]{2,30}$/;
            if (regex.test(personDetails.firstName)) {
                setfirstNameError("");
                return true;
            }
            else {
                setfirstNameError("enter valid name");
            }
        }
        else {
            setfirstNameError("enter name");
        }
        return false;
    };

    const [lastNameError, setlastNameError] = useState("")
    const validatelastName = () => {
        if (personDetails.lastName) {
            let regex = /^[a-zA-Z ]{2,30}$/;
            if (regex.test(personDetails.lastName)) {
                setlastNameError("");
                return true;
            }
            else {
                setlastNameError("enter valid name");
            }
        }
        else {
            setlastNameError("enter last name");
        }
        return false;
    };

    const [emailError, setemailError] = useState("")
    const validateEmail = () => {
        if (personDetails.email) {
            let regex = /^\S+@\S+$/;
            if (regex.test(personDetails.email)) {
                setemailError("");
                return true;
            }
            else {
                setemailError("enter valid email-Id");
            }
        }
        else {
            setemailError("enter email-ID");
        }
        return false;
    };
    let updateUserData = (event) => {
        event.preventDefault();
        setpersonDetails({
            ...personDetails,
            [event.target.name]: event.target.value,
        })
    }

    let handleSubmit = (event) => {
        event.preventDefault();
    }

    let navToEducation = (event) => {
        event.preventDefault();

        validateFirstName();
        validateEmail();
        validatelastName();
        if (validateFirstName() && validateEmail() && validatelastName()) {
            console.log('props', props);
            props.history.push('/educationDetails')
        }


    }
    return (
        <div>
            <h2 >Personal details</h2>
            <hr />
            <Form>
                <div className="row">
                    <div class="col-md-6">
                    <Form.Group>
                            <span className='input-group'>
                                <Form.Control type="text"
                                   
                                    placeholder="First Name*"
                                    name='firstName'
                                    value={personDetails.firstName}
                                    onChange={(event) => { updateUserData(event) }}
                                />
                               
                            </span>
                            {firstNameError && <div className="errMsg" style={{ color: "red" }}>{firstNameError}  </div>}


                        </Form.Group>
                        
                               <br/>
                    
                        
                        <Form.Group>
                            <span className='input-group'>
                                <Form.Control type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={personDetails.email}
                                    onChange={(event) => { updateUserData(event) }}

                                />
                                <i class="bi bi-envelope-fill"></i>
                            </span>
                            {emailError && <div className="errMsg" style={{color:"red"}}>{emailError}</div>}

                        </Form.Group>
                        <br/>
                        <Form.Group className="mb-3">
                            <span className="input-group ">
                                <Form.Control type="text" placeholder="Your Website " />
                                <i className="bi bi-globe input-group-addon mt-2"></i>
                            </span>
                        </Form.Group>
                        <Form.Group className="mb-2">
                            <span className="input-group ">
                                <Form.Control type="text" placeholder="LinkedIn" />
                                <i className="bi bi-linkedin input-group-addon mt-2"></i>
                            </span>
                        </Form.Group>
                        <Form.Group className="mb-3">
                                <span className="input-group ">
                                <Form.Control type="text" placeholder="Facebook" />
                                <i class="bi bi-facebook"></i>
                                    </span>
                                </Form.Group>

                        <div className='back'>
                            <button type="button" className="btn btn-primary" disabled>Back</button>
                        </div>
                    </div>
                    <div class="col-md-6">
                   
                    <Form.Group className="mb-3">
                            <span className="input-group ">
                                <Form.Control type="text"
                                   
                                   placeholder="Last Name*"
                                name="lastName"
                                value={personDetails.lastName}
                                onChange={(event) => { updateUserData(event) }}
                            />
                               
                            </span>
                            {lastNameError && <div className="errMsg" style={{ color: "red" }}>{lastNameError}</div>}


                        </Form.Group>
                      
                            
                        
                        <Form.Group className="mb-3">
                            <span className="input-group ">
                                <Form.Control type="text" placeholder="Phone" />
                                <i class="bi bi-phone-fill"></i>
                            </span>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <span className="input-group ">
                                <Form.Control type="text" placeholder="GitHub " />
                                <i className="bi bi-github input-group-addon mt-2"></i>
                            </span>
                        </Form.Group>
                        <Form.Group className="mb-3">
                                <span className="input-group ">
                                <Form.Control type="text" placeholder="Twitter" />
                                        <i className="bi bi-twitter input-group-addon mt-2"></i>
                                    </span>
                                </Form.Group>
                           
                                <Form.Group className="mb-3">
                                <span className="input-group ">
                                <Form.Control type="text" placeholder="Instagram" />
                                        <i className="bi bi-instagram input-group-addon mt-2"></i>
                                    </span>
                                    
                                </Form.Group>

                        <div className='next'>

                            <button type="submit" className="btn btn-primary" onClick={navToEducation} onSubmit={handleSubmit}>Next</button>

                        </div>
                    </div>
                </div>
            </Form>
        </div>
    )
}

export default withRouter(PersonDetails)
