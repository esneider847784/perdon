
// CAMBIA ESTE NÚMERO POR TU WHATSAPP
const miNumero = "573009984175";

function responder(opcion) {

    let mensaje = "";

    if (opcion === "si") {

        mensaje = "Sí, te perdono ❤️";

        document.getElementById("respuesta").textContent =
            "Gracias por darme otra oportunidad ❤️";

    } else {

        mensaje = "Necesito pensarlo 🥺";

        document.getElementById("respuesta").textContent =
            "Lo entiendo. Tómate tu tiempo ❤️";
    }

    // Crear el mensaje para WhatsApp
    const mensajeCodificado = encodeURIComponent(mensaje);

    const url =
        "https://wa.me/" +
        miNumero +
        "?text=" +
        mensajeCodificado;

    // Abrir WhatsApp
    window.open(url, "_blank");
}

