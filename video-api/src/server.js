const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

// Crear una instancia de Express.js
const app = express();
const port = 3000; // Puerto en el que se ejecutará el servidor
const videoDirectory = path.join(__dirname, '..', 'public', 'videos');

app.use(cors());
app.use(express.static('public'));

// Servir archivos estáticos de la carpeta 'video-app/public'
app.use(express.static(path.join(__dirname, '..', '..', 'video-app', 'dist')));

app.get('/', (req, res) => {
  // Si la ruta raíz se solicita, sirve el archivo HTML principal de Vue.js
  res.sendFile(path.join(__dirname, '..', '..', 'video-app', 'dist', 'index.html'));
});

// Ruta para servir los segmentos de video
app.get('/video/:segment', (req, res) => {
    const segmentNumber = req.params.segment;
    const segmentPath = path.join(videoDirectory, `output_${segmentNumber}.mp4`);
  
    // Verifica si el archivo del segmento existe
    fs.access(segmentPath, fs.constants.F_OK, (err) => {
      if (err) {
        res.status(404).send('Segment not found');
      } else {
        const videoStream = fs.createReadStream(segmentPath);
        videoStream.pipe(res);
      }
    });
  });

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
