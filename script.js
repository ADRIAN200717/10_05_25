function verificarNombre() {
    let nombreIngresado = document.getElementById("nombreMama").value.trim().toLowerCase();
    
    
    let nombresValidos = ["kathia", "kathia Romero", "kathia Elizabeth Romero Rodriguez", "kathia", "kathy"];

    if (nombresValidos.includes(nombreIngresado)) {
        window.location.href = "sorpresa.html"; 
    } else {
        alert("¡Hola! Parece que tu nombre no está registrado para esta sorpresa, igual deseo que pases un gran dia junto a tus seres queridos 💖");
    }
}
