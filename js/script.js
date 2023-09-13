document.addEventListener("DOMContentLoaded", () => {
    const reloj = document.getElementById("reloj");
    const temporizadorBtn = document.getElementById("temporizador-btn");
    const cambiarZonaBtn = document.getElementById("cambiar-zona-btn");
    const analogicoBtn = document.getElementById("reloj-analogico-btn");

    let zonaHoraria = "America/Argentina/Buenos_Aires"; // Zona horaria por defecto

    function actualizarReloj() {
        const horaActual = new Date().toLocaleTimeString("es-AR", { timeZone: zonaHoraria });
        reloj.textContent = horaActual;
    }

    
    setInterval(actualizarReloj, 1000);

  
    temporizadorBtn.addEventListener("click", () => {
        window.location.href = "temporizador.html";
    });
     analogicoBtn. addEventListener("click", () => {
        window.location.href = "analogico.html";
    });

    
    cambiarZonaBtn.addEventListener("click", () => {
        zonaHoraria = prompt("Ingrese una zona horaria (ejemplo: America/New_York):");
        actualizarReloj(); 
    });

    actualizarReloj();
});
