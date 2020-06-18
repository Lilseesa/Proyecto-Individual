import React from 'react';

const About = () =>(
    <div className="aboutContainer">

        <div className="textContainer">
            <h1 className="subtitle font-weight-bold">Hi,</h1>
            <h2 className="subtitle font-weight-bolder">I'm Sven, are you loking for me?</h2>
            <p className="font-weight-light mt-4">Beginner designer and Web Developer 
                <br></br>I like challenges and new experiences
                <br></br>Working on my own projects as beat maker on FL Studio
                <br></br>If you any new project get in touch
            </p>
        </div>

        <div className="textBoxes">
            <div className="personalInfo">
                <h5 className="subtitle">Habilities</h5>
                <p className="font-weight-light m-0 mt-2">Easy learning</p>
                <p className="font-weight-light m-0"> Autodidact</p>
                <p className="font-weight-light m-0"> Farsighted</p>
                <p className="font-weight-light m-0"> I follow instructions</p>
                <p className="font-weight-light m-0"> Empathic</p>
            </div>

            <div className="personalInfo">
                <h5 className="subtitle">Capacities</h5>
                <p className="font-weight-light m-0 mt-2">Basic Java</p>
                <p className="font-weight-light m-0">Basic Dessign</p>
                <p className="font-weight-light m-0">Beginner Web designer with knowledge in React (Frontend)</p>
                <p className="font-weight-light m-0">Knowledge editing videos</p>
                <p className="font-weight-light m-0">Knowledge with FL studio making little beats</p>
            </div>

            <div className="personalInfo">
                <h5 className="subtitle">Qualities</h5>
                <p className="font-weight-light m-0 mt-2">Charismatic</p>
                <p className="font-weight-light m-0"> Friendly</p>
                <p className="font-weight-light m-0"> Work well as a team</p>
                <p className="font-weight-light m-0"> Knowledge editing videos</p>
                <p className="font-weight-light m-0"> nowledge with FL studio making little beats</p>
            </div>
        </div>

        <div className="mt-4">
            <i class="fab fa-facebook-f"></i> <a className="redes" href="https://www.facebook.com/sven.seemann.798" target="_blank">Sven Seemann</a>
            <i class="fab fa-instagram"></i> <a className="redes" href="https://www.instagram.com/svenseesa/?hl=es-la" target="_blank">svenseesa</a>
            <i class="fab fa-twitter"></i> <a className="redes" href="https://twitter.com/SvenSeemannS">@SvenSeemannS</a>
            <i class="fab fa-pinterest-p"></i> <a className="redes" href="https://www.pinterest.es/svenebal/boards/" target="_blank">SvenSeeSa</a>
        </div>

    </div>
);

export default About;