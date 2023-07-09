const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const router = require('./router');

const dotenv = require('dotenv');

dotenv.config();

const uri = String(process.env.MONGO_URI);
const port = Number(process.env.PORT);
const socket_port = Number(process.env.SOCKET_PORT);
const connectOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

mongoose
  .connect(uri, connectOptions)
  .then()
  .catch((err) => console.log('Error:' + err));

mongoose.connection.once('open', () => console.log('Connected to MongoDB successfully...'));

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// router
app.use(router);

let logStream = fs.createWriteStream(path.join(__dirname, 'file.log'), {
  flags: 'a',
});

const net = require('net');

const server = net.createServer(socket => {
  console.log('Camera connected.');

  // Handle incoming data from the camera
  socket.on('data', data => {
    const requestData = JSON.parse(data.toString());
    const { cameraId, detected, numberPlate } = requestData;

    console.log('Received data from camera:');
    console.log('Camera ID:', cameraId);
    console.log('Detected:', detected);
    console.log('Number Plate:', numberPlate);

    // handle
  });


  socket.on('end', () => {
    console.log('Camera disconnected.');
  });

  socket.on('error', err => {
    console.error('Socket error:', err);
  });
});


app.use(morgan('combined', { stream: logStream }));
app.use(morgan('combined'));

app.listen(port, () => console.log(`Parkify Server running at http://localhost:${port}`));
server.listen(socket_port, () => console.log('Parkify Socket server running at http://localhost:8080'));