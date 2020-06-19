import React from 'react';

const About = () =>(
    <div className="aboutContainer">

        <div className="textContainer">
            <h1 className="subtitle font-weight-bold">Hola,</h1>
            <h2 className="subtitle font-weight-bolder">Soy Sven, ¿Me estabas buscando?</h2>
            <p className="font-weight-light m-0 mt-4">Diseñador web y desarrollador principiante</p>
            <p className="font-weight-light m-0">Me gustan los desafios y nuevas ideas</p>
            <p className="font-weight-light m-0">Trabajo y me dedico en mi tiempo libre como beatmaker con FL Studio</p>
            <p className="font-weight-light m-0">Mis gustos son variados y mis pasatiempos son los videojuegos principalmente</p>
        </div>

        <div className="textBoxes">
            <div className="personalInfo">
                <h5 className="subtitle">Habilidades</h5>
                <p className="font-weight-light m-0 mt-2">Fácil aprendizaje</p>
                <p className="font-weight-light m-0"> Autodidacta</p>
                <p className="font-weight-light m-0"> Me adapto al cambio</p>
                <p className="font-weight-light m-0"> Trabajo bien en equipo</p>
                <p className="font-weight-light m-0"> Empatico, amable y respetuoso en el ámbito laboral</p>
            </div>

            <div className="personalInfo">
                <h5 className="subtitle">Capacidades</h5>
                <p className="font-weight-light m-0 mt-2">Java básico</p>
                <p className="font-weight-light m-0">Conceptos básicos-intermedios de diseño</p>
                <p className="font-weight-light m-0">Diseñador de interfaz y desarrollador web</p>
                <p className="font-weight-light m-0">Conocimientos en edición de video</p>
                <p className="font-weight-light m-0">Conocimiento en manipulación de audio y creación de beats</p>
            </div>

            <div className="personalInfo">
                <h5 className="subtitle">Cualidades</h5>
                <p className="font-weight-light m-0 mt-2">Carismatico</p>
                <p className="font-weight-light m-0"> Amigable</p>
                <p className="font-weight-light m-0"> Me gusta trabajar en equipo</p>
                <p className="font-weight-light m-0"> Perfeccionista</p>
                <p className="font-weight-light m-0"> Autoexigente</p>
                <p className="font-weight-light m-0"> Paciente</p>
                <p className="font-weight-light m-0"> Me gusta investigar</p>
            </div>
        </div>

        <div className="mt-4">
            <i className="fab fa-facebook-f"></i> 
            <a className="redes" href="https://www.facebook.com/sven.seemann.798" target="_blank" rel="noopener noreferrer">Sven Seemann</a>
            
            <i className="fab fa-instagram"></i> 
            <a className="redes" href="https://www.instagram.com/svenseesa/?hl=es-la" target="_blank" rel="noopener noreferrer">svenseesa</a>
            
            <i className="fab fa-twitter"></i> 
            <a className="redes" href="https://twitter.com/SvenSeemannS" target="_blank" rel="noopener noreferrer">@SvenSeesa</a>
            
            <i className="fab fa-pinterest-p"></i> 
            <a className="redes" href="https://www.pinterest.es/svenebal/boards/" target="_blank" rel="noopener noreferrer">SvenSeeSa</a>
        </div>

    </div>
);

export default About;