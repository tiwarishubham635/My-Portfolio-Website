import React from 'react'

function About() {
    return (
        <section id="about" class="about">
        <div class="container">
          <div class="section-title">
            <h2>About</h2>
            <span>Hi! I am Shubham, a Pre-Final Year Student of Computer Science and Engineering. My Technical Interests include Algorithmic Problem Solving, Web Development, Artificial Intelligence, Machine Learning and Blockchain. Check out my </span>
            <a href="https://drive.google.com/file/d/1rDEsx9OABxY1GeBGcdXn1MGcSu8W-Dn4/view?usp=sharing" target="_blank"  class="resume"><b>resume!</b></a>
          </div>

          <div class="row">
            <div class="col-lg-4" data-aos="fade-right">
              <img src="assets/img/profile-img.jpg" class="img-fluid" alt=""/>
            </div>
            <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3> Software Engineer &amp; Web Developer</h3>
              <p class="font-italic">
                Currently I am pursuing my Bachelors of Technology in Computer Science and Engineering with Specialization in Artificial Intelligence from Netaji Subhas University of Technology, New Delhi 
              </p>
              <div class="row">
                <div class="col-lg-6">
                  <ul>
                    
                    <li><i class="icofont-rounded-right"></i> <strong>Mobile:</strong> +91 8470823006</li>

                    <li><i class="icofont-rounded-right"></i> <strong>Email:</strong> <small>tiwarishubham635@gmail.com</small></li>

                  </ul>
                </div>
                <div class="col-lg-6">
                  <ul>
                    <li><i class="icofont-rounded-right"></i> <strong>Degree:</strong> Bachelors of Technology</li>
                    
                    <li><i class="icofont-rounded-right"></i> <strong>City:</strong> New Delhi, India</li>

                  </ul>
                </div>
              </div>
              <p>
                I developed interests in Computers and Programming after High School and subsequently started to explore the field of technology. After starting my Bachelors degree, I came to know about Development and found it quite interesting. Since then, I have been developing small projects, websites and applications. Currently I am exploring the field of ML and AI.  
              </p>
            </div>
        </div>

      </div>
    </section>
    )
}

export default About
