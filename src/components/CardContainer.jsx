import {React, useState, useEffect} from 'react'
import { useParams } from 'react-router';

import '../App.css';

import Cards from './Cards'

function CardContainer(props) {
    const {nroModeloMueble} = useParams("");  
    const [productos,setProductos] = useState(props.products);

    
    useEffect(() => {

        if(nroModeloMueble !== undefined){
            const filterByName = props.products.filter(function (product) { 
                return product.MuebleModel === nroModeloMueble              
                console.log(nroModeloMueble)
            })
            setProductos(filterByName);
        } else{
            setProductos(props.products);                                    

        }

    },[nroModeloMueble, props.products]);


    

    return (
        <div className="container">
            <div className="row">
                <Cards
                    products={productos}
                />

            </div>
        </div>
    )
}

export default CardContainer
