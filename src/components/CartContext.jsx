import { useState, createContext, React } from 'react'

export const CartContext = createContext();


const CartContextProvider = ({children}) => {

    const[cartList,setCartList] = useState([]);

    const addToCart = (item, cantItem) => {
        setCartList([
            ...cartList,               
            {
                item:item.id,
                name:item.MuebleModel,
                image:item.image,
                price:item.price,
                color:item.color,
                cantItem:cantItem
            }
        ])
    }
    return (
        <CartContext.Provider value={{
            cartList,
            addToCart
        }}
        >

            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;