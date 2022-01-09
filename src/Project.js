import React from 'react'
import Card from "react-bootstrap/Card";


function Project() {
    return (
        <section id="portfolio" class="portfolio section-bg">
            <div class="container">
                <div class="section-title">
                <h2>Projects</h2>
                <p>I have started Web Development quite recently and have developed three projects apart from this portfolio website. So, Here are some of my projects: </p>
                </div>

                <div class="row" data-aos="fade-up">
                <div class="col-lg-12 d-flex justify-content-center">
                    <ul id="portfolio-flters">
                    <li data-filter="*" class="filter-active">All</li>
                    <li data-filter=".filter-app">App</li>
                    <li data-filter=".filter-web">Web</li>
                    <li data-filter=".filter-card">ML</li>
                    </ul>
                </div>
                </div>

                <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="100">

                    <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                        <div class="portfolio-wrap">
                            <img src="assets/img/portfolio/Homepage1.jpg" class="img-fluid" alt=""/>
                            <div class="portfolio-links">
                                <a href="assets/img/portfolio/CSAI/Homepage.jpg" data-gall="portfolioGallery" class="venobox" title="CSAI Department Website"><i class="bx bx-image"></i></a>
                                <a href="https://github.com/tiwarishubham635/CSAI-Department-Website" target="_blank" title="More Details"><i class="bx bx-link"></i></a>
                            </div>
                            <Card style={{backgroundColor:"lightblue", color:"#040b14"}}>
                                <Card.Body >
                                    <Card.Title style={{fontWeight:"bold", fontSize:"1.20rem"}}>CSAI Department Website</Card.Title>
                                    <Card.Text>
                                        Developed the <strong>Forum</strong> of the CSAI Department website for students to discuss their Doubts using <strong>MERN Stack</strong>. Implemented Login and Sign-up using <strong>JWT Authentication</strong> and <strong>React Classes</strong>. Provided users the Login, Sign-up and CRUD functionality using <strong>Axios</strong> with <strong>ExpressJS and MongoDB</strong></Card.Text>
                                </Card.Body>
                            </Card>
                        </div>

                    </div>

                    <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div class="portfolio-wrap">
                            <img src="assets/img/portfolio/Login.png" class="img-fluid" alt=""/>
                            <div class="portfolio-links">
                                <a href="assets/img/portfolio/ChatRooms/Login.png" data-gall="portfolioGallery" class="venobox" title="Chat Rooms"><i class="bx bx-image"></i></a>
                                <a href="https://github.com/tiwarishubham635/Chat-Rooms" target="_blank" title="More Details"><i class="bx bx-link"></i></a>
                            </div>
                            <Card style={{backgroundColor:"lightblue", color:"#040b14"}}>
                                <Card.Body>
                                    <Card.Title style={{fontWeight:"bold", fontSize:"1.20rem"}}>Chat Rooms</Card.Title>
                                    <Card.Text>
                                        Developed a Progressive Web Chat App using <strong>React Hooks</strong> and <strong>Firebase</strong> with Chat Rooms for group discussions. Salient Features include <strong>Login with Google Authentication</strong>, Fast Search Chat, <strong>Animations</strong>, <strong>Emojis</strong> etc. Analyzed the real-time analytics using <strong>Firebase Console</strong>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                        <div class="portfolio-wrap">
                            <img src="assets/img/portfolio/Lovebug1.jpg" class="img-fluid" alt=""/>
                            <div class="portfolio-links">
                                <a href="assets/img/portfolio/Lovebug.jpg" data-gall="portfolioGallery" class="venobox" title="LoveBug"><i class="bx bx-image"></i></a>
                                <a href="https://github.com/tiwarishubham635/LoveBug-Admin" target="_blank" title="More Details"><i class="bx bx-link"></i></a>
                            </div>
                            <Card style={{backgroundColor:"lightblue", color:"#040b14"}}>
                                <Card.Body>
                                    <Card.Title style={{fontWeight:"bold", fontSize:"1.20rem"}}>LoveBug</Card.Title>
                                    <Card.Text>
                                        Built the Admin website for <strong>LoveBug</strong> where coders with similar aptitude in nearby locations can connect; using <strong>MERN Stack</strong>. Functionalities include creating coding contests and tracking progress using <strong>React, Axios, and Node</strong>, IDE and Location Tracker using <strong>JDoodle</strong> and <strong>Google Maps JS API</strong>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 portfolio-item filter-card">
                        <div class="portfolio-wrap">
                            <img src="assets/img/portfolio/LSTM.jpg" class="img-fluid" alt=""/>
                            <div class="portfolio-links">
                                <a href="assets/img/portfolio/LSTM.jpg" data-gall="portfolioGallery" class="venobox" title="Cryptocurrency Price Prediction Using Long-Short Term Memory"><i class="bx bx-image"></i></a>
                                <a href="https://github.com/tiwarishubham635/Cryptocurrency-Price-Prediction-Using-Long-Short-Term-Memory" target="_blank" title="More Details"><i class="bx bx-link"></i></a>
                            </div>
                            <Card style={{backgroundColor:"lightblue", color:"#040b14"}}>
                                <Card.Body>
                                    <Card.Title style={{fontWeight:"bold", fontSize:"1.20rem"}}>Cryptocurrency Price Prediction Using Long-Short Term Memory</Card.Title>
                                    <Card.Text>
                                    A Cryptocurrency price predictor to predict the prices of three currencies - <strong>Bitcoin</strong>, <strong>Ethereum</strong> and <strong>Litecoin</strong>. The model helps the user allocate different amounts of sum(buying and selling both) to different currencies depending on the amount entered by the user. It uses a multilayer <strong>RNN Long Term Short Term Memory (LSTM)</strong> model to produce the predicted price.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 portfolio-item filter-card">
                        <div class="portfolio-wrap">
                            <img src="assets/img/portfolio/Screenshot1.png" class="img-fluid" alt=""/>
                            <div class="portfolio-links">
                                <a href="assets/img/portfolio/Recession/Screenshot1.png" data-gall="portfolioGallery" class="venobox" title="Recession Hypothesis Testing"><i class="bx bx-image"></i></a>
                                <a href="https://github.com/tiwarishubham635/Recession-hypothesis-testing" target="_blank" title="More Details"><i class="bx bx-link"></i></a>
                            </div>
                            <Card style={{backgroundColor:"lightblue", color:"#040b14"}}>
                                <Card.Body>
                                    <Card.Title style={{fontWeight:"bold", fontSize:"1.20rem"}}>Recession Hypothesis Testing</Card.Title>
                                    <Card.Text>
                                    A Data Science Project to validate the hypothesis that university towns prices are less affected by recession using <strong>Python Libraries</strong> and <strong>Students T-Test</strong>. The data is managed in form of Series and Dataframes. This project is completly developed in <strong>Python</strong> language using some libraries like <strong>NumPy, Pandas, SciPy, Scikit and MatPlotLib</strong> etc. This Project was made under The Data Science course of <strong>University of Michigan</strong>.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>

                </div>

            </div>
    </section>
    )
}

export default Project
