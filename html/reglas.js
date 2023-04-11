var turno = "X";
var jugando = true;
var movimientos = 0;

function jugar(id) {
    if (jugando) {
        llenar(id);
        validacion();
    }

    if (movimientos == 9 && jugando) {
        jugando = false;
        informacion("¡¡Empate!!");
    }
}
function llenar(id) {
    var elemento = document.getElementById(id);
    var val = document.getElementById(id).innerHTML;

    if (val !== "X" && val !== "0") {
        elemento.innerHTML = turno;
        elemento.classList.add("lleno");
        if (turno == "X") {
            turno = "0";
        }
        else {
            turno = "X";
        }
        informacion("Es el turno de " + turno);
        movimientos++;
    }

}

function validacion() {
    validarLinea("c1", "c2", "c3");
    validarLinea("c4", "c5", "c6");
    validarLinea("c7", "c8", "c9");
    validarLinea("c1", "c4", "c7");
    validarLinea("c2", "c5", "c8");
    validarLinea("c3", "c6", "c9");
    validarLinea("c1", "c5", "c9");
    validarLinea("c3", "c5", "c7");

}
function validarLinea(a, b, c) {
    var v1 = document.getElementById(a).innerHTML;
    var v2 = document.getElementById(b).innerHTML;
    var v3 = document.getElementById(c).innerHTML;

    if (v1 == v2 && v2 == v3) {
        informacion(" Hay un Ganador !!!");
        document.getElementById(a).classList.add("ganador");
        document.getElementById(b).classList.add("ganador");
        document.getElementById(c).classList.add("ganador");
        jugando = false;
    }
}
function informacion(msj) {
    document.getElementById("turno").innerHTML = msj;
}
function reiniciar() {
    turno = "X";
    jugando = true;
    movimientos = 0;
    document.getElementById("turno").innerHTML = "Inicio: Comienza X";
    limpiar("c1",1);
    limpiar("c2",2);
    limpiar("c3",3);
    limpiar("c4",4);
    limpiar("c5",5);
    limpiar("c6",6);
    limpiar("c7",7);
    limpiar("c8",8);
    limpiar("c9",9);
}
function limpiar(a,b) {
    document.getElementById(a).classList.remove("lleno");
    document.getElementById(a).classList.remove("ganador");
    document.getElementById(a).innerHTML = b;
}
