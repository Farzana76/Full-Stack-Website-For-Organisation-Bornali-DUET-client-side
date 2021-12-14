import React, { useEffect, useState } from 'react';
import { Card, CardGroup, Col, Row } from 'react-bootstrap';
import Header from '../Header/Header';
// import Service from '../Service/Service';
import './Home.css';
import { Link } from 'react-router-dom';
// import vdo from '../../img/vd.mov';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';
// import Footer from '../Footer/Footer';
import Message from '../Message/Message';
// import SingleReview from '../Dashboard/SingleReview/SingleReview';
import img from '../../img/sh.png';
import hira from '../../img/hira.jpg';
import img1 from '../../img/quote.png';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper-bundle.css';
import 'swiper/swiper.min.css';
// import '~swiper/swiper.scss';
import SwiperCore, { Navigation, Pagination, Autoplay, EffectCoverflow, EffectFade, Zoom } from 'swiper';
// import 'swiper/modules/navigation/navigation.min.css';
// import 'swiper/components/pagination/pagination.scss';
// import 'swiper/components/scrollbar/scrollbar.scss';
import img2 from '../../img/bg2.JPG';
import img3 from '../../img/bg3.JPG';
import img4 from '../../img/bg4.JPG';
import img5 from '../../img/bg5.JPG';
import img6 from '../../img/bg6.JPG';

SwiperCore.use([Navigation, Pagination, Autoplay, EffectCoverflow, EffectFade, Zoom]);
const Home = () => {
    const [messages, setMessages] = useState([]);
    // const [reviews, setReviews] = useState([]);

    // loading products data
    useEffect(() => {
        fetch('http://localhost:5000/messages')
        .then(res => res.json())
        .then(data => setMessages(data))
    }, [])

    // // loading review data
    // useEffect(() => {
    //     fetch('https://peaceful-ridge-90551.herokuapp.com/review')
    //     .then(res => res.json())
    //     .then(data => setReviews(data))
    // }, [])

    return (
        <div>
            <Menu></Menu>
            <div className="home">
                <Header></Header>
                {/* <Row xs={1} md={2} lg={3} className="g-4 ps-5 pe-5 mb-5 pt-3">
                    {
                        messages.slice(0, 6).map(message => <Message
                            key = {message._id}
                            message={message}
                            ></Message>)
                    }
                </Row>  */}
                <div className="d-flex justify-content-center mt-3">
                    <hr className="w-25 pt-1"></hr>
                    <h2 className="heading mt-3">About Bornali</h2>
                    <hr className="w-25 pt-1"></hr>
                </div>
                
                <h5 className="px-5 mx-5 justify">
                    Bornali is one of the largest student welfare association in Dhaka University Of Engineering & Technology (DUET).  This organization is consisting of the former students of Dhaka Polytechnic Institute (DPI). It established in 2006. Bornali arranges different events (Farewell of outgoing students, fresher reception, Iftar mahfil, Sports events etc) and provides different student welfare services (Digital library, financial assistance for poor members etc) in order to maintain the brotherhood environment in DUET. At present there are around 200 members in Bornali. The inter bonding between the members of Bornali is so strong that are follow-able... 
                    <Link to="/aboutBornali" className="text-decoration-none">
                        see more
                    </Link>
                </h5>
                <div className="mx-5">
                    <Swiper
                        // modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={-1}
                        slidesPerView={3}
                        autoplay={{delay: 2000}}
                        // navigation
                        pagination={{ clickable: true }}
                        // effect={'fade'}
                        // grabCursor={true}
                        zoom= {true}
                        breakpoints= {{
                            320: {
                              slidesPerView: 1,
                            },
                            480: {
                              slidesPerView: 1,
                            },
                            992: {
                              slidesPerView: 1,
                            }
                          }}
                        coverflowEffect= {{
                            rotate: 0,
                            stretch: 0,
                            depth: 200,
                            modifier: 2,
                            slideShadows : true
                          }}
                        // scrollbar={{ draggable: true }}
                        centeredSlides={true}
                        loop = {true}
                        onSlideChange={() => console.log("slide change")}
                        onSwiper={swiper => console.log(swiper)}
                        >
                        
                            
                                {
                                    messages.map(message => <SwiperSlide><Message
                                        key = {message._id}
                                        message={message}
                                        ></Message></SwiperSlide>)
                                }
                            
                        
                        </Swiper>
                        {/* <SwiperSlide>
                        <Row xs={1} md={1} lg={1} className="">
                                <Col>
                                <Card border='' className="coach my-2">
                                                <Card.Img variant="top" className="rounded-3 w-25 rounded-circle mx-auto pt-2" src={hira} />  
                                                <Card.Title>
                                                    <h4 className="text-center mb-0 mt-1">Solaiman Ahmed Hira</h4>
                                                    <small className="text-center">
                                                        President (2015-2016)
                                                    </small>
                                                </Card.Title>
                                                <Card.Text>
                                                <h6 className="text-secondary fst-italic justify px-2">
                                                The activities of this organization is to build a strongest brotherhood and obviously helpful for those students who want to explore themselves in a constructive way. I believe, they are dynamic, talent and ever green.
                                                </h6>
                                            </Card.Text>
                                    </Card>
                                </Col>
                            </Row>
                        </SwiperSlide>
                        <SwiperSlide>
                        <Row xs={1} md={1} lg={1} className="">
                                <Col>
                                <Card border='' className="coach my-2">
                                                <Card.Img variant="top" className="rounded-3 w-25 rounded-circle mx-auto pt-2" src={img} />  
                                                <Card.Title>
                                                    <h4 className="text-center mb-0 mt-1">Shahadat Molla</h4>
                                                    <small className="text-center">
                                                        President (2020-2021)
                                                    </small>
                                                </Card.Title>
                                                <Card.Text>
                                                <h6 className="text-secondary fst-italic justify px-2">
                                                BORNALI, one of the largest student welfare organizations of Dhaka University of Engineering and Technology, has been operating since its inception in a spirit of brotherhood. The manifestation of the smooth development of latent talent is playing a vital role in the formation of new leadership.
                                                </h6>
                                            </Card.Text>
                                    </Card>
                                </Col>
                            </Row>
                        </SwiperSlide>
                        <SwiperSlide>
                        <Row xs={1} md={1} lg={1} className="">
                                <Col>
                                <Card border='' className="coach my-2">
                                                <Card.Img variant="top" className="rounded-3 w-25 rounded-circle mx-auto pt-2" src={img} />  
                                                <Card.Title>
                                                    <h4 className="text-center mb-0 mt-1">Shahadat Molla</h4>
                                                    <small className="text-center">
                                                        President (2020-2021)
                                                    </small>
                                                </Card.Title>
                                                <Card.Text>
                                                <h6 className="text-secondary fst-italic justify px-2">
                                                BORNALI, one of the largest student welfare organizations of Dhaka University of Engineering and Technology, has been operating since its inception in a spirit of brotherhood. The manifestation of the smooth development of latent talent is playing a vital role in the formation of new leadership.
                                                </h6>
                                            </Card.Text>
                                    </Card>
                                </Col>
                            </Row>
                        </SwiperSlide>*/}
                    
                </div> 
                {/* <div className="row px-5 mx-5 mt-3">
                    <div className="col-lg-9 mt-3 pt-5">
                        <hr className="pt-1"></hr>
                        <div className="d-flex justify-content-center">
                            <img src={img1} alt=""/>
                            <h1 className="heading mt-3">Message from President</h1>
                        </div>
                        <hr className="pt-1"></hr>
                        <h5 className="text-secondary fst-italic">
                        BORNALI, one of the largest student welfare organizations of Dhaka University of Engineering and Technology, has been operating since its inception in a spirit of brotherhood. The manifestation of the smooth development of latent talent is playing a vital role in the formation of new leadership. Every member of the BORNALI  is contributing to the competitive market through the advancement of technology. It is strengthening the economy of Bangladesh. BORNALI  is committed to work for the welfare of the students.<br></br>
                        Through culture, sports BORNALI has become the focal point of caring for taste and creativity. I hope that every member of BORNALI will take the country's economy forward in the future as well. Let's go ahead DUET Let's go ahead BORNALI. I wish the improvement of BORNALI.
                        </h5>
                    </div>
                    <div className="col-lg-3">
                        <img src={img} alt="president" width="280px"/>
                    </div>
                </div> */}
                
                <div className="d-flex justify-content-center">
                    <hr className="w-25 pt-1"></hr>
                    <h2 className="heading mt-3">About DDAC</h2>
                    <hr className="w-25 pt-1"></hr>
                </div>
                <h5 className="px-5 mx-5 justify">
                Dhaka University of Engineering and Technology (DUET), Gazipur is the only school of diploma engineers to establish itself as an engineer in tackling the challenge of technology dependent globalization. DUET is one of the leading engineering universities in Bangladesh. The sole purpose of DHAKA DUET Admission Coaching (DDAC) is to develop the DUET as a suitable student and to fulfill the dreams of the students.It is the sister concern of BORNALI...
                    <Link to="/aboutDDAC" className="text-decoration-none">
                        see more
                    </Link>
                </h5>
                <div className="d-flex justify-content-center">
                    <hr className="w-25 pt-1"></hr>
                    <h2 className="heading mt-3">About DUET</h2>
                    <hr className="w-25 pt-1"></hr>
                </div>
                <h5 className="px-5 mx-5 justify">
                    The University started its operation in 1980 as College of Engineering at its temporary campus at Tejgaon, under the University of Dhaka and offered four years Bachelors degree in Civil Engineering, Electrical and Electronic Engineering, Mechanical Engineering to meet the growing need for advanced engineering education in Bangladesh. After a short span of time, College of Engineering is renamed as Dhaka Engineering College in 1981. Dhaka Engineering College shifted to its present campus at Gazipur City in 1983. Dhaka Engineering College was promoted to Bangladesh Institute of Technology (BIT), Dhaka as a degree awarding Institute by the Government ordinance in 1986 to find solutions to various problems it had been facing since its inception. BIT, Dhaka was changed to a full fledge University as the name “Dhaka University of Engineering and Technology (DUET), Gazipur” since 1st September 2003. University Administration is mostly defined and determined by the University Act (Dhaka University of Engineering & Technology, Gazipur Act, 2003). DUET has ultimately turned into an Institution, which can now boost its commitment to quality engineering education and has earned a good reputation all over the world for the quality of its graduates. Till today, it has produced around 6,300 graduates in different branches. The curricula of DUET address the needs of present and future, through undergraduate and post-graduate programs...
                    <Link to="/aboutDUET" className="text-decoration-none">
                        see more
                    </Link>
                </h5>
                {/* passing data of services */}
                {/* <div className="services2">
                <h1 className="heading mt-3">Artworks</h1>
                <Row xs={1} md={2} lg={3} className="g-4 ps-5 pe-5 mb-5 pt-3">
                    {
                        products.slice(0, 6).map(product => <Product
                            key = {product._id}
                            product={product}
                            ></Product>)
                    }
                </Row> 
            </div>
            <div className="services2">
                <h1 className="heading mt-3">Client Reviews</h1>
                <Row xs={1} md={1} lg={2} className="g-4 ps-5 pe-5 mb-5 pt-3">
                    {
                        reviews.slice(0, 6).map(review => <SingleReview
                            key = {review._id}
                            review={review}
                            ></SingleReview>)
                    }
                </Row> 
            </div>
            <div className="services2 mb-5">
                <h1 className="heading mt-3">Video of Paintings</h1>
                <video src={vdo} autoPlay="true" className="w-75" controls/>
            </div> */}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;