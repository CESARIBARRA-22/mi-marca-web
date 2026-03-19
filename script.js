// FORMULARIO
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

    document.getElementById("resultado").innerHTML = `
        <p>${usuario.nombre} registrado</p>
    `;

    this.reset();
});


// WHATSAPP PRODUCTOS
function comprarWhatsApp(producto, imagen) {
    let numero = "573128779750";
    let urlImagen = window.location.origin + "/" + imagen;

    let mensaje = `Hola, quiero comprar ${producto}\n${urlImagen}`;

    window.open("https://wa.me/" + numero + "?text=" + encodeURIComponent(mensaje));
}


// BOTÓN WHATSAPP CONTACTO
function irWhatsApp() {
    let numero = "573128779750";
    window.open("https://wa.me/" + numero);
}


// BOTÓN CORREO (ARREGLADO)
function irCorreo() {
    window.open("mailto:cesaribarragonzalez508@gmail.com");
}


// NAVEGACIÓN ENTRE SECCIONES
function mostrarSeccion(id) {

    let secciones = ["inicio", "menuProductos", "chocolate", "contacto"];

    secciones.forEach(sec => {
        let elemento = document.getElementById(sec);
        if (elemento) {
            elemento.style.display = "none";
        }
    });

    document.getElementById(id).style.display = "block";
}
// ANIMACIÓN AL HACER SCROLL
const elementos = document.querySelectorAll(".producto, .registro, .contacto, .carrito");

function mostrarElementos() {
    let alturaPantalla = window.innerHeight;

    elementos.forEach(el => {
        let posicion = el.getBoundingClientRect().top;

        if (posicion < alturaPantalla - 100) {
            el.classList.add("mostrar");
        }
    });
}

window.addEventListener("scroll", mostrarElementos);

// Ejecutar al cargar
mostrarElementos();
