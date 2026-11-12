import React from 'react'

import "./FooterComponent.css"

function FooterComponent() {
  return (
    <footer className='Pie'>
            <div className='divPie'>
                <div className='footer-col'>
                    <h3>MiProyecto</h3>
                </div>
                <div className='footer-col'>
                    <h4>Enlaces</h4>
                    <ul>
                        <li><a href="#inicio">Inicio</a></li>
                        <li><a href="#proyectos">Proyectos</a></li>
                        <li><a href="#sobre-mi">Sobre mí</a></li>
                        <li><a href="#contacto">Contacto</a></li>
                    </ul>
                </div>
                <div className='footer-col'>
                    <h4>Sígueme</h4>
                    <div className='social-links'>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </div>
                </div>
            </div>
        </footer>
  )
}

export default FooterComponent