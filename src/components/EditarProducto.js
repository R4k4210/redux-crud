import React, {useState, useEffect} from 'react';
import {editarProductoAction} from '../actions/productosAction';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

const EditarProductos = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const [producto, guardarProducto] = useState({
        nombre: '',
        precio: ''
    });

    const onChangeFormulario = e => {
        guardarProducto({
            ...producto, 
            [e.target.name]: e.target.value
        });
    }

    const productoeditar = useSelector(state => state.productos.productoeditar);

    useEffect(() => {
        guardarProducto(productoeditar);
    }, [productoeditar]);
    
    const {nombre, precio} = producto;

    const submitEditarProducto = e => {
        e.preventDefault();
        dispatch(editarProductoAction(producto));
        history.push('/');
    }

    return ( 
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">

                        <h2 className="text-center mb-4 font-weight-bold">
                            Editar producto
                        </h2>

                        <form 
                            onSubmit={submitEditarProducto}
                        >
                            <div className="form-group">
                                <label htmlFor="nombre">Nombre Producto</label>
                                <input 
                                    className="form-control" 
                                    type="text" 
                                    name="nombre" 
                                    id="nombre" 
                                    placeholder="Nombre Producto"
                                    value={nombre}
                                    onChange={onChangeFormulario}
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
                                    onChange={onChangeFormulario}
                                />
                            </div>


                            <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">
                                Guardar Cambios
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default EditarProductos;