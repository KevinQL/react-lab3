import React, {Fragment} from 'react';

const Busqueda = () => {
    return ( 
        <Fragment>
            <div>
                <form>
                    <h2>Buscar Producto</h2>
                    <label>Ingrese Código Producto</label> 
                    <input type="text" placeholder="CÓDIGO" /> <br />
                    <input type="submit" value="ENVIAR" />
                </form>
            </div>
        </Fragment>
     );
}
 
export default Busqueda;