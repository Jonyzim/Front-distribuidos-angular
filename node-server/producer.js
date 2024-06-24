const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9092']
});

const producer = kafka.producer();

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post('/login', async (req, res) => {
  try {
    const { cpf, password } = req.body;

    // Validate user credentials (you can add your authentication logic here)

    // Produce a Kafka message with user login information
    await producer.connect();
    await producer.send({
      topic: 'user-logins',
      messages: [
        { value: JSON.stringify({ cpf, password }) }
      ],
    });

    await producer.disconnect();

    res.status(200).send({ message: 'Login successful' });
  } catch (error) {
    console.error('Error processing login:', error);
    res.status(500).send({ error: 'Internal server error' });
  }
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
