const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const filePath = './src/Respuesta.json';

app.use(cors());
app.use(express.json());

app.post('/api/respuesta', (req, res) => {
  const nuevaRespuesta = req.body;
  let respuestas = [];
  if (fs.existsSync(filePath)) {
    respuestas = JSON.parse(fs.readFileSync(filePath, 'utf8') || '[]');
  }
  // Actualiza si ya existe la cédula
  respuestas = respuestas.filter(r => r.cedula !== nuevaRespuesta.cedula);
  respuestas.push(nuevaRespuesta);
  fs.writeFileSync(filePath, JSON.stringify(respuestas, null, 2));
  res.json({ ok: true });
});

app.listen(4000, () => console.log('Servidor backend en http://localhost:4000'));