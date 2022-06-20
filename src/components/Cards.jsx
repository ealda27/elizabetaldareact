import React from 'react';

import Card from './Card'



function Cards(props) {
    return (
        
        props.products.length > 0                         
            ?

            props.products.map((product, index) =>
            <Card
            key={index}
            title={"Mueble " + product.MuebleModel + " | " + product.color + " | " + product.madera}
            color={product.color}
            image={product.image}
            stock={product.stock}
            price={product.price}
            id={product.id}
            MuebleModel={product.MuebleModel}
            />
            )
            :
            <p>Cargando</p>         
            )

}

export default Cards


