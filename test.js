function validarPuntoUnoX(puntoUnoX) {
    if (puntoUnoX.length === 0) {
        return 'Este campo debe tener al menos un caracter';
    }
    if (puntoUnoX.length > 20) {
        return 'Este campo debe tener menos de 4 caracteres';
    }
    return '';
}

function validarPuntoUnoY(puntoUnoY) {
    if (puntoUnoY.length === 0) {
        return 'Este campo debe tener al menos un caracter';
    }
    if (puntoUnoY.length > 20) {
        return 'Este campo debe tener menos de 4 caracteres';
    }
    return '';
}

function validarPuntoDosX(puntoDosX) {
    if (puntoDosX.length === 0) {
        return 'Este campo debe tener al menos un caracter';
    }
    if (puntoDosX.length > 20) {
        return 'Este campo debe tener menos de 4 caracteres';
    }
    return '';
}

function validarPuntoDosY(puntoDosY) {
    if (puntoDosY.length === 0) {
        return 'Este campo debe tener al menos un caracter';
    }
    if (puntoDosY.length > 20) {
        return 'Este campo debe tener menos de 4 caracteres';
    }
    return '';
}