import React from 'react';
import {Container, Row, Col, Button, Form, FormGroup, Label, Input} from "reactstrap";
import '../assets/styles/styles.css';
import axios from 'axios';
import Header from "../container/header";
import Footer from "../container/footer";



class Admin extends React.Component{

    state = {

        title:'',
        price:'',
        description:'',
        image:'',
        id:'',


        msg:'',
        msg2:'',
        msg3:'',
        msg4:'',
        token:'',

        loading:false,


        complete:true,

        logUsername:'',
        logPass:'',
        logCompelete:true,

        status: false




    };




     Login = ()=>{

         if( this.state.logUsername !== '' &&
            this.state.logPass !== ''
        ){

            this.setState({
                logCompelete:true
            });

             // console.log(this.state.logUsername);
             // console.log(this.state.logPass);


            axios({
                url: 'http://localhost:8080/admin/login',
                method: 'post',
                data: {

                    username: this.state.logUsername,
                    password: this.state.logPass,

                }
            }).then(response => {


                this.setState({

                    logUsername : '',
                    logPass : '',
                    msg : response.data.msg,
                    token : response.data.token,
                    status : response.data.status



                });

                // console.log(this.state.status);
            }).catch(error => {
                console.log(error);

            })
        }else {
            this.setState({
                logCompelete :false,
            })
        }

    };

    Logout= ()=>{

        this.setState({
            token: '',
            msg: ''
        })

    };

     //Add Products

     AddLaptop = ()=>{

         if( this.state.title !== '' &&
             this.state.description !== '' &&
             this.state.image !==''
         ){

             axios({
                 url: 'http://localhost:8080/products/laptops/add',
                 method: 'post',
                 data: {

                     title: this.state.title,
                     image: this.state.image,
                     description: this.state.description,
                     price: this.state.price


                 }
             }).then(response => {


                 this.setState({

                     msg : response.data.msg,

                 })
             }).catch(error => {
                 console.log(error);

             })



         }

     };


    AddSmartphone = ()=>{
        if( this.state.title !== '' &&
            this.state.description !== '' &&
            this.state.image !==''
        ){

            axios({
                url: 'http://localhost:8080/products/smartphones/add',
                method: 'post',
                data: {

                    title: this.state.title,
                    image: this.state.image,
                    description: this.state.description,
                    price: this.state.price


                }
            }).then(response => {


                this.setState({

                    msg2 : response.data.msg,

                })
            }).catch(error => {
                console.log(error);

            })
        }
    };


    AddTablet = ()=>{
        if( this.state.title !== '' &&
            this.state.description !== '' &&
            this.state.image !==''
        ){

            axios({
                url: 'http://localhost:8080/products/tablets/add',
                method: 'post',
                data: {

                    title: this.state.title,
                    image: this.state.image,
                    description: this.state.description,
                    price: this.state.price


                }
            }).then(response => {


                this.setState({

                    msg3 : response.data.msg,

                })
            }).catch(error => {
                console.log(error);

            })
        }
    };


    AddAccess = ()=>{
        if( this.state.title !== '' &&
            this.state.description !== '' &&
            this.state.image !==''
        ){

            axios({
                url: 'http://localhost:8080/products/accessories/add',
                method: 'post',
                data: {

                    title: this.state.title,
                    image: this.state.image,
                    description: this.state.description,
                    price: this.state.price


                }
            }).then(response => {


                this.setState({

                    msg4 : response.data.msg,

                })
            }).catch(error => {
                console.log(error);

            })
        }
    };

    //Remove Products


    RemoveLaptop = ()=>{

        if( this.state.id !== ''

        ){

            axios({
                url: 'http://localhost:8080/products/laptops/remove',
                method: 'post',
                data: {

                    id: this.state.id

                }
            }).then(response => {


                this.setState({

                    msg : response.data.msg,
                    id :''

                })
            }).catch(error => {
                console.log(error);

            })
        }

    };

    RemoveSmartphone  = ()=>{

        if(
            this.state.id !== ''

        ){

            axios({
                url: 'http://localhost:8080/products/smartphones/remove',
                method: 'post',
                data: {

                    id: this.state.id

                }
            }).then(response => {


                this.setState({

                    msg2 : response.data.msg,
                    id :''

                })
            }).catch(error => {
                console.log(error);

            })
        }

    };
    RemoveTablet = ()=>{

        if(
            this.state.id !== ''

        ){

            axios({
                url: 'http://localhost:8080/products/tablets/remove',
                method: 'post',
                data: {

                    id: this.state.id

                }
            }).then(response => {


                this.setState({

                    msg3 : response.data.msg,
                    id :''

                })
            }).catch(error => {
                console.log(error);

            })
        }

    };
    RemoveAccess = ()=>{

        if(
            this.state.id !== ''

        ){

            axios({
                url: 'http://localhost:8080/products/accessories/remove',
                method: 'post',
                data: {

                    id: this.state.id

                }
            }).then(response => {


                this.setState({

                    msg4 : response.data.msg,
                    id :''

                })
            }).catch(error => {
                console.log(error);

            })
        }

    };





    render() {

        return (

            <div className={'block'}>


                <br/>
                <Container>

                    <Header/>

                    <br/>

                    {
                        this.state.msg && <Label for="examplePassword" className={"danger"}> { this.state.msg}</Label>
                    }



                    {
                        this.state.token ==='' &&

                        <Row form>
                            <Col md={3}></Col>
                            <Col md={6}>
                                <br/><br/><br/><br/>
                                <Form>

                                    <h5 className={"text-center text-white"}>Admin Login</h5>
                                    <br/>


                                    <Row form>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="exampleUsername" hidden className={"text-white"}>Username</Label>
                                                <Input type="username" name="username" id="exampleUsername" placeholder="Username"  onChange={e => {this.setState({logUsername: e.target.value})}} />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="examplePassword2" hidden className={"text-white"}>Password</Label>
                                                <Input type="password" name="password2" id="examplePassword2" placeholder="Password" onChange={e => {this.setState({logPass: e.target.value})}} />
                                            </FormGroup>
                                        </Col>

                                    </Row>

                                    <Button block color="info"  onClick={this.Login}>Login</Button>
                                </Form>
                                <br/>{
                                !this.state.status && <Label for="examplePassword" className={"danger"}> { this.state.msg}</Label>
                            }
                                {

                                    !this.state.logCompelete && <Label for="examplePassword" className={"danger"}>please enter your username and password</Label>

                                }

                            </Col>
                            <Col md={3}></Col>


                        </Row>
                    }
                    <br/>
                    <br/>
                    <br/>

                    {
                        this.state.token !=='' &&


                            <div>

                                <Col md={6}></Col>
                                <Col md={6}>
                                    <h6> Welcome Admin   , you can organize your products in this page  </h6>
                                    <br/>
                                    <Button block color="info"  onClick={this.Logout}>Logout</Button>
                                </Col>

                                <br/><br/><br/>

                                <div>

                                    <h5 className={"text-white  "} >Laptops</h5>
                                    <br/>


                                    <Row>
                                        <Col md={6}>
                                            <Row>
                                                <h6 className={"text-center text-white"}> Add </h6>
                                                <br/>
                                            </Row>

                                            <Row>


                                                <Form>

                                                    <br/>


                                                    <Row form>

                                                        <Col md={6}>
                                                            <FormGroup>
                                                                <Row> { !this.state.isTitle && <div className={'circle'}></div>}<Label for="exampleTitle" className={"text-white"}> Title </Label></Row>
                                                                <Input type="text" name="Title" id="exampleTitle" onChange={e => {this.setState({title: e.target.value})}}/>
                                                            </FormGroup>
                                                        </Col>
                                                        <Col md={6}>


                                                            <FormGroup>
                                                                <Row> { !this.state.isPrice && <div className={'circle'}></div>} <Label for="examplePrice" className={"text-white"}> Price </Label></Row>
                                                                <Input type="text" name="price" id="examplePrice" onChange={e => {this.setState({price: e.target.value})}}/>
                                                            </FormGroup>

                                                        </Col>

                                                    </Row>

                                                    <Row form>
                                                        <Col md={12}>
                                                            <FormGroup>

                                                                <Row> { !this.state.isImage && <div className={'circle'}></div>}<Label for="exampleImage" className={"text-white"}>  Image Address </Label></Row>
                                                                <Input type="text" name="Image" id="exampleImage" onChange={e => {this.setState({image: e.target.value})}}/>
                                                            </FormGroup>
                                                        </Col>
                                                    </Row>
                                                    <Row form>

                                                        <Col md={12}>
                                                            <FormGroup>
                                                                <Row> { !this.state.isDescription && <div className={'circle'}></div>}<Label for="exampleDescription" className={"text-white"}> Description </Label></Row>
                                                                <Input type="text" name="Description" id="exampleDescription" onChange={e => {this.setState({description: e.target.value})}}/>
                                                            </FormGroup>
                                                        </Col>
                                                    </Row>
                                                    <br/>
                                                    <Button block color="info" onClick={this.AddLaptop}>Add</Button>
                                                </Form>


                                            </Row>
                                        </Col>



                                        <Col md={6}>
                                            <Row>
                                                <h6 className={"text-center text-white"}> Remove </h6>
                                                <br/>
                                            </Row>

                                            <Row>


                                                <Form>

                                                    <br/>


                                                    <Row form>

                                                        <Col md={12}>
                                                            <FormGroup>
                                                                <Row> { !this.state.isId && <div className={'circle'}></div>}<Label for="exampleId" className={"text-white"}> Id </Label></Row>
                                                                <Input type="text" name="Id" id="exampleId" onChange={e => {this.setState({id: e.target.value})}}/>
                                                            </FormGroup>
                                                            <Button block color="info" onClick={this.RemoveLaptop}>Remove</Button>

                                                        </Col>
                                                    </Row>
                                                </Form>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <br/>
                                    <br/>
                                    <Row><div className={"devider"}></div></Row>
                                    <br/>
                                    <br/>
                                    {
                                        this.state.msg2 && <Label for="examplePassword" className={"danger"}> { this.state.msg2}</Label>
                                    }
                                </div>

                                <div>


                                    <h5 className={"text-white  "} >Smartphones</h5>
                                    <br/>


                                    <Row>
                                        <Col md={6}>
                                            <Row>
                                                <h6 className={"text-center text-white"}> Add </h6>
                                                <br/>
                                            </Row>

                                            <Row>


                                                <Form>

                                                    <br/>


                                                    <Row form>

                                                        <Col md={6}>
                                                            <FormGroup>
                                                                <Row> { !this.state.isTitle && <div className={'circle'}></div>}<Label for="exampleTitle" className={"text-white"}> Title </Label></Row>
                                                                <Input type="text" name="Title" id="exampleTitle" onChange={e => {this.setState({title: e.target.value})}}/>
                                                            </FormGroup>
                                                        </Col>
                                                        <Col md={6}>


                                                            <FormGroup>
                                                                <Row> { !this.state.isPrice && <div className={'circle'}></div>} <Label for="examplePrice" className={"text-white"}> Price </Label></Row>
                                                                <Input type="text" name="price" id="examplePrice" onChange={e => {this.setState({price: e.target.value})}}/>
                                                            </FormGroup>

                                                        </Col>

                                                    </Row>

                                                    <Row form>
                                                        <Col md={12}>
                                                            <FormGroup>

                                                                <Row> { !this.state.isImage && <div className={'circle'}></div>}<Label for="exampleImage" className={"text-white"}>  Image Address </Label></Row>
                                                                <Input type="text" name="Image" id="exampleImage" onChange={e => {this.setState({image: e.target.value})}}/>
                                                            </FormGroup>
                                                        </Col>
                                                    </Row>
                                                    <Row form>

                                                        <Col md={12}>
                                                            <FormGroup>
                                                                <Row> { !this.state.isDescription && <div className={'circle'}></div>}<Label for="exampleDescription" className={"text-white"}> Description </Label></Row>
                                                                <Input type="text" name="Description" id="exampleDescription" onChange={e => {this.setState({description: e.target.value})}}/>
                                                            </FormGroup>
                                                        </Col>
                                                    </Row>
                                                    <br/>
                                                    <Button block color="info" onClick={this.AddSmartphone}>Add</Button>
                                                </Form>


                                            </Row>
                                        </Col>



                                        <Col md={6}>
                                            <Row>
                                                <h6 className={"text-center text-white"}> Remove </h6>
                                                <br/>
                                            </Row>

                                            <Row>


                                                <Form>

                                                    <br/>


                                                    <Row form>

                                                        <Col md={12}>
                                                            <FormGroup>
                                                                <Row> { !this.state.isId && <div className={'circle'}></div>}<Label for="exampleId" className={"text-white"}> Id </Label></Row>
                                                                <Input type="text" name="Id" id="exampleId" onChange={e => {this.setState({id: e.target.value})}}/>
                                                            </FormGroup>
                                                            <Button block color="info" onClick={this.RemoveSmartphone}>Remove</Button>

                                                        </Col>
                                                    </Row>
                                                </Form>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <br/>
                                    <br/>
                                    <Row><div className={"devider"}></div></Row>
                                    <br/>
                                    <br/>
                                    {
                                        this.state.msg3 && <Label for="examplePassword" className={"danger"}> { this.state.msg3}</Label>
                                    }
                                </div>


                                <div>

                                    <h5 className={"text-white  "} >Tablets</h5>
                                    <br/>


                                    <Row>
                                        <Col md={6}>
                                            <Row>
                                                <h6 className={"text-center text-white"}> Add </h6>
                                                <br/>
                                            </Row>

                                            <Row>


                                                <Form>

                                                    <br/>


                                                    <Row form>

                                                        <Col md={6}>
                                                            <FormGroup>
                                                                <Row> { !this.state.isTitle && <div className={'circle'}></div>}<Label for="exampleTitle" className={"text-white"}> Title </Label></Row>
                                                                <Input type="text" name="Title" id="exampleTitle" onChange={e => {this.setState({title: e.target.value})}}/>
                                                            </FormGroup>
                                                        </Col>
                                                        <Col md={6}>


                                                            <FormGroup>
                                                                <Row> { !this.state.isPrice && <div className={'circle'}></div>} <Label for="examplePrice" className={"text-white"}> Price </Label></Row>
                                                                <Input type="text" name="price" id="examplePrice" onChange={e => {this.setState({price: e.target.value})}}/>
                                                            </FormGroup>

                                                        </Col>

                                                    </Row>

                                                    <Row form>
                                                        <Col md={12}>
                                                            <FormGroup>

                                                                <Row> { !this.state.isImage && <div className={'circle'}></div>}<Label for="exampleImage" className={"text-white"}>  Image Address </Label></Row>
                                                                <Input type="text" name="Image" id="exampleImage" onChange={e => {this.setState({image: e.target.value})}}/>
                                                            </FormGroup>
                                                        </Col>
                                                    </Row>
                                                    <Row form>

                                                        <Col md={12}>
                                                            <FormGroup>
                                                                <Row> { !this.state.isDescription && <div className={'circle'}></div>}<Label for="exampleDescription" className={"text-white"}> Description </Label></Row>
                                                                <Input type="text" name="Description" id="exampleDescription" onChange={e => {this.setState({description: e.target.value})}}/>
                                                            </FormGroup>
                                                        </Col>
                                                    </Row>
                                                    <br/>
                                                    <Button block color="info" onClick={this.AddTablet}>Add</Button>
                                                </Form>


                                            </Row>
                                        </Col>



                                        <Col md={6}>
                                            <Row>
                                                <h6 className={"text-center text-white"}> Remove </h6>
                                                <br/>
                                            </Row>

                                            <Row>


                                                <Form>

                                                    <br/>


                                                    <Row form>

                                                        <Col md={12}>
                                                            <FormGroup>
                                                                <Row> { !this.state.isId && <div className={'circle'}></div>}<Label for="exampleId" className={"text-white"}> Id </Label></Row>
                                                                <Input type="text" name="Id" id="exampleId" onChange={e => {this.setState({id: e.target.value})}}/>
                                                            </FormGroup>
                                                            <Button block color="info" onClick={this.RemoveTablet}>Remove</Button>

                                                        </Col>
                                                    </Row>
                                                </Form>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <br/>
                                    <br/>
                                    <Row><div className={"devider"}></div></Row>
                                    <br/>
                                    <br/>
                                    {
                                        this.state.msg4 && <Label for="examplePassword" className={"danger"}> { this.state.msg4}</Label>
                                    }
                                </div>

                                <div>

                                    <h5 className={"text-white  "} >Accessories</h5>
                                    <br/>


                                    <Row>
                                        <Col md={6}>
                                            <Row>
                                                <h6 className={"text-center text-white"}> Add </h6>
                                                <br/>
                                            </Row>

                                            <Row>


                                                <Form>

                                                    <br/>


                                                    <Row form>

                                                        <Col md={6}>
                                                            <FormGroup>
                                                                <Row> { !this.state.isTitle && <div className={'circle'}></div>}<Label for="exampleTitle" className={"text-white"}> Title </Label></Row>
                                                                <Input type="text" name="Title" id="exampleTitle" onChange={e => {this.setState({title: e.target.value})}}/>
                                                            </FormGroup>
                                                        </Col>
                                                        <Col md={6}>


                                                            <FormGroup>
                                                                <Row> { !this.state.isPrice && <div className={'circle'}></div>} <Label for="examplePrice" className={"text-white"}> Price </Label></Row>
                                                                <Input type="text" name="price" id="examplePrice" onChange={e => {this.setState({price: e.target.value})}}/>
                                                            </FormGroup>

                                                        </Col>

                                                    </Row>

                                                    <Row form>
                                                        <Col md={12}>
                                                            <FormGroup>

                                                                <Row> { !this.state.isImage && <div className={'circle'}></div>}<Label for="exampleImage" className={"text-white"}>  Image Address </Label></Row>
                                                                <Input type="text" name="Image" id="exampleImage" onChange={e => {this.setState({image: e.target.value})}}/>
                                                            </FormGroup>
                                                        </Col>
                                                    </Row>
                                                    <Row form>

                                                        <Col md={12}>
                                                            <FormGroup>
                                                                <Row> { !this.state.isDescription && <div className={'circle'}></div>}<Label for="exampleDescription" className={"text-white"}> Description </Label></Row>
                                                                <Input type="text" name="Description" id="exampleDescription" onChange={e => {this.setState({description: e.target.value})}}/>
                                                            </FormGroup>
                                                        </Col>
                                                    </Row>
                                                    <br/>
                                                    <Button block color="info" onClick={this.AddAccess}>Add</Button>
                                                </Form>


                                            </Row>
                                        </Col>



                                        <Col md={6}>
                                            <Row>
                                                <h6 className={"text-center text-white"}> Remove </h6>
                                                <br/>
                                            </Row>

                                            <Row>


                                                <Form>

                                                    <br/>


                                                    <Row form>

                                                        <Col md={12}>
                                                            <FormGroup>
                                                                <Row> { !this.state.isId && <div className={'circle'}></div>}<Label for="exampleId" className={"text-white"}> Id </Label></Row>
                                                                <Input type="text" name="Id" id="exampleId" onChange={e => {this.setState({id: e.target.value})}}/>
                                                            </FormGroup>
                                                            <Button block color="info" onClick={this.RemoveAccess}>Remove</Button>

                                                        </Col>
                                                    </Row>
                                                </Form>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <br/>
                                    <br/>
                                    <Row><div className={"devider"}></div></Row>
                                    <br/>
                                    <br/>
                                </div>

                            </div>



                    }




                    <Footer/>

                </Container>
            </div>

        )
    }
}
export default Admin ;





