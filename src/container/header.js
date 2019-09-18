import React from 'react';
import {
    Container,
    Col,
    Row,
    Nav,
    NavItem,
    NavLink,
} from "reactstrap";
import {Link} from "react-router-dom";



export default class Header extends React.Component {

        render() {
        return (

            <Container>
            <div>

                <div id= "yourAnchorTag">
                </div>


                <Nav tabs className={'text-center'}>
                    <NavItem>
                        <NavLink href="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/Register">Sign in</NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink href="/Products">Products</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/Aboutus">About us</NavLink>
                    </NavItem>


                    <NavItem>
                        <NavLink href="/Contactus">Contact us</NavLink>
                    </NavItem>






                    <NavItem className="right">
                        <div className="search">
                            <Link to="/Search">   <img className="searchImg" src={require ('../assets/images/search.png')} title={"search"} alt={"search"}/></Link>
                        </div>
                    </NavItem>




                </Nav>





            </div>
                <br/>

                <Row>
                    <Col sm="4"></Col>
                           <Col sm="4">
                           <Row>
                            <Link to="/Products/Laptops">
                           <Col sm="3"> <img className="logoHeader" src={require ('../assets/images/laptop.png')} title={"Laptops"} alt={"laptop"}/>
                           </Col></Link>
                            <Link to="/Products/Smartphones">
                            <Col sm="3"> <img className="logoHeader" src={require ('../assets/images/smartphone.png')} title={"Smartphones"} alt={"smartphone"}/>
                            </Col></Link>
                             <Link to="/Products/Tablets">
                            <Col sm="3"> <img className="logoHeader" src={require ('../assets/images/tablet.png')} title={"Tablets"} alt={"tablet"}/>
                            </Col></Link>
                             <Link to="/Products/Accessories">
                            <Col sm="3"> <img className="logoHeader" src={require ('../assets/images/access.png')} title={"Accessories"} alt={"accessories"}/>
                            </Col></Link>
                            </Row>

                           </Col>

                    <Col sm="4"></Col>

                </Row>
                <br/>

            </Container>

        )
    }


};