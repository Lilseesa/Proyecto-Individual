import React from 'react';

const About = () =>(
    <div className="aboutContainer">

        <div className="textContainer">
            <h1 className="subtitle font-weight-bold">Hola,</h1>
            <h2 className="subtitle font-weight-bolder">Soy Sven, ¿Me estabas buscando?</h2>
            <p className="font-weight-light m-0 mt-4">Diseñador web y desarrollador principiante</p>
            <p className="font-weight-light m-0">Trabajo y me dedico en mi tiempo libre como beatmaker con FL Studio</p>
            <p className="font-weight-light m-0">Soy mas un trabajador independiente</p>
        </div>

        <div className="textBoxes">
            <div className="personalInfo list">
                <ul>
                    <h5 className="subtitle">Capacidades</h5>
                    <li><span>Java básico</span></li>
                    <li><span>Diseñador junior</span></li>
                    <li><span>Diseñador de interfaz</span></li>
                    <li><span>Desarrollador web</span></li>
                    <li><span>Edición de video</span></li>
                    <li><span>Manipulación de audio</span></li>
                    <li><span>Beatmaker</span></li>
                </ul>
            </div>
        </div>

        <div className="mt-2">
            
            <a className="redes" href="https://www.facebook.com/sven.seemann.798" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f mr-2"></i>
                Sven Seemann
            </a>

            <a className="redes" href="https://www.instagram.com/svenseesa/?hl=es-la" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram mr-2"></i> 
                svenseesa
            </a>
            
            <a className="redes" href="https://twitter.com/SvenSeemannS" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter mr-2"></i>
                @SvenSeesa
            </a>
            
            <a className="redes" href="https://www.pinterest.es/svenebal/boards/" target="_blank" rel="noopener noreferrer">            
                <i className="fab fa-pinterest-p mr-2"></i> 
                SvenSeeSa
            </a>
        </div>
    </div>
);

export default About;