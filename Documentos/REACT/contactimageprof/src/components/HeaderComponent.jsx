import React from 'react'
import { Link } from 'react-router-dom';
import "./HeaderComponent.css"

function HeaderComponent() {
  return (
    <header className="header">
        <h2 className="title">Landing Page</h2>
        <nav>
            <ul className='nav-list'>
                <li>
                    <Link to='/' className='link'>
                        Home
                    </Link>
                    
                </li>
                <li>
                    <Link to='/notes' className='link'>
                        Notes
                    </Link>
                </li>
                <li>
                    <Link to='/userpage' className='link'>
                        Registre
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default HeaderComponent

/*
Suneo

Atrevido es lo que vengo a cantar.

Cuando un gorila rompe lo de los demás,

una gran faena que te va a fastidiar,

pero se le puede perdonar.

Gigante

Lo mío es mío, y lo tuyo también,

y este zorro no me está tratando bien.

Así que de los pelos le voy a coger,

picadillo yo le voy a hacer.

Suneo

Te da miedo, pero si le adulas ya verás

Gigante

él es astuto, pero de sus cosas disfrutarás.

Suneo y Gigante

Pelear es nuestro sino,

pero al final nos vamos a arreglar. Hmm, sí...

¡Oh, oh, oh, oh, oh, oh, oh, oh, oh!

¡LOS DOS!

Gigante

El gorila que vigila y el zorro,

Suneo y Gigante

¡LOS DOS!

Juntos siempre le echamos mucho morro.

¡Bailar!

¡Los amigos del alma vamos a cantar!*/