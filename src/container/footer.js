import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { UncontrolledCollapse,TabContent,TabPane, Nav, NavItem, NavLink, Card, CardText, Row, Col,Container } from 'reactstrap';
import classnames from 'classnames';


export default class Footer extends React.Component {




    constructor(props) {
        super(props);


        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }





    render() {
        return (

            <div className={'block'}>
                <br/>
                <br/>

                <Container>
                    <Link to="#yourAnchorTag"><img className={'up'} src={require ('../assets/images/up.png')} alt={"up"}/></Link>


                    <br/>
                    <br/>
                    <br/>
                    <br/>

                    <Nav tabs>
                        <NavItem className="cursor">
                            <NavLink

                                id="toggler"
                                className={classnames({ active: this.state.activeTab === '2' })}
                                onClick={() => { this.toggle('2'); }}
                            >
                                Contact us
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                            <Row>
                                <Col sm="12">
                                    <h4></h4>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="2">
                            <Row>
                                <Col sm="4">
                                    <UncontrolledCollapse toggler="#toggler">
                                    <Card body className="footer">
                                        <CardText>
                                            info@abcd.com
                                            <br/>
                                            +982123456789
                                            <br/>
                                            No 23,Nelson Mandela St,Tehran,Iran
                                        </CardText>
                                    </Card>
                                    </UncontrolledCollapse>

                                </Col>
                            </Row>
                        </TabPane>
                    </TabContent>


                    <br/>

                    <div className="footerContainer">
                        <Row>
                             <Col sm="3">
                                <img className="logoFooter" src={require ('../assets/images/facebook.png')} title={"facebook"} alt={"facebook"}/>
                            </Col>
                            <Col sm="3">
                                <img className="logoFooter" src={require ('../assets/images/instagram.png')} title={"instagram"} alt={"instagram"}/>
                            </Col>
                            <Col sm="3">
                                <img className="logoFooter" src={require ('../assets/images/twitter.png')}  title={"twitter"} alt={"twitter"}/>
                            </Col>
                            <Col sm="3">
                                <img className="logoFooter" src={require ('../assets/images/google.png')} title={"google + "}  alt={"google plus"}/>
                            </Col>
                        </Row>
                        <br/>
                           <Row className="margin">
                               <p>
                                   © Copyright 2019
                               </p>
                           </Row>

                           <Row  className="margin2">
                               <p>
                                   All rights resereved.Powered by <span className={"text-info"}>Tannazvhd</span>
                               </p>
                           </Row>


                    </div>


                </Container>
            </div>
        );
    }
}



