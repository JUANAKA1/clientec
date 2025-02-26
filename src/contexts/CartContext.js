import { Cart } from "@/api";
import { useEffect } from "react";
import { createContext, useState } from "react";

const cartCtrl = new Cart();

export const CartContext = createContext();

export function CartProvider(props) {
    const { children } = props;
    const [cart, setCart] = useState(null);
    const [ total, setTotal] = useState(cartCtrl.count());
    
    
    useEffect(() => {
        //TODO: obtener carrito
        const response = cartCtrl.getAll();
        setCart(response);
        
    }, []);
    
    const addCart = (gameId) => {
        cartCtrl.add(gameId);
        refreshTotelCart();
    };

    const refreshTotelCart = () => {
        setTotal(cartCtrl.count());
        setCart(cartCtrl.getAll());
    }

    const data ={
        cart,
        addCart,
        total,
        deleteItem: () => {},
        deleteAllItems: () => {},
        changeQuantityItem: () => {},
    };
    return (
        <CartContext.Provider value={data }>
            {children}
        </CartContext.Provider>
    );
}