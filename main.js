let elevador = (function (pisosT) {
    pisosTotales = pisosT;
    pisoActual = 1;
    estadoPuerta = true;
    function subir() {
        if (!estadoPuerta && pisoActual < pisosTotales) {
            pisoActual++
        }
    }
    function bajar() {
        if (!estadoPuerta && pisoActual > 0) {
            pisoActual--
        }
    }
    function abrir() {
        if (!estadoPuerta) {
            estadoPuerta = true;
        }
    }
    function cerrar() {
        if (estadoPuerta) {
            estadoPuerta = false;
        }
    }
    function irApiso(destino) {
        console.log(`La puerta esta ${estadoPuerta?'abierta':'cerrada'}`)
        cerrar();
        console.log(`La puerta se ha ${estadoPuerta?'abierto':'cerrado'}`)
        if (pisoActual < destino && pisosTotales > destino) {
            while (pisoActual != destino) {
                subir();
            }
        } else if (pisoActual > destino && 1 <= destino) {
            while (pisoActual != destino) {
                bajar();
            }
        }
        abrir();
    }
    function estado() {
        return `Estas en ${pisoActual} / ${pisosTotales}, la puerta esta ${estadoPuerta?'abierta':'cerrada'}`
    }
    return {
        abrirPuerta: abrir,
        cerrarPuerta: cerrar,
        irAPiso: irApiso,
        estado: estado
    };
})(9);
elevador.irAPiso(5);
console.log(elevador.estado());
elevador.irAPiso(2);
console.log(elevador.estado());
elevador.irAPiso(10);
console.log(elevador.estado());