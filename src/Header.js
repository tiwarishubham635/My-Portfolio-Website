import React from 'react'

function Header() {
    return (
        <header id='header'>
            <div class="d-flex flex-column">
                <div class="profile">
                    <img src="assets/img/profile-img.jpg" alt="" class="img-fluid rounded-circle"/>
                    <h1 class="text-light"><a href="index.html">Shubham</a></h1>
                    <div class="social-links mt-3 text-center">
                        <a href="mailto: tiwarishubham635@nsut.ac.in" target="_blank"   class="email"><i class="bx bxl-google"></i></a>
                        <a href="https://github.com/tiwarishubham635" target="_blank" class="github"><i class="bx bxl-github"></i></a>
                        <a href="https://www.linkedin.com/in/tiwarishubham635/"  target="_blank" class="linkedin" ><i class="bx bxl-linkedin"></i></a>
                        <a href="https://api.whatsapp.com/send?phone=+91 8470823006" target="_blank" class="whatsapp"><i class="bx bxl-whatsapp"></i></a>
                    </div>
            </div>

                <nav class="nav-menu">
                    <ul>
                        <li><a href="#hero"><i class="bx bx-home"></i> <span>Home</span></a></li>
                        <li><a href="#about"><i class="bx bx-user"></i> <span>About</span></a></li>
                        <li><a href="#skills"><i class="bx bx-book"></i> <span>Skills</span></a></li>
                        <li><a href="#portfolio"><i class="bx bx-book-content"></i>Projects</a></li>
                        <li><a href="#contact"><i class="bx bx-envelope"></i>Contact</a></li>
                    </ul>
                </nav>
                <button type="button" class="mobile-nav-toggle d-xl-none"><i class="icofont-navigation-menu"></i></button>
            </div>
        </header>
    )
}

export default Header
