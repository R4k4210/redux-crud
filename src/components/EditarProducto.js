import React from 'react';

const EditarProductos = () => {
    return ( 
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">

                        <h2 className="text-center mb-4 font-weight-bold">
                            Editar producto
                        </h2>

                        <form action="">
                            <div className="form-group">
                                <label htmlFor="nombre">Nombre Producto</label>
                                <input className="form-control" type="text" name="nombre" id="nombre" placeholder="Nombre Producto"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="precio">Precio Producto</label>
                                <input className="form-control" type="number" name="precio" id="precio" placeholder="Precio Producto"/>
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