import React from 'react';
import {Container, Row, Col, Button, Form, FormGroup, Label, Input, Spinner} from "reactstrap";
import axios from "axios";
import Header from "../container/header";
import Footer from "../container/footer";

export default class Contactus extends React.Component {

    state = {
        firstname: '',
        lastname:'',
        email:'',
        text:'',
        submitSuccess : false,
        isFname:true,
        isLname:true,
        isEmail:true,
        isText:true,
        complete:true,
        loading:false


    };




    submit = () => {


        // checking inputs are filled or not

        if (this.state.firstname === '') {
            this.setState({
                isFname:false
            })
        }else {
            this.setState({
                isFname:true
            })
        };

        if (this.state.lastname === '') {
            this.setState({
                isLname:false
            })
        }else {
            this.setState({
                isLname:true
            })
        };

        if (this.state.email === '') {
            this.setState({
                isEmail:false
            })
        }else {
            this.setState({
                isEmail:true
            })
        };
        if (this.state.text === '') {
            this.setState({
                isText:false
            })
        }else {
            this.setState({
                isText:true
            })
        };

        if(
            this.state.isFname &&
            this.state.isLname &&
            this.state.isEmail
        ) {

            this.setState({
                complete: true,
                loading:true
            });

            axios({
                url: 'http://localhost:8080/msg',
                method: 'post',
                data: {
                    firstname: this.state.firstname,
                    lastname: this.state.lastname,
                    email: this.state.email,
                    text: this.state.text
                }
            }).then(response => {
                this.setState({

                    firstname: '',
                    lastname: '',
                    email: '',
                    text: '',
                    loading:false,
                    isFname:true,
                    isLname:true,
                    isEmail:true,
                    isText:true,
                    complete:true,

                    submitSuccess: true
                });
            })
                .catch(error => {
                    console.log(error);

                });
        }else {
            this.setState({
                complete :false
            })
        }



    };


    render() {
        return (

            <div className={'block'}>
                <br/>
                <Container>

                    <Header/>

                    <br/><br/><br/>


                    <Row form>
                        <br/><br/>
                        <Col md={2}></Col>
                        <Col md={8}>


                        <Form>

                            <h5 className={"text-center text-white"}>Contact us</h5>
                            <br/>

                            <FormGroup row>
                                 <Label for="Name" sm={2}className={"text-white"} > { !this.state.isFname && <div className={'circle'}></div>}First Name</Label>
                                <Col sm={10}>
                                    <Input type="text" name="Name" id="Name" placeholder="Please enter your Name" onChange={e => {this.setState({firstname: e.target.value})}} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                               <Label for="Lname" sm={2} className={"text-white"}> { !this.state.isLname && <div className={'circle'}></div>} Last Name</Label>
                                <Col sm={10}>
                                    <Input type="text" name="Lname" id="Lname" placeholder="Please enter your Family Name" onChange={e => {this.setState({lastname: e.target.value})}}/>
                                </Col>
                           </FormGroup>

                        <FormGroup row>
                            <Label for="exampleEmail" sm={2} className={"text-white"}> { !this.state.isEmail && <div className={'circle'}></div>}Email</Label>
                            <Col sm={10}>
                                <Input type="email" name="email" id="exampleEmail" placeholder="Please enter your Email" onChange={e => {this.setState({email: e.target.value})}}/>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                             <Label for="exampleText" sm={2} className={"text-white"}>{ !this.state.isText && <div className={'circle'}></div>} Request</Label>
                            <Col sm={10}>
                                <Input type="textarea" name="text" id="exampleText"  onChange={e => {this.setState({text: e.target.value})}}/>
                            </Col>
                        </FormGroup>

                        <FormGroup check row>
                            <Col sm={{ size: 10, offset: 2 }}>
                                <Button block color="info" onClick={this.submit} >Submit</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                            <br/>
                            {

                                !this.state.complete && <Label for="examplePassword" className={"danger"}>please fill all the blanks</Label>

                            }
                            {
                                this.state.submitSuccess && <Label >your request has been submited successfully</Label>
                            }

                        </Col>
                        <Col md={2}></Col>

                    </Row>
                    <br/>

                    {
                        this.state.loading &&
                        <div className="loading">
                            <Spinner size="sm" type="grow" color="dark" />
                            <Spinner size="sm" type="grow" color="dark" />
                            <Spinner size="sm" type="grow" color="dark" />
                        </div>
                    }

                    <br/>

                    <Footer/>
                </Container>
            </div>
        );
    }
}



