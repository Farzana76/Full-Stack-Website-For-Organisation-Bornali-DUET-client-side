import React from 'react';
import Menu from '../../Menu/Menu';
import '../AboutBornali/AboutBornali.css';
import img from '../../../img/duet.jpg';
import img2 from '../../../img/duet2.jpg';
import img3 from '../../../img/duet3.jpg';
import { Carousel } from 'react-bootstrap';
import Footer from '../../Footer/Footer';

const AboutDUET = () => {
    return (
        <div>
            <Menu></Menu>
            <div className="box bg">
                <div className="bgw pb-5">
                        <Carousel interval={2000} className="px-5">
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={img2}
                                alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                {/* <Carousel.Caption>
                                    <h1 className="display-1 mb-5 pb-5 quote">BE FIT,<br></br>BE HEALTHY</h1>
                                </Carousel.Caption> */}
                                <img
                                className="d-block w-100"
                                src={img}
                                alt="Second slide"
                                />
                                {/* <Carousel.Caption>
                                    <h3>Maintain proper BMI</h3>
                                    <p>Clock's ticking</p>
                                </Carousel.Caption> */}
                            </Carousel.Item>
                            <Carousel.Item>
                                {/* <Carousel.Caption>
                                    <h1 className="display-1 mb-5 pb-5 quote">HEALTH IS THE KEY<br></br>TO HAPPINESS</h1>
                                </Carousel.Caption> */}
                                <img
                                className="d-block w-100"
                                src={img3}
                                alt="Third slide"
                                />
                                {/* <Carousel.Caption>
                                    <h3>Want healthy mind?</h3>
                                    <p>Don't be late to join</p>
                                </Carousel.Caption> */}
                            </Carousel.Item>
                        </Carousel> 
                        <h1 className="pt-3">About DUET</h1>
                        <hr className="w-50 mx-auto"></hr>
                        <h5 className="px-5 mx-5">
                            The University started its operation in 1980 as College of Engineering at its temporary campus at Tejgaon, under the University of Dhaka and offered four years Bachelors degree in Civil Engineering, Electrical and Electronic Engineering, Mechanical Engineering to meet the growing need for advanced engineering education in Bangladesh. After a short span of time, College of Engineering is renamed as Dhaka Engineering College in 1981. Dhaka Engineering College shifted to its present campus at Gazipur City in 1983. Dhaka Engineering College was promoted to Bangladesh Institute of Technology (BIT), Dhaka as a degree awarding Institute by the Government ordinance in 1986 to find solutions to various problems it had been facing since its inception. BIT, Dhaka was changed to a full fledge University as the name “Dhaka University of Engineering and Technology (DUET), Gazipur” since 1st September 2003. University Administration is mostly defined and determined by the University Act (Dhaka University of Engineering & Technology, Gazipur Act, 2003).  DUET has ultimately turned into an Institution, which can now boost its commitment to quality engineering education and has earned a good reputation all over the world for the quality of its graduates. Till today, it has produced around 6,300 graduates in different branches. The curricula of DUET address the needs of present and future, through undergraduate and post-graduate programs.
                        </h5>
                        <h4 className="px-5 mx-5 mt-4">
                            University Vision
                        </h4>
                        <h5 className="px-5 mx-5">
                            To be the center of excellence for quality education, research and innovation.
                        </h5>
                        <h4 className="px-5 mx-5 mt-4">
                            University Mission
                        </h4>
                        <ul className="px-5 mx-5 h5">
                            <li className="li">
                                To provide a congenial environment for world-class education, research and innovation 
                            </li>
                            <li className="li">
                                To produce highly efficient technical professionals endowed with practical knowledge, skills and ethical values based on emerging demands.
                            </li>
                            <li className="li">
                                To promote multi-faceted academic collaboration across universities and industries for research and innovation.
                            </li>
                            <li className="li">
                                To contribute in national policy making for sustainable socio-economic and industrial development of the country.
                            </li>
                            <li className="li">
                                To provide consultancy in solving technical problems at national and international levels.
                            </li>
                        </ul>
                        <h4 className="px-5 mx-5 mt-4">
                            History
                        </h4>
                        <h5 className="px-5 mx-5">
                        The university was originated in 1980 as the College of Engineering at its temporary campus at Tejgaon, Dhaka under the University of Dhaka offering four years bachelor's degree in Civil, Electrical and Electronic, Mechanical Engineering. After a short time, the College of Engineering was renamed as Dhaka Engineering College (DEC). Then DEC shifted to its present permanent campus Gazipur City in 1983.<br></br><br></br>

                        DEC was converted into the Bangladesh Institute of Technology (BIT), Dhaka as a degree awarding Institute by the government ordinance in 1986.<br></br><br></br>

                        In September 2003, BITD became Dhaka University of Engineering & Technology, Gazipur by "Dhaka University of Engineering and Technology, Gazipur Act, 2003" along with three other engineering universities (CUET, KUET, RUET). The university became an autonomous statutory organization of Government of the People's Republic of Bangladesh under this act. 
                        </h5>
                        <h4 className="px-5 mx-5 mt-4">
                            Location
                        </h4>
                        <h5 className="px-5 mx-5">
                            The university is located at Gazipur District, 40 km (25 mi) north of Dhaka, the capital city of Bangladesh (about 20 km (12 mi) from Shahjalal International Airport). This district town Gazipur is well connected by roads and railway with Dhaka and other cities of Bangladesh. 
                        </h5>
                        <h4 className="px-5 mx-5 mt-4">
                            Academic
                        </h4>
                        <h5 className="px-5 mx-5 fw-bold">
                            Faculties and departments
                        </h5>
                        <ul className="px-5 mx-5 h5">
                            <li className="li">
                                Faculty of Civil Engineering
                                <li className="li">Department of Civil Engineering (CE)</li>
                                <li className="li">Department of Architecture (Arch)</li>
                            </li>
                            <li className="li">
                                Faculty of Electrical and Electronic Engineering
                                <li className="li">Department of Electrical & Electronic Engineering(EEE)</li>
                                <li className="li">Department of Computer Science & Engineering(CSE)</li>
                            </li>
                            <li className="li">
                                Faculty of Mechanical Engineering
                                <li className="li">Department of Mechanical Engineering (ME)</li>
                                <li className="li">Department of Textile Engineering (TE)</li>
                                <li className="li">Department of Industrial & Production Engineering(IPE)</li>
                                <li className="li">Department of Chemical and Food Engineering (CFE)</li>
                                <li className="li">Department of Materials and Metallurgical Engineering (MME)</li>
                            </li>
                            <li className="li">
                                Faculty of Engineering
                                <li className="li">Department of Chemistry</li>
                                <li className="li">Department of Mathematics</li>
                                <li className="li">Department of Physics</li>
                                <li className="li">Department of Humanities & Social Sciences</li>
                            </li>
                        </ul>
                        <h4 className="px-5 mx-5 mt-4">
                            Enrollment
                        </h4>
                        <h5 className="px-5 mx-5 fw-bold">
                            Undergraduate program
                        </h5>
                        <h5 className="px-5 mx-5">
                            DUET offers 9 undergraduate degrees across its 4 faculties. Each academic year comprises two semesters, i.e., 1st and 2nd semester. Students are generally admitted into the 1st year 2nd semester class. The 1st semester of 1st year class is exempted because of the candidates' completion of minimum 4-year Diploma in Engineering backgrounds after 10 years of schooling. Degrees offered in the following disciplines: 
                        </h5>
                        <ul className="px-5 mx-5 h5">
                            <li className="li">Civil Engineering</li>
                            <li className="li">Electrical & Electronic Engineering</li>
                            <li className="li">Mechanical Engineering</li>
                            <li className="li">Computer Science & Engineering</li>
                            <li className="li">Textile Engineering</li>
                            <li className="li">Architecture</li>
                            <li className="li">Industrial & Production Engineering</li>
                            <li className="li">Chemical & Food Engineering</li>
                            <li className="li">Materials and Metallurgical Engineering</li>
                        </ul>
                        <h5 className="px-5 mx-5 fw-bold">
                            Postgraduate program
                        </h5>
                        <h5 className="px-5 mx-5">
                            DUET offers 13 Graduate degree across its 4 faculties. Masters and PhD degrees are offered by the university. M.Sc. Engineering/M. Engineering/PhD/M. Phil degrees are offered in the different area. 
                        </h5>
                        <h4 className="px-5 mx-5 mt-4">
                            Institutes
                        </h4>
                        <h5 className="px-5 mx-5">
                            There are four institutes which are: 
                        </h5>
                        <ul className="px-5 mx-5 h5">
                            <li className="li">Institute of Water & Environment Sciences (IWES)</li>
                            <li className="li">Information & Communication Technology (IICT)</li>
                            <li className="li">Institute of Energy Engineering (IEE)</li>
                            <li className="li">Institute of Appropriate Technology (IAT)</li>
                        </ul>
                        <h4 className="px-5 mx-5 mt-4">
                            Library
                        </h4>
                        <h5 className="px-5 mx-5">
                        The university devotes considerable effort and resources to the development of an outstanding library collection to meet the expanding need of teaching and research and to serve as a resource reference center. The general library has over 25000 items on all subject relevant to academic programmed.<br></br><br></br>

                        Library service include lending, reference, photo-copying and document delivery service. The library has a computerized information system to provide information about library materials for its members. All library services are available to faculty and students. Besides, the general library systems each academic discipline maintains rental library from which students can borrow text books at a nominal rate for the whole semester. Each department maintains its own affluent and modern rental library which provides sufficient books for the students of the respective discipline. 
                        </h5>
                        <h4 className="px-5 mx-5 mt-4">
                            Student life
                        </h4>
                        <h5 className="px-5 mx-5 fw-bold">
                            Halls of residence
                        </h5>
                        <h5 className="px-5 mx-5">
                            There are six male and two female dormitories, named: 
                        </h5>
                        <ul className="px-5 mx-5 h5">
                            <li className="li">Dr. Fazlur Rahman Khan Hall</li>
                            <li className="li">Dr. Qudrat-E-Khuda Hall</li>
                            <li className="li">Shaheed Muktijoddha Hall</li>
                            <li className="li">Kazi Nazrul Islam Hall</li>
                            <li className="li">Marie Curie Hall & Extension</li>
                            <li className="li">Shaheed Tajuddin Ahmad Hall</li>
                        </ul>
                        <h5 className="px-5 mx-5 fw-bold">
                            Student organizations
                        </h5>
                        <h5 className="px-5 mx-5">
                            There are a number of student organizations in the university.  
                        </h5>
                        <ul className="px-5 mx-5 h5">
                            <li className="li">DUET Innovation Society (DIS)</li>
                            <li className="li">IEEE - DUET Student Branch</li>
                            <li className="li">DUET Sports Club</li>
                            <li className="li">DUET Robotics Club (DRC)</li>
                            <li className="li">ELC - English Language Club</li>
                            <li className="li">DDS- DUET Debating Society</li>
                            <li className="li">Srijoni Cultural Association</li>
                        </ul>
                        <h5 className="px-5 mx-5 fw-bold">
                            Sports facilities
                        </h5>
                        <ul className="px-5 mx-5 h5">
                            <li className="li">One main, and one small playground</li>
                            <li className="li">Football, Cricket, Badminton facility; yearly inter department and inter hall tournaments.</li>
                        </ul>
                    </div>
                </div>
                <Footer></Footer>
        </div>
    );
};

export default AboutDUET;