import React from 'react';
import {Container ,Row,Col,Carousel,Card, CardImg,CardFooter,CarouselItem,CarouselControl,CarouselIndicators,CarouselCaption} from 'reactstrap';
import axios from 'axios';
import Header from "../container/header";
import Footer from "../container/footer";
import {Link} from "react-router-dom";




const items = [
  {
    src: 'images/mac1.jpg',
    route: '/Products/Laptops',
    altText: 'Laptops',
    caption: 'Macbook Pro'
  },
  {
    src: 'images/iphone1.jpg',
    route: '/Products/Smartphones',
    altText: 'Smart Phones',
    caption: 'iPhone'
  },
  {
    src: 'images/tablet1.jpg',
    route: '/Products/Tablets',
    altText: 'Tablets',
    caption: 'iPad'
  },
  {
    src: 'images/access1.jpg',
    route: '/Products/Accessories',
    altText: 'Accessories',
    caption: 'iWatch'
  }
  ];

export default class App extends React.Component{

  state ={
    letter : '',
    load : false,
    info : '' ,
    list : [],

  };



  Search = ()=>{
    axios({
      url: 'http://localhost:3030/actors/'+ this.state.letter
    }).then((response)=>{

      // console.log(response.data);

      this.setState({
        list : response.data
      })

    }).catch((error)=>{
          console.log(error);

        }
    );
  };




  constructor(props) {
    super(props);
    this.state = {activeIndex: 0};
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);

  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }


  render() {

    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
          <CarouselItem
              onExiting={this.onExiting}
              onExited={this.onExited}
              key={item.src}
          >
            <Link to={item.route}><img src={item.src}  className="image" alt={item.altText} /></Link>
            <CarouselCaption captionText={item.altText} captionHeader={item.caption} />
          </CarouselItem>
      );
    });



    return (


      <div className={'block'}>
        <br/>
        <Container >

          <Header/>
          <br/>
          <Carousel

              activeIndex={activeIndex}
              next={this.next}
              previous={this.previous}
          >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
          </Carousel>
          <br/>

          <Row>
            <Col sm="3">
              <Link to="/Products/Laptops"> <Card>
                <div className="container1">
                  <CardImg className="cardimg" top src={require ('../assets/images/mac1.jpg')} alt="Card image cap" />
                    <div className="overlay1">
                      <div className="text2">Macbook</div>
                    </div>
                </div>
                <CardFooter className={'text-center text-muted' }>Laptops</CardFooter>
              </Card></Link>
            </Col>

            <Col sm="3">
              <Link to="/Products/Smartphones"> <Card>
                <div className="container2">
                  <CardImg className="cardimg" top src={require ('../assets/images/iphone1.jpg')} alt="Card image cap" />
                  <div className="overlay2">
                    <div className="text2">iPhone</div>
                  </div>
                </div>
                <CardFooter className={'text-center text-muted' }>Smart Phones</CardFooter>
              </Card></Link>
            </Col>
            <Col sm="3">
              <Link to="/Products/Tablets"><Card>
                <div className="container3">
                  <CardImg className="cardimg" top src={require ('../assets/images/tablet1.jpeg')} alt="Card image cap" />
                  <div className="overlay3">
                    <div className="text2">iPad</div>
                  </div>
                </div>
                <CardFooter className={'text-center text-muted' }>Tablets</CardFooter>
              </Card></Link>
            </Col>
            <Col sm="3">
              <Link to="/Products/Accessories"><Card>
                <div className="container4">
                  <CardImg className="cardimg" top src={require ('../assets/images/access1.jpg')} alt="Card image cap" />
                  <div className="overlay4">
                    <div className="text2">iWatch</div>
                  </div>
                </div>
                <CardFooter className={'text-center text-muted ' }>Accessories</CardFooter>
              </Card></Link>
            </Col>
          </Row>

          <Footer/>

        </Container>
      </div>

  )

  }

}