import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from '../types';
import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';

export const crearNuevoProductoAction = producto => {
    return async (dispatch) => {
        dispatch(agregarProducto());
        
        try {
            await clienteAxios.post('/productos', producto);

            dispatch(agregarProductoExito(producto));

            Swal.fire(
                'Correcto',
                'El producto se agrego correctamente',
                'success'
            );
        } catch (error) {
            console.log();
            dispatch(agregarProductoError());

            Swal.fire({
                icon: 'error',
                title: 'Hubo un error',
                text: 'Hubo un error, intenta denuevo'
            });
        }
    }
}

const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO,
    payload: true
});

const agregarProductoExito = producto => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
});

const agregarProductoError = () => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: true
});