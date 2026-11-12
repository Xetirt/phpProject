import React, { useState } from 'react'
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';

function UserPage() {

        const [user, usuPer] = useState(null);
        const [usernameInput, setUsernameInput] = useState('');
        const [emailInput, setemailInput] = useState('');

        const handleLogin = (e) =>{
            e.preventDefault();
            if(usernameInput.trim() && emailInput.trim()){
                setUser({username: usernameInput, email: emailInput});
            } else {
                alert("Introdueix un username i email valids");
            }

        const handleLogout = () =>{
            setUser(null);
            setUsernameInput('');
            setemailInput('');
        };
};

  return (
    <>
    <HeaderComponent />
            <div className="container mt-4">
                <h2>Portal de Acceso - Información Pública y Privada</h2>

                {!user ? (
                    <div className="card p-4 mb-4 bg-light">
                        <h4>Iniciar Sesión</h4>
                        <form onSubmit={handleLogin}>
                            <div className="mb-3">
                                <label className="form-label">Username:</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    value={usernameInput} 
                                    onChange={(e) => setUsernameInput(e.target.value)}
                                    placeholder="Tu username"
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email:</label>
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    value={emailInput} 
                                    onChange={(e) => setEmailInput(e.target.value)}
                                    placeholder="tu@email.com"
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">Autenticarse</button>
                        </form>

                        <hr className="my-4" />

                        <div className="alert alert-info">
                            <h5>Contenido Público disponible:</h5>
                            <ul>
                                <li><strong>Profesionales (Users):</strong> Datos públicos visibles.</li>
                                <li><strong>Álbumes y Fotos:</strong> Contenido multimedia accesible.</li>
                                <li><strong>Posts Publicados:</strong> Visibles <em>(Nota: Los comentarios están ocultos para no autenticados)</em>.</li>
                            </ul>
                        </div>
                    </div>
                ) : (
                    <div className="card p-4 mb-4 border-success">
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <h4>Bienvenido, {user.username}</h4>
                                <p className="text-muted">Email: {user.email}</p>
                            </div>
                            <button onClick={handleLogout} className="btn btn-outline-danger">Cerrar Sesión</button>
                        </div>
                        <hr />
                        <div className="alert alert-success">
                            <p>¡Estás autenticado! Ahora tienes acceso completo a la plataforma (incluyendo comentarios de posts y gestión privada).</p>
                        </div>
                    </div>
                )}

            </div>
            <FooterComponent />
        </>
  )
}

export default UserPage