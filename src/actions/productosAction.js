import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITO,
    DESCARGA_PRODUCTOS_ERROR,
    OBTENER_PRODUCTO_ELIMINAR,
    PRODUCTO_ELIMINAR_EXITO,
    PRODUCTO_ELIMINAR_ERROR,
    OBTENER_PRODUCTO_EDITAR,
    COMENZAR_EDICION_PRODUCTO,
    PRODUCTO_EDITAR_EXITO,
    PRODUCTO_EDITAR_ERROR
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

export const obtenerProductosAction = () => {
    return async (dispatch) => {
        dispatch(descargarProductos());

        try {
            const respuesta = await clienteAxios.get('/productos');
            dispatch(descargaProductosExitosa(respuesta.data));
        } catch (error) {
            console.log(error);
            dispatch(descargaProductosError());
        }
    }
}

export const borrarProductoAction = id => {
    return async (dispatch) => {
        dispatch(obtenerProductoEliminar(id));

        try {
            await clienteAxios.delete(`/productos/${id}`);
            dispatch(eliminarProductoExito());

            Swal.fire(
                'Eliminado!',
                'El producto se elimino correctamente.',
                'success'
            );

        } catch (error) {
            console.log(error);
            dispatch(eliminarProductoError());
        }
    }
}

export const obtenerProductoEditar = producto => {
    return (dispatch) => {
        dispatch(obtenerProductoAction(producto));
    }
}

export const editarProductoAction = producto => {
    return async (dispatch) => {
        dispatch(editarProducto());

        try {
            await clienteAxios.put(`/productos/${producto.id}`, producto);
            dispatch(editarProductoExito(producto));
        } catch (error) {
            console.log(error);
            dispatch(editarProductoError());
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

const descargarProductos = () => ({
    type: COMENZAR_DESCARGA_PRODUCTOS,
    payload: true 
});

const descargaProductosExitosa = productos => ({
    type: DESCARGA_PRODUCTOS_EXITO,
    payload: productos
});

const descargaProductosError = () => ({
    type: DESCARGA_PRODUCTOS_ERROR,
    payload: true
});

const obtenerProductoEliminar = id => ({
    type: OBTENER_PRODUCTO_ELIMINAR,
    payload: id
});

const eliminarProductoExito = () => ({
    type: PRODUCTO_ELIMINAR_EXITO
});

const eliminarProductoError = () => ({
    type: PRODUCTO_ELIMINAR_ERROR
});

const obtenerProductoAction = producto => ({
    type: OBTENER_PRODUCTO_EDITAR,
    payload: producto
});

const editarProducto = () => ({
    type: COMENZAR_EDICION_PRODUCTO,
});

const editarProductoExito = producto => ({
    type: PRODUCTO_EDITAR_EXITO,
    payload: producto
})

const editarProductoError = () => ({
    type: PRODUCTO_EDITAR_ERROR
});