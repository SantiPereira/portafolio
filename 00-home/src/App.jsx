import React from 'react';
import './App.css';
import { useEffect } from 'react';

//! Componente Tarjeta de Proyecto
const TagLink = ({ title = "Proximamente...", link, port = "/imagenes/randal_o1.jpg" , key }) => {
  
    //TODO: Desfine el estilo si el proyecto existe o aun esta en desarrollo ;
  const className = `post-info ${title === "Proximamente..." ? `after` : `activ`}`;

  return (
    <div className="post-grid">
      <div className="post">
        <a href={link || "#"}>
          <img src={port} alt={title} />
          <div className={className}>
            <h3>{title}</h3>
          </div>
        </a>
      </div>
    </div>
  );
};


//! Mis redes sociales 
const SocialLink = ({ href, imgSrc, altText }) => {
  return (
    <a target="_blank" rel="noopener noreferrer" href={href}>
      <img src={imgSrc} alt={altText} className="logos" />
    </a>
  );
};

// Componente Principal
function App() {

//! Funcion que sirve para ver en que archivo estamos en el nav 
  useEffect(() => {
    const navLinks = document.querySelectorAll("nav .derecha a");

    navLinks.forEach((link) => {
      if (link.href !== window.location.href) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }, []);


  return (
    <main>
      {/* Barra de navegación */}
      <nav>
          <div className="contenedor-nav">
            <div className="nav-section izquierda">
                <div className="foto-perfil">
                    <img src="imagenes/perfil_proto02.JPG" alt="Foto de perfil de Santiago Pereira"/>
                </div>
            </div>
            <div className="nav-section centro">
                Santiago Pereira
                <img src="imagenes/verified_black.png" alt="Logo Verificado" className="logo-verificado"/> 
            </div>
            <div className="nav-section derecha"> 
                <a href="Index.html" className="ap home re">Home</a>
                <a href='#' className="ap note re">Notas</a>
                <a href='#' className="ap you re">Sobre mí</a>
                <a href='#' className="ap algo re">Random</a>
            </div> 
        </div>
    </nav>

      {/* Contenido Principal */}
        <header >
          <h2>Hola, me llamo Santiago Pereira</h2>
          <h1>Bienvenido a mi página web.</h1>

          <section className="apartados"> 
            <TagLink /> {/* Uso de API */}
            <TagLink /> {/* Login y Reg*/}
            <TagLink title="Juego Conecta4" link={`${window.location.origin.replace(/:\d+$/, '')}:5175`} />
            <TagLink />
            <TagLink />
            <TagLink />
          </section>
        </header>

        <footer>
          <div className="contenedor-footer">

            {/* Sección izquierda:*/}
            <div className="footer-section izquierda">
            </div>
        
            {/* Sección central:*/}
            <div className="footer-section centro">
              <span>Desarrollador web adicto al mate desde © 2005</span>
            </div>

            {/* Sección derecha:*/}
            <div className="footer-section derecha">

              {/* //? Linck: Github */}
              <SocialLink
                href="https://github.com/SantiPereira"
                imgSrc="/imagenes/logo_github.png"
                altText="Logo github"
              />

              {/* //? Linck: Linkedin */}
              <SocialLink 
                href={"https://www.linkedin.com/in/santiago-pereira-896a87272/"} 
                imgSrc="/imagenes/logo_linkedin.png" 
                altText="Logo Linkedin" 
              />

              {/* //? Linck: Whatsapp */}
              <SocialLink
                href="https://wa.me/598961755"
                imgSrc="/imagenes/logo_whatsapp.png"
                altText="Logo Whatsapp"
              />

              {/* //? Linck: Mail */}
              <SocialLink
                href="mailto:santiagope.sp@gmail.com"
                imgSrc="/imagenes/logo_correo.png"
                altText="Logo Mail"
              />

            </div>
          </div>
        </footer>

    </main>


  );
}

export default App;




