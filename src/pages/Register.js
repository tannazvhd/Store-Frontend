import React from 'react';
import {Container, Row, Col, Button, Form, FormGroup, Label, Input, Spinner} from "reactstrap";
import '../assets/styles/styles.css';
import axios from 'axios';
import Header from "../container/header";
import Footer from "../container/footer";

class Register extends React.Component{

    state = {
        firstname: '',
        lastname:'',
        city:'',
        address:'',
        zip:'',
        number:'',
        mobile:'',
        email:'',
        password:'',
        msg:'',
        ms2:'',
        msg3:'',
        token:'',
        delId:'',
        editId:'',

        register : false,

        passlength: true,

        loading:false,



        isFname:true,
        isLname:true,
        isCity:true,
        isAddress:true,
        isZip:true,
        isNumber:true,
        isMobile:true,
        isEmail:true,
        isPassword:true,
        isId:true,


        complete:true,

        select:false,

        logEmail:'',
        logPass:'',
        logCompelete:true




    };


    selected= ()=>{
        this.setState({
            select:true
        })
};




    Add = () => {

if( this.state.select &&
    this.state.isFname &&
    this.state.isLname &&
    this.state.isCity &&
    this.state.isAddress &&
    this.state.isZip &&
    this.state.isNumber &&
    this.state.isMobile &&
    this.state.isEmail &&
    this.state.isPassword){

    this.setState({
        complete:true,
        loading:true
    });


    axios({
        url: 'http://localhost:8080/user',
        method: 'post',
        data: {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            city: this.state.city,
            address: this.state.address,
            zip: this.state.zip,
            number: this.state.number,
            mobile: this.state.mobile,
            email: this.state.email,
            password: this.state.password,

        }
    }).then(response => {

        this.setState({
            firstname: '',
            lastname:'',
            city:'',
            address:'',
            zip:'',
            number:'',
            mobile:'',
            email:'',
            password:'',
            passlength: true,
            register: true,
            msg : response.data.msg,
            loading:false

        })
    }).catch(error => {
        console.log(error);
        console.log('hier');

    })
}else {
    this.setState({
        complete :false,
    })
}



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

        if (this.state.city === '') {
            this.setState({
                isCity:false
            })
        }else {
            this.setState({
                isCity:true
            })
        };
        if (this.state.address === '') {
            this.setState({
                isAddress:false
            })
        }else {
            this.setState({
                isAddress:true
            })
        };
        if (this.state.zip === '') {
            this.setState({
                isZip:false
            })
        }else {
            this.setState({
                isZip:true
            })
        };
        if (this.state.number === '') {
            this.setState({
                isNumber:false
            })
        }else {
            this.setState({
                isNumber:true
            })
        };
        if (this.state.mobile === '') {
            this.setState({
                isMobile:false
            })
        }else {
            this.setState({
                isMobile:true
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
        if (this.state.password === '') {
            this.setState({
                isPassword:false
            })
        }else {
            this.setState({
                isPassword:true
            })
        };

    };

    Login = ()=>{

        if( this.state.logEmail !== '' &&
            this.state.logPass !== ''
          ){

            this.setState({
                logCompelete:true
            });


            axios({
                url: 'http://localhost:8080/user/login',
                method: 'post',
                data: {

                    email: this.state.logEmail,
                    password: this.state.logPass,

                }
            }).then(response => {


                this.setState({

                    msg : response.data.msg,
                    token : response.data.token,

                })
            }).catch(error => {
                console.log(error);

            })
        }else {
            this.setState({
                logCompelete :false,
            })
        }

        console.log(this.state.token)

};
    Logout= ()=>{

        this.setState({
            token: '',
            msg: ''
        })

    };



    Edit = ()=>{

        const id =this.state.editId;

            axios({
                url: `http://localhost:8080/user/${id}`,
                method: 'post',
                data: {

                    firstname: this.state.firstname,
                    lastname: this.state.lastname,
                    city: this.state.city,
                    address: this.state.address,
                    zip: this.state.zip,
                    number: this.state.number,
                    mobile: this.state.mobile,
                    email: this.state.email,
                    password: this.state.password,

                }
            }).then(response => {


                this.setState({

                    msg2 : response.data.msg,
                    editId :''

                })
            }).catch(error => {
                console.log(error);

            })


    };


    Delete = () =>{

       const id =this.state.delId;
        axios({
            url: `http://localhost:8080/user/${id}`,
            method: 'delete',
            headers : {

                auth : this.state.token

            }
        }).then(response => {


            this.setState({

                msg3: response.data.msg,
                delId: '',
                token:'',
                msg:'',
                msg2:''

            })
        }).catch(error => {
            console.log(error);
        })
    };



    render() {


        var msg = this.state.msg;

        return (

            <div className={'block'}>


                <br/>
                <Container>

                   <Header/>

                    <br/>

                    {
                        this.state.token === '' &&

                        <Row form>
                            <Col md={5.5}>

                                <br/>

                                <Form>

                                    <h5 className={"text-center text-white"}>Register</h5>
                                    <br/>


                                    <Row form>
                                        <Col md={6}>
                                            <FormGroup>

                                                <Row> { !this.state.isFname && <div className={'circle'}></div>}<Label htmlFor="FirstName" className={"text-white"}>  First Name</Label></Row>
                                                <Input type="text" name="FirstName" id="FirstName" onChange={e => {this.setState({firstname: e.target.value})}}/>
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Row> { !this.state.isLname && <div className={'circle'}></div>}<Label htmlFor="LastName" className={"text-white"}>Last Name</Label></Row>
                                                <Input type="text" name="LastName" id="LastName" onChange={e => {this.setState({lastname: e.target.value})}}/>
                                            </FormGroup>
                                        </Col>

                                    </Row>

                                    <Row form>
                                        <Col md={2}>
                                            <FormGroup>
                                                <Row> { !this.state.isCity && <div className={'circle'}></div>} <Label htmlFor="exampleCity" className={"text-white"}>City</Label></Row>
                                                <Input type="text" name="city" id="exampleCity" onChange={e => {this.setState({city: e.target.value})}}/>
                                            </FormGroup>
                                        </Col>
                                        <Col md={8}>
                                            <FormGroup>
                                                <Row> { !this.state.isAddress && <div className={'circle'}></div>}<Label htmlFor="exampleAddress" className={"text-white"}>Address</Label></Row>
                                                <Input type="text" name="Address" id="exampleAddress" onChange={e => {this.setState({address: e.target.value})}}/>
                                            </FormGroup>
                                        </Col>
                                        <Col md={2}>
                                            <FormGroup>
                                                <Row> { !this.state.isZip && <div className={'circle'}></div>}<Label htmlFor="exampleZip" className={"text-white"}>Zip</Label></Row>
                                                <Input type="text" name="zip" id="exampleZip" onChange={e => {this.setState({zip: e.target.value})}}/>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row form>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Row> { !this.state.isNumber && <div className={'circle'}></div>}  <Label htmlFor="exampleNumber" className={"text-white"}>Number</Label></Row>
                                                <Input type="text" name="Number" id="exampleNumber" onChange={e => {this.setState({number: e.target.value})}}/>
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Row> { !this.state.isMobile && <div className={'circle'}></div>}  <Label htmlFor="exampleMobile" className={"text-white"}>Mobilephone</Label></Row>
                                                <Input type="text" name="Mobile" id="exampleMobile" onChange={e => {this.setState({mobile: e.target.value})}}/>
                                            </FormGroup>
                                        </Col>

                                    </Row>

                                    <FormGroup>
                                        <Row> { !this.state.isEmail && <div className={'circle'}></div>} <Label htmlFor="Email" className={"text-white"}>Email</Label></Row>
                                        <Input type="email" name="email" id="Email" placeholder="pleas enter your Email" onChange={e => {this.setState({email: e.target.value})}} />
                                    </FormGroup>
                                    <FormGroup>


                                        <Row> { !this.state.isPassword && <div className={'circle'}></div>} <Label htmlFor="examplePassword" className={"text-white"}>Password</Label></Row>
                                        <Input type="password" name="password" id="examplePassword" placeholder="pleas enter your Password" onChange={
                                            e => {
                                                if (e.target.value.length >= 8) {
                                                    {
                                                        this.setState({
                                                                password: e.target.value,
                                                                passlength: true
                                                            }

                                                        )
                                                    }

                                                } else {
                                                    this.setState({passlength: false})


                                                }
                                            }}/>
                                        {
                                            !this.state.passlength && <Label htmlFor="examplePassword" className={"danger"}>password must contains of more than 8 characters</Label>
                                        }
                                    </FormGroup>

                                    <FormGroup check>
                                        <Label check className={'center-block text-white'}>
                                            <Input  type="checkbox" onClick={this.selected} /> {' '}
                                            Confirm all terms and conditions
                                        </Label>
                                    </FormGroup>
                                    <br/>
                                    <Button block color="info" onClick={this.Add}>Register</Button>
                                </Form><br/>

                                {
                                    this.state.msg !== '' && <label htmlFor="examplePassword" className={"danger"}> { msg }</label>

                                }
                                <br/>
                                {
                                    !this.state.select  && <Label htmlFor="examplePassword" className={"danger"}>please confirm turms and conditions</Label>


                                }<br/>
                                {
                                    !this.state.complete && <Label htmlFor="examplePassword" className={"danger"}>please fill all the blanks</Label>

                                }


                                {
                                    this.state.loading &&
                                    <div className="loading">
                                        <Spinner size="sm" type="grow" color="dark" />
                                        <Spinner size="sm" type="grow" color="dark" />
                                        <Spinner size="sm" type="grow" color="dark" />
                                    </div>
                                }


                            </Col>


                            <Col md={1}>
                                <div className="vl"></div>
                            </Col>



                            <Col md={5.5}>
                                <br/><br/><br/><br/>
                                <Form>

                                    <h5 className={"text-center text-white"}>Login</h5>
                                    <br/>


                                    <Row form>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label htmlFor="exampleEmail" hidden className={"text-white"}>Email</Label>
                                                <Input type="email" name="email" id="exampleEmail" placeholder="Email"  onChange={e => {this.setState({logEmail: e.target.value})}} />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label htmlFor="examplePassword2" hidden className={"text-white"}>Password</Label>
                                                <Input type="password" name="password2" id="examplePassword2" placeholder="Password" onChange={e => {this.setState({logPass: e.target.value})}} />
                                            </FormGroup>
                                        </Col>

                                    </Row>

                                    <Button block color="info"  onClick={this.Login}>Login</Button>
                                </Form>
                                <br/>
                                {
                                    !this.state.logCompelete && <Label htmlFor="examplePassword" className={"danger"}>please enter your email and password</Label>

                                }
                                {
                                    this.state.msg !== '' && <label htmlFor="examplePassword" className={"danger"}> { msg }</label>


                                }


                            </Col>

                        </Row>
                     }
                     {
                        this.state.token !== '' &&
                        <div>
                            <Col md={6}></Col>
                                <Col md={6}>
                                <h6 className={"text-center"}>Login successfully</h6>
                                <Button block color="info"  onClick={this.Logout}>Logout</Button>
                                </Col>
                                <br/>


                                <Row form>
                                    <Col md={5.5}>

                                        <br/>

                                        <Form>

                                            <h5 className={"text-center text-white"}>Edit Profile </h5>
                                            <br/>


                                            <Row form>
                                                <Col md={4}>
                                                    <FormGroup>

                                                        <Row> { !this.state.isId && <div className={'circle'}></div>}<Label htmlFor="id" className={"text-white"}>   User Id </Label></Row>
                                                        <Input type="text" name="id" id="id" onChange={e => {this.setState({editId: e.target.value})}}/>
                                                    </FormGroup>
                                                </Col>
                                                <Col md={4}>
                                                    <FormGroup>

                                                        <Row> { !this.state.isFname && <div className={'circle'}></div>}<Label htmlFor="FirstName" className={"text-white"}>  First Name</Label></Row>
                                                        <Input type="text" name="FirstName" id="FirstName" onChange={e => {this.setState({firstname: e.target.value})}}/>
                                                    </FormGroup>
                                                </Col>
                                                <Col md={4}>
                                                    <FormGroup>
                                                        <Row> { !this.state.isLname && <div className={'circle'}></div>}<Label htmlFor="LastName" className={"text-white"}>Last Name</Label></Row>
                                                        <Input type="text" name="LastName" id="LastName" onChange={e => {this.setState({lastname: e.target.value})}}/>
                                                    </FormGroup>
                                                </Col>

                                            </Row>

                                            <Row form>
                                                <Col md={2}>
                                                    <FormGroup>
                                                        <Row> { !this.state.isCity && <div className={'circle'}></div>} <Label htmlFor="exampleCity" className={"text-white"}>City</Label></Row>
                                                        <Input type="text" name="city" id="exampleCity" onChange={e => {this.setState({city: e.target.value})}}/>
                                                    </FormGroup>
                                                </Col>
                                                <Col md={8}>
                                                    <FormGroup>
                                                        <Row> { !this.state.isAddress && <div className={'circle'}></div>}<Label htmlFor="exampleAddress" className={"text-white"}>Address</Label></Row>
                                                        <Input type="text" name="Address" id="exampleAddress" onChange={e => {this.setState({address: e.target.value})}}/>
                                                    </FormGroup>
                                                </Col>
                                                <Col md={2}>
                                                    <FormGroup>
                                                        <Row> { !this.state.isZip && <div className={'circle'}></div>}<Label htmlFor="exampleZip" className={"text-white"}>Zip</Label></Row>
                                                        <Input type="text" name="zip" id="exampleZip" onChange={e => {this.setState({zip: e.target.value})}}/>
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row form>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Row> { !this.state.isNumber && <div className={'circle'}></div>}  <Label htmlFor="exampleNumber" className={"text-white"}>Number</Label></Row>
                                                        <Input type="text" name="Number" id="exampleNumber" onChange={e => {this.setState({number: e.target.value})}}/>
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Row> { !this.state.isMobile && <div className={'circle'}></div>}  <Label htmlFor="exampleMobile" className={"text-white"}>Mobilephone</Label></Row>
                                                        <Input type="text" name="Mobile" id="exampleMobile" onChange={e => {this.setState({mobile: e.target.value})}}/>
                                                    </FormGroup>
                                                </Col>

                                            </Row>

                                            <FormGroup>
                                                <Row> { !this.state.isEmail && <div className={'circle'}></div>} <Label htmlFor="Email" className={"text-white"}>Email</Label></Row>
                                                <Input type="email" name="email" id="Email" placeholder="pleas enter your Email" onChange={e => {this.setState({email: e.target.value})}} />
                                            </FormGroup>
                                            <FormGroup>


                                                <Row> { !this.state.isPassword && <div className={'circle'}></div>} <Label htmlFor="examplePassword" className={"text-white"}>Password</Label></Row>
                                                <Input type="password" name="password" id="examplePassword" placeholder="pleas enter your Password" onChange={
                                                    e => {
                                                        if (e.target.value.length >= 8) {
                                                            {
                                                                this.setState({
                                                                    password: e.target.value,
                                                                        passlength: true
                                                                    }

                                                                )
                                                            }

                                                        } else {
                                                            this.setState({passlength: false})


                                                        }
                                                    }}/>
                                                {
                                                    !this.state.passlength && <Label htmlFor="examplePassword" className={"danger"}>password must contains of more than 8 characters</Label>
                                                }
                                            </FormGroup>
                                            <br/>
                                            <Button block color="info" onClick={this.Edit}>Edit</Button>
                                        </Form><br/>

                                        {
                                            this.state.msg2 !== '' && <label htmlFor="examplePassword" className={"danger"}> { this.state.msg2 }</label>

                                        }
                                        <br/>



                                        {
                                            this.state.loading &&
                                            <div className="loading">
                                                <Spinner size="sm" type="grow" color="dark" />
                                                <Spinner size="sm" type="grow" color="dark" />
                                                <Spinner size="sm" type="grow" color="dark" />
                                            </div>
                                        }


                                    </Col>


                                    <Col md={1}>
                                        <div className="vl"></div>
                                    </Col>



                                    <Col md={5.5}>
                                        <br/><br/><br/><br/>
                                        <Form>
                                            <br/><br/><br/>
                                            <h5 className={"text-center text-white"}>Delete My User</h5>
                                            <br/>


                                            <Row form>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label htmlFor="exampleId" hidden className={"text-white"}> id </Label>
                                                        <Input type="email" name="id" id="exampleId" placeholder="id"  onChange={e => {this.setState({delId: e.target.value})}} />
                                                    </FormGroup>
                                                </Col>

                                            </Row>

                                            <Button block color="info"  onClick={this.Delete}>Delete</Button>
                                        </Form>
                                        <br/>
                                        {
                                            !this.state.logCompelete && <Label htmlFor="examplePassword" className={"danger"}>please enter the Id </Label>

                                        }
                                        {
                                            this.state.msg3 !== '' && <label htmlFor="examplePassword" className={"danger"}> { this.state.msg3 }</label>


                                        }


                                    </Col>

                                </Row>






                        </div>

                    }







                    <Footer/>

                </Container>
            </div>

        )
    }
}
export default Register ;





