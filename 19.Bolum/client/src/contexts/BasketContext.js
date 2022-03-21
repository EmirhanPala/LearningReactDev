import { useState, createContext, useContext, useEffect } from "react";

const BaskatContext = createContext();

const BasketProvider = ({ children }) => {
    const [items, setItems] = useState([]);

    const addToBasket = (data, findBasketItem) => {
        if(!findBasketItem){
            return setItems((items) => [data, ...items]);
        }

        const filtered = items.filter((item) => item._id !== findBasketItem._id);
        setItems(filtered);
    };

    const values = {
        items,
        setItems,
        addToBasket,
    };

    return <BaskatContext.Provider value={values}>{children}</BaskatContext.Provider>;
};

const useBasket = () => useContext(BaskatContext);

export {
    BasketProvider, useBasket
};