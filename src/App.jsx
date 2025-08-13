import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import './App.css'
import miImagen from './assets/imagenDePortada.jpg'
import guests from './guests.json'
import Invitacion from './Invitacion'

function Home() {
  const [cedula, setCedula] = useState("");
  const [notFound, setNotFound] = useState(false);
  const navigate = useNavigate();

  const buscarInvitado = () => {
    const encontrado = guests.find(g => g.cedula === cedula.trim());
    if (encontrado) {
      setNotFound(false);
      navigate("/invitacion", { state: { guest: encontrado } });
    } else {
      setNotFound(true);
    }
  };

  const cerrarModal = () => setNotFound(false);

  return (
    <div className="App" style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      <img
        src={miImagen}
        alt="Fondo"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          objectFit: 'cover',
          zIndex: 0,
          filter: 'brightness(0.5) blur(2px)'
        }}
      />
      {notFound && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, width: '100vw', height: '100vh',
          background: 'rgba(0,0,0,0.5)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 100
        }}>
          <div style={{
            background: '#fff',
            color: '#333',
            padding: '2rem',
            borderRadius: '16px',
            textAlign: 'center',
            minWidth: '250px'
          }}>
            <h2 style={{ marginBottom: 16 }}>Lo siento</h2>
            <p>Documento incorrecto</p>
            <button
              onClick={cerrarModal}
              style={{
                marginTop: 24,
                padding: '10px 24px',
                borderRadius: '8px',
                border: 'none',
                background: '#ffb347',
                color: '#333',
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
      <header
        className="App-header"
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          color: '#fff',
          textShadow: '0 2px 8px rgba(0,0,0,0.7)'
        }}
      >
        <div
          style={{
            background: 'rgba(0,0,0,0.5)',
            borderRadius: '20px',
            padding: '40px 30px',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
            backdropFilter: 'blur(4px)',
            maxWidth: '350px',
            width: '100%',
            textAlign: 'center'
          }}
        >
          <h1 style={{ fontFamily: 'serif', fontWeight: 700, marginBottom: 16, fontSize: 32 }}>Bienvenido a mi Boda</h1>
          <p style={{ marginBottom: 24, fontSize: 18 }}>Ingresa tu cédula para verificar tu invitación</p>
          <input
            type="text"
            value={cedula}
            onChange={(e) => setCedula(e.target.value)}
            placeholder="Cédula"
            style={{
              padding: '12px',
              borderRadius: '8px',
              border: 'none',
              width: '100%',
              marginBottom: '16px',
              fontSize: '16px',
              outline: 'none',
              boxSizing: 'border-box',
              background: 'rgba(156, 163, 175, 0.2)'
            }}
          />
          <button
            onClick={buscarInvitado}
            style={{
              padding: '12px 0',
              borderRadius: '8px',
              border: 'none',
              background: 'linear-gradient(90deg, #ffb347 0%, #ffcc33 100%)',
              color: '#333',
              fontWeight: 700,
              fontSize: '16px',
              width: '100%',
              cursor: 'pointer',
              transition: 'background 0.3s'
            }}
          >
            Buscar
          </button>
        </div>
      </header>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/invitacion" element={<Invitacion />} />
      </Routes>
    </Router>
  );
}

export default App;