import React from 'react';
import {Container, Row, Col, Input, Button} from 'reactstrap';
import axios from 'axios';


class CallServer extends React.Component{

    state = {
        list: [],
        add: '',
        loading: false
    };

    Unmount = false;


    componentDidMount() {
        this.getData();
    }

    Add = () => {
        axios({
            url: 'http://localhost:8080/posts',
            method: 'post',
            data: {
                title: this.state.add
            }/*,
            headers: {
                'x-access-token': 'dahdsvfbnm,'
            }*/
        }).then(response => {
            this.getData();
            this.setState({add: ''})
        }).catch(error => {
            console.log(error);
        })
    };

    // Del = id =>{
    //     axios({
    //         url: `http://localhost:8080/posts/${id}`,
    //         method: 'delete'
    //     }).then(response => {
    //         this.getData();
    //     }).catch(error => {
    //         console.log(error);
    //     })
    // };

    getData = () => {
        this.setState({loading: true});
        axios({
            url: 'http://localhost:8080/posts'
        }).then(response => {
            if(this.Unmount) return;
            this.setState({
                list: response.data,
                loading: false
            })
        }).catch(error => {
            console.log(error);
        })
    };

    componentWillUnmount() {
        console.log('Unmount');
        this.Unmount = true;
    }

    render() {
        const {list} = this.state;
        return (
            <Container>
                <Menu/>
                <Row>
                    <Col md={12}>
                        <Input value={this.state.add} onChange={e => {this.setState({add: e.target.value})}}/>
                    </Col>
                    <Col md={12}>
                        {/*<img src={require('./loading.gif')} alt=""/>*/}
                        {
                            this.state.loading && <img src={LoadingImage} alt=""/>
                        }
                        <ul>
                            {
                                list.map((item, index) => {
                                    return (
                                        <li key={index}>{item.title} <Button color='danger' onClick={this.Del.bind(this, item.id)}>Del</Button></li>
                                    )
                                })
                            }
                        </ul>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default CallServer;