
document.addEventListener("DOMContentLoaded", () => {
    const temporizadorDisplay = document.getElementById("temporizador-display");
    const temporizadorInput = document.getElementById("temporizador-input");
    const startTemporizadorButton = document.getElementById("startTemporizador");

    let temporizador;
    let tiempoRestante = 0;

    function actualizarDisplay() {
        const minutos = Math.floor(tiempoRestante / 60).toString().padStart(2, "0");
        const segundos = (tiempoRestante % 60).toString().padStart(2, "0");
        temporizadorDisplay.textContent = `${minutos}:${segundos}`;
    }

    startTemporizadorButton.addEventListener("click", () => {
        const minutosInput = parseInt(temporizadorInput.value, 10);
        if (!isNaN(minutosInput) && minutosInput > 0) {
            tiempoRestante = minutosInput * 60;
            actualizarDisplay();

            temporizador = setInterval(() => {
                if (tiempoRestante <= 0) {
                    clearInterval(temporizador);
                    alert("¡Tiempo terminado!");
                } else {
                    tiempoRestante--;
                    actualizarDisplay();
                }
            }, 1000);
        }
    });
});

    document.addEventListener("DOMContentLoaded", () => {
       
    
        let alarmaAudio = document.getElementById("alarmaAudio"); 
        let alarmaActiva = false;
    
        function activarAlarma() {
            alarmaAudio.play();
            alert("¡Alarma activada!");
        }
    
        startTemporizadorButton.addEventListener("click", () => {
            const minutosInput = parseInt(temporizadorInput.value, 10);
            if (!isNaN(minutosInput) && minutosInput > 0) {
                tiempoRestante = minutosInput * 60;
                actualizarDisplay();
    
                temporizador = setInterval(() => {
                    if (tiempoRestante <= 0) {
                        clearInterval(temporizador);
                        if (!alarmaActiva) {
                            alarmaActiva = true;
                            activarAlarma();
                        }
                    } else {
                        tiempoRestante--;
                        actualizarDisplay();
                    }
                }, 1000);
                
                // Mostrar el botón de detener alarma
                document.getElementById("detenerAlarma").style.display = "block";
            }
        });
    
        // Botón para detener la alarma
        document.getElementById("detenerAlarma").addEventListener("click", () => {
            alarmAudio.pause(); // Pausar el audio de la alarma
            alarmAudio.currentTime = 0; // Reiniciar la reproducción al principio
            alarmaActiva = false;
            document.getElementById("detenerAlarma").style.display = "none";
        });
    });
    