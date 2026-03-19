const express = require("express");
const app = express();

app.use(express.json());

let usuarios = [];

app.post("/registro", (req, res) => {
    usuarios.push(req.body);
    res.send("Usuario guardado");
});

app.get("/usuarios", (req, res) => {
    res.json(usuarios);
});

app.listen(3000, () => {
    console.log("Servidor corriendo en puerto 3000");
});