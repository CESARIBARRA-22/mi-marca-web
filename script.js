// FORMULARIO
const form = document.getElementById("formRegistro");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let inputs = document.querySelectorAll("#formRegistro input");

        let usuario = {
            nombre: inputs[0].value,
            cedula: inputs[1].value,
            departamento: inputs[2].value,
            municipio: inputs[3].value,
            direccion: inputs[4].value
        };

        let resultado = document.getElementById("resultado");
        if (resultado) {
            resultado.innerHTML = `<p>${usuario.nombre} registrado</p>`;
        }

        this.reset();
    });
}


// 🛒 VARIABLES CARRITO (CON GUARDADO)
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let total = JSON.parse(localStorage.getItem("total")) || 0;


// 💾 GUARDAR
function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
    localStorage.setItem("total", total);
}


// 🔄 ACTUALIZAR UI
function actualizarCarritoUI() {
    let lista = document.getElementById("listaCarrito");

    if (lista) {
        lista.innerHTML = carrito.map((item, i) => `
            <li>
                ${item.nombre} - $${item.precio}
                <button onclick="eliminarProducto(${i})" class="boton-rojo">🗑️</button>
            </li>
        `).join("");
    }

    function eliminarProducto(index) {
    if (confirm("¿Eliminar este producto?")) {
        total -= carrito[index].precio;
        carrito.splice(index, 1);

        guardarCarrito();
        actualizarCarritoUI();
    }
}
    let totalSpan = document.getElementById("total");
    if (totalSpan) {
        totalSpan.innerText = total;

        totalSpan.classList.add("animar");
        setTimeout(() => totalSpan.classList.remove("animar"), 300);
    }

    let contador = document.getElementById("contadorCarrito");
    if (contador) {
        contador.innerText = carrito.length;

        contador.classList.add("animar-contador");
        setTimeout(() => contador.classList.remove("animar-contador"), 300);
    }
}


// 🌠 AÑADIR CON ANIMACIÓN
function agregarConAnimacion(boton, nombre, precio) {
    let img = boton.parentElement.querySelector("img");
    let rect = img.getBoundingClientRect();

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

    guardarCarrito();
    actualizarCarritoUI();
}

function vaciarCarrito() {
    carrito = [];
    total = 0;

    guardarCarrito();
    actualizarCarritoUI();
}


// ❌ ELIMINAR PRODUCTO
function eliminarProducto(index) {
    if (carrito[index]) {
        total -= carrito[index].precio;
        carrito.splice(index, 1);

        guardarCarrito();
        actualizarCarritoUI();
    }
}


// 📲 WHATSAPP PRODUCTOS
function comprarWhatsApp(producto, imagen) {
    let numero = "573128779750";
    let urlImagen = window.location.origin + "/" + imagen;

    let mensaje = `Hola, quiero comprar ${producto}\n${urlImagen}`;

    window.open("https://wa.me/" + numero + "?text=" + encodeURIComponent(mensaje));
}


// 📲 BOTÓN WHATSAPP
function irWhatsApp() {
    let numero = "573128779750";
    let mensaje = "Hola, quiero información sobre los productos 🍫";

    let url = "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensaje);

    window.open(url, "_blank");
}


// 📧 CORREO (ARREGLADO)
function irCorreo() {
    let correo = "cesaribarragonzalez508@gmail.com";
    let asunto = "Consulta sobre productos Chocofest";
    let mensaje = "Hola, quiero más información sobre sus productos.";

    let mailtoLink = `mailto:${correo}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(mensaje)}`;

    window.location.href = mailtoLink;
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


// 🔥 DROPDOWN CLICK
document.querySelectorAll(".dropdown > a").forEach(menu => {
    menu.addEventListener("click", function(e){
        e.preventDefault();
        let submenu = this.nextElementSibling;
        submenu.style.display = submenu.style.display === "block" ? "none" : "block";
    });
});


// ✨ SCROLL ANIMACIÓN
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


// 🔥 CARGA INICIAL
window.addEventListener("load", () => {
    actualizarCarritoUI();
    mostrarElementos();
});
