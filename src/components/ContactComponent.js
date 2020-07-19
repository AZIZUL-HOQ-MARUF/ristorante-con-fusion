import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, Col, FormFeedback } from 'reactstrap'
import { Link } from 'react-router-dom'
class Contact extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,
            contactType: 'Tel.',
            message: '',
            touched: {
                firstname: false,
                lastname: false,
                telnum: false,
                email: false,

            }
        }
        this.handleBlur = this.handleBlur.bind(this)
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
    handleSubmit(event) {
        console.log(JSON.parse(JSON.stringify(this.state)));
        event.preventDefault();
    }
    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        })
        console.log(this.state)
    }
    validate(firstname, lastname, telnum, email) {
        let error = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
        };
        if (this.state.touched.firstname && firstname.length < 3) {
            error.firstname = 'First Name should be >= 3 characters'
        } else if (this.state.touched.firstname && firstname.length > 10) {
            error.firstname = 'First Name should be <= 10 characters'
        }

        if (this.state.touched.lastname && lastname.length < 3) {
            error.lastname = 'Last Name should be >= 3 characters'
        } else if (this.state.touched.lastname && lastname.length > 10) {
            error.lastname = 'Last Name should be <= 10 characters'
        }

        const reg = /^\d+$/;
        if (this.state.touched.telnum && !reg.test(telnum)) {
            error.telnum = 'Tel. Number should contain only numbers'
        }
        if (this.state.touched.email && email.split('').filter(e => e === '@').length !== 1)
            error.email = 'Email should contain a @'
        return error;
    }
    render() {
        const errors = this.validate(this.state.firstname, this.state.lastname, this.state.telnum, this.state.email,)
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem> <Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Contact Us</h3>
                        <hr />
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                            Trunk Road<br />
		                Feni Sadar, Feni<br />
		                Bangladesh<br />
                            <i className="fa fa-phone fa-lg"></i>: 01850014536<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group"> 
                            <button type="button" className="btn btn-primary" ><i className="fa fa-phone"></i> Call</button>
                            <button type="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</button>
                            <button type="button" className="btn btn-success" ><i className="fa fa-envelope-o"></i> Email</button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h3>Send us your Feedback</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <Form onSubmit={(e) => this.handleSubmit(e)}>
                            <FormGroup row>
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="firstname" name="firstname" placeholder="First Name"
                                        value={this.state.firstname}
                                        valid={errors.firstname === ''}
                                        invalid={errors.firstname !== ''}
                                        onChange={(e) => this.handleInputChange(e)}
                                        onBlur={this.handleBlur('firstname')} />
                                    <FormFeedback>{errors.firstname}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="lastname" name="lastname" placeholder="Last Name"
                                        value={this.state.lastname}
                                        valid={errors.lastname === ''}
                                        invalid={errors.lastname !== ''}
                                        onChange={(e) => this.handleInputChange(e)}
                                        onBlur={this.handleBlur('lastname')} />
                                    <FormFeedback>{errors.lastname}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Input type="tel" id="telnum" name="telnum" placeholder="Contact Tel."
                                        value={this.state.telnum}
                                        valid={errors.telnum === ''}
                                        invalid={errors.telnum !== ''}
                                        onChange={(e) => this.handleInputChange(e)}
                                        onBlur={this.handleBlur('telnum')} />
                                    <FormFeedback>{errors.telnum}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type="email" id="email" name="email" placeholder="Email"
                                        value={this.state.email}
                                        valid={errors.email === ''}
                                        invalid={errors.email !== ''}
                                        onChange={(e) => this.handleInputChange(e)}
                                        onBlur={this.handleBlur('email')} />
                                    <FormFeedback>{errors.email}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 6, offset: 2 }} >
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" name="agree" checked={this.state.agree}
                                                onChange={(e) => this.handleInputChange(e)} /> {' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{ size: 3, offset: 1 }} >
                                    <Input type="select" name="contactType" value={this.state.contactType}
                                        onChange={(e) => this.handleInputChange(e)}>
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Input type="textarea" id="message" name="message"
                                        rows="12"
                                        value={this.state.message} onChange={(e) => this.handleInputChange(e)} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;