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

    // Mostrar en pantalla (extra útil)
    document.getElementById("resultado").innerHTML = `
        <p><strong>Nombre:</strong> ${usuario.nombre}</p>
        <p><strong>Cédula:</strong> ${usuario.cedula}</p>
    `;

    alert("Usuario registrado correctamente");

    this.reset();
});


function comprarWhatsApp(producto, imagen) {
    let numero = "573128779750";

    // Detecta si estás en local o en GitHub
    let urlBase = window.location.origin;
    let urlImagen = urlBase + "/" + imagen;

    let mensaje = `Hola, quiero comprar ${producto}\nMira este producto: ${urlImagen}`;

    let url = "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensaje);

    window.open(url, "_blank");
}
function irWhatsApp() {
    let numero = "573128779750";
    let mensaje = "Hola, quiero información sobre tus productos";

    let url = "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensaje);
    window.open(url, "_blank");
}

function irCorreo() {
    window.location.href = "mailto:cesaribarragonzalez508@gmail.com";
}
