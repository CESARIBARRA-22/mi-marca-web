document.getElementById("formRegistro").addEventListener("submit", async function (e) {
    e.preventDefault();

    let inputs = document.querySelectorAll("#formRegistro input");

    let usuario = {
        nombre: inputs[0].value,
        cedula: inputs[1].value,
        departamento: inputs[2].value,
        municipio: inputs[3].value,
        direccion: inputs[4].value
    };

    try {
        let respuesta = await fetch("http://localhost:3000/registro", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(usuario)
        });

        let texto = await respuesta.text();
        alert(texto);

        this.reset();

    } catch (error) {
        alert("Error al conectar con el servidor");
        console.error(error);
    }
});
