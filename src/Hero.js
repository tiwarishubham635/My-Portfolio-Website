import React from 'react'
import './Hero.css';


function Hero() {

    var typetext = ["A Software Engineer                ", "A Web Developer                "];
    var textpos = 0;
    var i = 0;
    var speed = 100;

    var typewriter = () => {

        document.querySelector("#typing").innerHTML = typetext[i].substring(0, textpos) + '<span class="blink">\u23AE</span>';

        if(textpos++ !== typetext[i].length)
            setTimeout(typewriter, speed);
        
        else
        {
            i = (i+1)%typetext.length;
            textpos = 0;
            typewriter();
        }

    }

    window.addEventListener("load", typewriter);


    return (
        <section id='hero' className="d-flex flex-column justify-content-center align-items-center">
            <div className="hero-container" data-aos="fade-in">
                <h1>Hello! I am Shubham</h1>
               <p id="typing"></p>
            </div>
        </section>
    )
}

export default Hero
