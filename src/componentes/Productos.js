import React, {Fragment} from 'react';

const Productos = () => {
    return ( 
        <Fragment>
            <div className = "grid-container">
                <div className = "grid-item">
                    <img src="/image/item1.jpg" width="100%" height="300px" alt="Productos"/>
                    <label>PO01</label>
                </div>
                <div className = "grid-item">
                    <img src="/image/item2.jpg" width="100%" height="300px" alt="Productos"/>
                    <label>PO02</label>
                </div>
                <div className = "grid-item">
                    <img src="/image/item3.jpg" width="100%" height="300px" alt="Productos"/>
                    <label>PO03</label>
                </div>  

                <div className = "grid-item">
                    <img src="/image/item4.jpg" width="100%" height="300px" alt="Productos"/>
                    <label>PO04</label>
                </div>
                <div className = "grid-item">
                    <img src="/image/item5.jpg" width="100%" height="300px" alt="Productos"/>
                    <label>PO05</label>
                </div>
                <div className = "grid-item">
                    <img src="/image/item6.jpg" width="100%" height="300px" alt="Productos"/>
                    <label>PO06</label>
                </div>  

            </div>
        </Fragment>
     );
}
 
export default Productos;