import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//Actions de redux
import { crearNuevoProductoAction } from '../actions/productosAction';
import { mostrarAlertaAction, ocultarAlertaAction } from '../actions/alertaActions';

const NuevoProductos = ({history}) => {

    //State del componente
    const [nombre, guardarNombre] = useState("");
    const [precio, guardarPrecio] = useState(0);

    //utilizamos use dispatch y te crea una funcion
    const dispatch = useDispatch();

    //Acceder al state del store (useSelector es el hook que nos permite eso)
    const cargando = useSelector(state => state.productos.loading);
    const error = useSelector(state => state.productos.error);
    const alerta = useSelector(state => state.alerta.alerta);

    //Esto llama la funcion del action
    const agregarNuevoProducto = producto => dispatch(crearNuevoProductoAction(producto));

    const onsubmitNuevoProducto = e => {
        e.preventDefault();

        if(nombre.trim() === "" || precio <= 0){

            const alerta = {
                msg: "Ambos campos son obligatorios",
                clases: 'alert alert-danger text-center text-uppercase p3'
            }

            dispatch(mostrarAlertaAction(alerta));

            return;
        }

        dispatch(ocultarAlertaAction());

        agregarNuevoProducto({
            nombre,
            precio
        });

        //Redireccionar al home
        history.push('/');
    }

    return ( 
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">

                        <h2 className="text-center mb-4 font-weight-bold">
                            Agregar nuevo producto
                        </h2>

                        {alerta ? <p className={alerta.clases}>{alerta.msg}</p> : null}

                        <form onSubmit={onsubmitNuevoProducto}>
                            <div className="form-group">
                                <label htmlFor="nombre">Nombre Producto</label>
                                <input 
                                    className="form-control" 
                                    type="text" 
                                    name="nombre" 
                                    id="nombre" 
                                    placeholder="Nombre Producto"
                                    value={nombre}
                                    onChange={e => guardarNombre(e.target.value)}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="precio">Precio Producto</label>
                                <input 
                                    className="form-control" 
                                    type="number" 
                                    name="precio" 
                                    id="precio" 
                                    placeholder="Precio Producto"
                                    value={precio}
                                    onChange={e => guardarPrecio(Number(e.target.value))}
                                />
                            </div>


                            <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">
                                Agregar
                            </button>
                        </form>

                        {cargando ? <p>Cargando...</p> : null}
                        {error ? <p className="alert alert-danger p2 mt-4 text-center">Hubo un error</p> : null}

                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default NuevoProductos;