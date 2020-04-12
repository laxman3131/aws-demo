const express = require('express')
const AWS = require('./aws');
const lambda = new AWS.Lambda({region: "us-east-2"});

const app = express()
const port = 3000

app.get('/lambda', async (req, res, next) => {
  
  let resp = "";
  lambda.invoke({ 
    FunctionName: "test-hello-world",
    // ClientContext: JSON.stringify({Key: "Context passed from client (EC2) to lambda"}),
    InvocationType: "RequestResponse",
    Payload: Buffer.from(JSON.stringify({ Key: "This is payload"}))
  }).promise()
    .then(data => { res.send(JSON.stringify(data))})
    .catch(err => { next(JSON.stringify(err))})
});

const prom = () => new Promise((res, rej) => setTimeout(() => {res()}, 1000));

app.get("/", (req, res, next) => {
  
  prom()
    .then(() => res.send("Hello world from EC2 !!"))
    .catch(next)
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
