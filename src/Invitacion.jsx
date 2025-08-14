import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import miImagen from './assets/imagenDePortada.jpg';

function Invitacion() {
  const location = useLocation();
  const navigate = useNavigate();
  const guest = location.state?.guest;
  const [mensaje, setMensaje] = useState("");

  if (!guest) {
    navigate("/");
    return null;
  }

  const registrarAsistencia = async (asistira) => {
    const nuevaRespuesta = { nombre: guest.nombre, cedula: guest.cedula, respuesta: asistira ? "Sí" : "No" };
    await fetch('http://localhost:4000/api/respuesta', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(nuevaRespuesta)
    });

    if (asistira) {
      setMensaje("¡Te esperamos!");
    } else {
      setMensaje("Lamentamos no tenerte en nuestra celebración, muchas gracias por avisar.");
      setTimeout(() => navigate("/"), 2500);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(90deg, #f8fafc 0%, #e0e7ef 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem"
      }}
    >
      <div
        style={{
          background: "rgba(255,255,255,0.95)",
          borderRadius: "24px",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
          maxWidth: 900,
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "2rem",
          padding: "2.5rem 2rem"
        }}
      >
        {/* Texto y botones */}
        <div style={{ flex: 1, minWidth: 260 }}>
          <div style={{ color: "#334155", letterSpacing: 2, fontWeight: 600, fontSize: 18, marginBottom: 8 }}>
            13/12/2025
          </div>
          <h1 style={{
            fontFamily: "serif",
            fontWeight: 700,
            fontSize: 48,
            color: "#1e293b",
            marginBottom: 16,
            lineHeight: 1.1
          }}>
            ¡Estás invitado, {guest.nombre}!
          </h1>
          <p style={{
            color: "#334155",
            fontSize: 18,
            marginBottom: 32,
            maxWidth: 400
          }}>
            Aquí irá un resumen de nuestro amor, una historia especial que pronto vamos a escribir juntos para compartirla contigo en este día tan importante.
          </p>
          {mensaje ? (
            <div style={{ color: "#1e293b", fontWeight: 600, fontSize: 20, marginTop: 24 }}>{mensaje}</div>
          ) : (
            <div style={{ display: "flex", gap: "1rem" }}>
              <button
                style={{
                  padding: "12px 32px",
                  borderRadius: "8px",
                  border: "none",
                  background: "#fbbf24",
                  color: "#1e293b",
                  fontWeight: 700,
                  fontSize: "16px",
                  cursor: "pointer",
                  boxShadow: "0 2px 8px rgba(251,191,36,0.15)",
                  transition: "background 0.2s"
                }}
                onClick={() => registrarAsistencia(true)}
              >
                Sí asistiré
              </button>
              <button
                style={{
                  padding: "12px 32px",
                  borderRadius: "8px",
                  border: "1px solid #1e293b",
                  background: "transparent",
                  color: "#1e293b",
                  fontWeight: 700,
                  fontSize: "16px",
                  cursor: "pointer",
                  transition: "background 0.2s"
                }}
                onClick={() => registrarAsistencia(false)}
              >
                No asistiré
              </button>
            </div>
          )}
        </div>
        {/* Imagen */}
        <div style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minWidth: 260
        }}>
          <div style={{
            border: "6px solid #e0e7ef",
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 4px 16px 0 rgba(31, 38, 135, 0.10)",
            background: "#fff"
          }}>
            <img
              src={miImagen}
              alt="Pareja"
              style={{
                width: 320,
                height: 380,
                objectFit: "cover",
                display: "block"
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Invitacion;