// FORMULARIO
document.getElementById("formRegistro")?.addEventListener("submit", function (e) {
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


// 🛒 VARIABLES CARRITO
let carrito = [];
let total = 0;


// 🌠 AÑADIR CON ANIMACIÓN
function agregarConAnimacion(boton, nombre, precio) {
    let img = boton.parentElement.querySelector("img");
    let rect = img.getBoundingClientRect();

    // estrella fugaz
    let estrella = document.createElement("div");
    estrella.classList.add("estrella");
    estrella.style.left = rect.left + "px";
    estrella.style.top = rect.top + "px";
    document.body.appendChild(estrella);

    setTimeout(() => estrella.remove(), 800);

    añadirAlCarrito(nombre, precio);
}


// 🛒 AÑADIR AL CARRITO
function añadirAlCarrito(nombre, precio) {
    carrito.push({nombre, precio});
    total += precio;

    // actualizar lista
    let lista = document.getElementById("listaCarrito");
    if (lista) {
        lista.innerHTML = carrito.map(item => `<li>${item.nombre} - $${item.precio}</li>`).join("");
    }

    // animación total
    let totalSpan = document.getElementById("total");
    if (totalSpan) {
        totalSpan.innerText = total;
        totalSpan.classList.add("animar");
        setTimeout(() => totalSpan.classList.remove("animar"), 300);
    }

    // contador carrito
    let contador = document.getElementById("contadorCarrito");
    if (contador) {
        contador.innerText = carrito.length;
    }
}


// 📲 WHATSAPP PRODUCTOS
function comprarWhatsApp(producto, imagen) {
    let numero = "573128779750";
    let urlImagen = window.location.origin + "/" + imagen;

    let mensaje = `Hola, quiero comprar ${producto}\n${urlImagen}`;

    window.open("https://wa.me/" + numero + "?text=" + encodeURIComponent(mensaje));
}


// 📲 BOTÓN WHATSAPP CONTACTO
function irWhatsApp() {
    let numero = "573128779750";
    window.open("https://wa.me/" + numero);
}


// 📧 CORREO
function irCorreo() {
    window.open("mailto:cesaribarragonzalez508@gmail.com");
}


// 🛒 ENVIAR PEDIDO
function enviarPedido() {
    let mensaje = "Hola quiero comprar:\n";

    carrito.forEach(p => {
        mensaje += `${p.nombre} - $${p.precio}\n`;
    });

    mensaje += `Total: $${total}`;

    window.open(`https://wa.me/573128779750?text=${encodeURIComponent(mensaje)}`);
}


// 🔄 NAVEGACIÓN ENTRE SECCIONES
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


// ✨ ANIMACIÓN SCROLL
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

// ejecutar al cargar
mostrarElementos();
