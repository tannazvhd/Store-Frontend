import React from 'react';
import {Container, Row, Col, Card, CardImg} from "reactstrap";
import {Link} from "react-router-dom";
import Header from "../container/header";
import Footer from "../container/footer";

export default class Products extends React.Component {


    render() {
        return (

            <div className={'block'}>
                <br/>
                <Container>

                    <Header/>

                    <br/>
                    <br/>
                    <br/>

                    <Row>
                        <Col sm="6">
                            <Card>
                                <div className="container1">
                                    <Link to="/Products/Laptops"> <CardImg className="cardimg" top src={require ('../assets/images/mac1.jpg')} alt="Card image cap" />
                                    <div className="overlay1">
                                        <div className="text text-center">Laptops</div>
                                    </div></Link>
                                </div>
                            </Card>
                        </Col>

                        <Col sm="6">
                            <Card>
                                <div className="container2">
                                    <Link to="/Products/Smartphones"> <CardImg className="cardimg" top src={require ('../assets/images/iphone1.jpg')} alt="Card image cap" />
                                    <div className="overlay2">
                                        <div className="text text-center">SmartPhones</div>
                                    </div></Link>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col sm="6">
                            <Card>
                                <div className="container1">
                                    <Link to="/Products/Tablets"><CardImg className="cardimg" top src={require ('../assets/images/tablet1.jpeg')} alt="Card image cap" />
                                    <div className="overlay1">
                                        <div className="text text-center">Tablets</div>
                                    </div></Link>
                                </div>

                            </Card>
                        </Col>

                        <Col sm="6">
                            <Card>
                                <div className="container2">
                                    <Link to="/Products/Accessories"> <CardImg className="cardimg" top src={require ('../assets/images/access1.jpg')} alt="Card image cap" />
                                    <div className="overlay2">
                                        <div className="text text-center">Accessories</div>
                                    </div></Link>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                    <br/>


                    <Footer/>

                </Container>
            </div>
        );
    }
}



