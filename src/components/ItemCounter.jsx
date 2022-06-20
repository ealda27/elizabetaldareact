import { React, useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import '../App.css';
import {CartContext} from './CartContext'
import { GrFormSubtract, GrFormAdd } from 'react-icons/gr';
import { IconName } from "react-icons/gr";
import { HiOutlineShoppingCart } from 'react-icons/hi';

function ItemCounter(props) {
    
    const [itemCount, setItemCount] = useState(0);     
    const [itemInChart, setItemInChart] = useState(0);  
    const [itemId, setitemId] = useState(props.item);   

    console.log(itemId)
    const test = useContext(CartContext);

    let stock = 10;
    const Incrementar = () => {                                 
        if (stock > itemCount) {
            setItemCount(itemCount + 1)
        }
    }
    const Decrementar = () => {                                
        if (itemCount > 0) {
            setItemCount(itemCount - 1)
        }
    }
    const Vaciar = () => { setItemCount(0) }                     

    const AgregarAlCarrito = () => {                          
        

        switch (itemCount) {
            case 0:
                alert("Seleccione la Cantidad de Productos ")
                break;
            case 1:
                alert("Se Agrego " + itemCount + " Producto al Carrito")
                setItemInChart(itemCount);
                test.addToCart(itemId,itemCount);
                break;
            default:
                alert("Se Agregaron " + itemCount + " Productos al Carrito")
                setItemInChart(itemCount);
                test.addToCart(itemId,itemCount);
                break;
        }
    }

    return (
        itemInChart === 0                         
            ?

            <div className="container py-3">
                <div className="row d-flex justify-content-center">


                    <button onClick={Decrementar} className="col-4 col-sm-4 col-md-4 col-lg-4 botonDecrementar btn-outline-primary">
                        <span><GrFormSubtract /></span>
                    </button>

                    <button onClick={Vaciar} className="col-2 col-sm-2 col-md-2 col-lg-2 botonVaciar btn-outline-danger">
                        <span>{itemCount}</span>
                    </button>

                    <button onClick={Incrementar} className="col-4 col-sm-4 col-md-4 col-lg-4 botonIncrementar btn-outline-success">
                        <span id="spanIncrementar"><GrFormAdd /></span>
                    </button>

                    <button onClick={AgregarAlCarrito} className="col-10 col-sm-10 col-md-10 col-lg-10 mt-2 botonCarrito btn-outline-primary">
                        <span><HiOutlineShoppingCart /></span>
                    </button>
                </div>
            </div>
            :
            <div className="container py-3">
                <div className="row d-flex justify-content-center text-center">
                    <Link to='/Chart'><button className="btn-outline-success col-10 col-sm-10 col-md-10 col-lg-10 py-2"><span>Ir al Checkout</span></button></Link>
                </div>
            </div>

    )
}



export default ItemCounter
