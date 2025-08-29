const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000; // Permitir configurar el puerto a través de una variable de entorno

// Habilitar CORS para permitir solicitudes de otros orígenes
app.use(cors());
// Parsear el cuerpo de las solicitudes JSON
app.use(bodyParser.json());

// Conexión a MongoDB
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/feedback'; // Utilizar variable de entorno para la URI de MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a MongoDB...'))
  .catch(err => {
    console.error('Error al conectar a MongoDB:', err);
    process.exit(1); // Salida del proceso si ocurre un error en la conexión
  });

// Endpoint principal que devuelve un mensaje de bienvenida
app.get('/', (req, res) => {
  res.send('API de Feedback de Usuario');
});

// Iniciar el servidor y escuchar en el puerto definido
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});