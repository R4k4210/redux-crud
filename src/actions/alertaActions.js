import {
    OCULTAR_ALERTA,
    MOSTRAR_ALERTA
} from '../types';

export const mostrarAlertaAction = alerta => {
    return (dispatch) => {
        dispatch(crearAlerta(alerta));
    }
}

export const ocultarAlertaAction = () => {
    return (dispatch) => {
        dispatch(ocultarAlerta());
    }
}

const crearAlerta = alerta => ({
    type: MOSTRAR_ALERTA,
    payload: alerta
});

const ocultarAlerta = () => ({
    type: OCULTAR_ALERTA
});
