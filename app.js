const express = require('express');
const app = express();

// tell our server where to listen

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/index.html');
})
app.get('/Login', (req, res) => {
    res.sendFile(__dirname+'/login.html');
    res.send({data: 'message'})
})
app.listen(3000, () => {
    console.log("Port 3000 Listening!");
})