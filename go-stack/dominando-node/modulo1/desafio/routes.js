const express = require('express');


const server = express();

server.use(express.json());

server.get("/teste", (req, res) => {
    return res.send("server funcionando");
});


server.listen(3000);