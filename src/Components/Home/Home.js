import React, { useEffect, useState } from 'react';
import { Card, CardGroup, Row } from 'react-bootstrap';
import Header from '../Header/Header';
// import Service from '../Service/Service';
import './Home.css';
import { Link } from 'react-router-dom';
// import vdo from '../../img/vd.mov';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';
// import Footer from '../Footer/Footer';
// import Product from '../Product/Product';
// import SingleReview from '../Dashboard/SingleReview/SingleReview';
import img from '../../img/sh.png';
import img1 from '../../img/quote.png';
// import Swiper from 'swiper';
// import Swiper from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


const Home = () => {
    // const [products, setProducts] = useState([]);
    // const [reviews, setReviews] = useState([]);

    // // loading products data
    // useEffect(() => {
    //     fetch('https://peaceful-ridge-90551.herokuapp.com/products')
    //     .then(res => res.json())
    //     .then(data => setProducts(data))
    // }, [])

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
                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    ...
                </Swiper>
                <div className="row px-5 mx-5 mt-3">
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
                </div>
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
                <div className="d-flex justify-content-center">
                    <hr className="w-25 pt-1"></hr>
                    <h2 className="heading mt-3">About DDAC</h2>
                    <hr className="w-25 pt-1"></hr>
                </div>
                <h5 className="px-5 mx-5 justify">
                Dhaka DUET admission coaching (DDAC) is a sister concern of Bornali welfare association and the fastest growing coaching for DUET admission. It was established in 2008 at Gazipur. It is directed by former student of Dhaka polytechnic institue. Now it is one the best DUET admission coaching...
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