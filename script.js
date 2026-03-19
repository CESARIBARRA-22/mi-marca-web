document.getElementById("formRegistro").addEventListener("submit", function (e) {
    e.preventDefault();

    let inputs = document.querySelectorAll("#formRegistro input");

    let usuario = {
        nombre: inputs[0].value,
        cedula: inputs[1].value,
        departamento: inputs[2].value,
        municipio: inputs[3].value,
        direccion: inputs[4].value
    };

    console.log(usuario);

    alert("Usuario registrado correctamente");

    this.reset();
});
