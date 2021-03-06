

function validar(form) {

    if (isNaN(form.fname.value) == false) {
        alert("Captura el nombre, por favor.");
        return false;
    }

    if (form.estatus.value == 1) {
        alert("Selecciona un estatus, por favor.");
        return false;
    }



    return valido;
}