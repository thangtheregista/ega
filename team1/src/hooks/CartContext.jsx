import {createContext, useState, useEffect, useContext} from "react";

const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (newItem) => {
        setCart((prevCart) => {
            // If item already in cart → update quantity
            const existingItem = prevCart.find((item) => item.id === newItem.id);
            if (existingItem) {
                return prevCart.map((item) =>
                    item.id === newItem.id
                        ? { ...item, quantity: item.quantity + newItem.quantity }
                        : item
                );
            } else {
                return [...prevCart, newItem];
            }
        });
    };
    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

    return(
        <CartContext.Provider value={{cart,setCart, addToCart, removeFromCart, cartCount}}>
            {children}
        </CartContext.Provider>
    )
}
export const useCart = () => useContext(CartContext)