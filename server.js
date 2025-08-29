const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

// Habilitar CORS para permitir solicitudes de otros orígenes
app.use(cors());
// Parsear el cuerpo de las solicitudes JSON
app.use(bodyParser.json());

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/feedback', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a MongoDB...'))
  .catch(err => console.log(err));

// Endpoint principal que devuelve un mensaje de bienvenida
app.get('/', (req, res) => {
  res.send('API de Feedback de Usuario');
});

// Iniciar el servidor y escuchar en el puerto definido
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});