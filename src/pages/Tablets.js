import React from 'react';
import {Container, Row, Col, Media, Spinner} from "reactstrap";
import Header from "../container/header";
import Footer from "../container/footer";
import axios from 'axios';


export default class Laptops extends React.Component {


    state={
        list :[],
        loading:false
    };



    constructor(props) {
        super(props);
        this.setState({
            loading:true
        });

        axios({
            url: 'http://localhost:8080/products/tablets'
        }).then((response)=>{

            this.setState({
                list : response.data.data,
                loading:false
            });

            // console.log(this.state.list)

        }).catch((error)=>{
                console.log(error);

            }
        );


    }


    render() {
        return (

            <div className={'block'}>
                <br/>
                <Container>

                    <Header/>
                    <br/>
                    <br/>
                    <Row>
                        <Col xs="6" sm="4"></Col>
                        <Col xs="6" sm="4"><h3 className={'text-center'}>Tablets</h3></Col>
                        <Col sm="4"></Col>
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






                    {
                        this.state.list.map((item,index)=>{

                                return(

                                    <React.Fragment key={index}>

                                        <Media className={'border-bottom'} id={index}>
                                            <Media left href="#">
                                                <Media object src={item.image}  className="productImg" alt="Generic placeholder image" />{' '}
                                            </Media>

                                            <Media body>
                                                <Media heading>
                                                    {item.title}{' '}
                                                    <Media left href="#">
                                                        <Media object src={require ('../assets/images/basket.png')}  className="order" title={"add to basket"} alt="order" />
                                                    </Media>
                                                </Media>
                                                <h6>{item.price}</h6>
                                                <p>
                                                    {item.description}
                                                </p>
                                            </Media>
                                        </Media>
                                        <br/>
                                    </React.Fragment>
                                )


                            }
                        )
                    }


                    <br/>

                    <Footer/>

                </Container>
            </div>
        );
    }
}



