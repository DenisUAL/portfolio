const express = require('express');
const server = express();
const volleyball = require('volleyball');
const bodyParser = require('body-parser');
const {resolve} = require('path');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

server
  .use(volleyball)
  .use(bodyParser.urlencoded({extended: true}))
  .use(bodyParser.json())
  .use(express.static(resolve(__dirname, 'public')))
  .get('/', (_, res) => res.sendFile(resolve(__dirname, '..', 'build', 'index.html')))
  .post('/send', (req, res) => {
    sgMail.send(req.body)
  })
  .listen(process.env.PORT || 1337, () => {
    console.log(`Listening`)
  })

