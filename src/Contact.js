import React from 'react'

function Contact() {
    
    return (
        <section id="contact" class="contact">
            <div class="container">

                <div class="section-title">
                <h2>Contact</h2>
                <p>You can reach out to me or you can drop a message here !</p>
                </div>

                <div class="row" data-aos="fade-in">

                <div class="col-lg-5 d-flex align-items-stretch">
                    <div class="info">
                    <div class="address">
                        <i class="icofont-google-map"></i>
                        <h4>Location:</h4>
                        <p>New Delhi, India</p>
                    </div>

                    <div class="email">
                        <i class="icofont-envelope"></i>
                        <h4>Email:</h4>
                        <p>tiwarishubham635@gmail.com</p>
                    </div>

                    <div class="phone">
                        <i class="icofont-phone"></i>
                        <h4>Call:</h4>
                        <p>+91 8470823006</p>
                    </div>

                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14008.983517753515!2d77.138531!3d28.622392!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d032e6c592a41%3A0x12d26d5c35779d84!2s344%2C%20Naraina%20Village%2C%20Naraina%2C%20New%20Delhi%2C%20Delhi%20110028!5e0!3m2!1sen!2sin!4v1609524422894!5m2!1sen!2sin" frameborder="0" style={{border:"0", width: "100%", height: "290px"}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe> */}

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.5339979105065!2d77.22080111416855!3d28.64372549032704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd3e911ea45f%3A0xe0cf33ccc2da2bbe!2sNew%20Delhi!5e0!3m2!1sen!2sin!4v1641733128348!5m2!1sen!2sin" frameborder="0" style={{border:"0", width: "100%", height: "290px"}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

                    </div>
                </div>

                    <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                        <form action="https://formsubmit.co/tiwarishubham635@gmail.com" method="POST" class="php-email-form">
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                <label for="name">Your Name</label>
                                <input type="text" name="name" class="form-control" id="name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" required/>
                                <div class="validate"></div>
                                </div>
                                <div class="form-group col-md-6">
                                <label for="name">Your Email</label>
                                <input type="email" class="form-control" name="email" id="email" data-rule="email" data-msg="Please enter a valid email" required />
                                <div class="validate"></div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="name">Subject</label>
                                <input type="text" class="form-control" name="_subject" id="subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                <div class="validate"></div>
                            </div>
                            <div class="form-group">
                                <label for="name">Message</label>
                                <textarea class="form-control" name="message" rows="10" data-rule="required" data-msg="Please write something for us"></textarea>
                                <div class="validate"></div>
                            </div>
                            <div class="text-center"><button type="submit">Send Message</button></div>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Contact
