import React from 'react'
import { useParams } from 'react-router';

import '../App.css';

import ItemCounter from './ItemCounter';

function ItemDetailContainer(props) {
    const {nroIdMueble} = useParams(); 
    const filterById = props.phoneModel.find(modelId => modelId.id === parseInt(nroIdMueble))  
    return (
        <div className="container">
            <div className="row -d flex align-items-center text-center">
                <img className="Producto col-12 col-sm-12 col-md-6 col-lg-6" src={filterById.image} alt="" />
                <div className="Producto col-12 col-sm-12 col-md-6 col-lg-6">
                    <h2 className="my-5" >{"Mueble " + filterById.MuebleModel + " | " + filterById.color + " | " + filterById.storage}</h2>
                    <p  className="my-5" >
                    Muebles de Melamina
                    </p>
                    <h3>Stock: {filterById.stock}</h3>
                    <ItemCounter
                    item={filterById}
                    />
                </div>
            </div>
        </div>
    )
}

export default ItemDetailContainer


