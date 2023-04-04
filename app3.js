// const mqtt = require('mqtt');

// const serverUri = 'mqtt://localhost:1883';
// const topic = 'your_topic';

// const client = mqtt.connect(serverUri);

// client.on('connect', () => {
//   console.log('Connected');
//   client.subscribe(topic, (err) => {
//     if (!err) {
//       console.log('Subscribed to topic');
//     } else {
//       console.log('Failed to subscribe to topic');
//     }
//   });
// });

// client.on('message', (topic, message) => {
//   console.log(`Received message: ${message.toString()}`);
// });

// client.on('error', (error) => {
//   console.log(`Error: ${error}`);
// });

// client.on('close', () => {
//   console.log('Disconnected');
// });

const mqtt = require('mqtt');
const brokerUrl = 'mqtt://localhost:1883';
const client = mqtt.connect(brokerUrl);

client.on('connect', () => {
  console.log('Connected');
});

client.on('error', (error) => {
  console.log(`Failed to connect: ${error}`);
});
