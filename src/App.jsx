import { useState } from 'react'
import './App.css'
import miImagen from './assets/imagenDePortada.jpg'
import './App.css'; // ya está importado arriba

function App() {
  const [cedula, setCedula] = useState("");
  const [guest, setGuest] = useState(null);
  const [notFound, setNotFound] = useState(false);

  const buscarInvitado = () => {
    // Aquí luego conectaremos con Firebase
    console.log("Buscando invitado con cédula:", cedula);
  };
  return (
    <div className="App" style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      {/* Imagen de fondo */}
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
      {/* Contenido principal */}
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
          <h1 style={{ fontFamily: 'serif', fontWeight: 700, marginBottom: 16, fontSize: 32 }}>Bienvenido a la Fiesta</h1>
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
              boxSizing: 'border-box'
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
          {notFound && (
            <p style={{ color: '#ffb347', marginTop: 16 }}>Invitado no encontrado</p>
          )}
        </div>
      </header>
    </div>
  );
}
export default App;
// Aquí puedes agregar más lógica para manejar el estado del invitado y la búsqueda en Firebase                   