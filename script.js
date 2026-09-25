const boton = document.getElementById("boton");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function () {

    mensaje.classList.remove("oculto");

    boton.innerText = "❤️ Te quiero ❤️";

    crearCorazones(25);
});


function crearCorazones(cantidad) {

    const contenedor = document.querySelector(".corazones");

    for (let i = 0; i < cantidad; i++) {

        const corazon = document.createElement("div");

        corazon.classList.add("corazon-flotante");

        corazon.innerHTML = "❤️";

        corazon.style.left = Math.random() * 100 + "%";

        corazon.style.fontSize =
            (15 + Math.random() * 30) + "px";

        corazon.style.animationDuration =
            (4 + Math.random() * 4) + "s";

        contenedor.appendChild(corazon);

        setTimeout(() => {
            corazon.remove();
        }, 8000);
    }
}


// Corazones que aparecen automáticamente

setInterval(() => {

    const contenedor = document.querySelector(".corazones");

    const corazon = document.createElement("div");

    corazon.classList.add("corazon-flotante");

    corazon.innerHTML = "💕";

    corazon.style.left = Math.random() * 100 + "%";

    corazon.style.fontSize =
        (15 + Math.random() * 20) + "px";

    corazon.style.animationDuration =
        (5 + Math.random() * 4) + "s";

    contenedor.appendChild(corazon);

    setTimeout(() => {
        corazon.remove();
    }, 9000);

}, 1000);