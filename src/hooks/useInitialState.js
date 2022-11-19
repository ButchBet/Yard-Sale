import React from "react";
import useGetItems from "@hooks/useGetItems";

const initialState = {
    cart: [],
}

const UseInitialState = () => {
    const [state, setState] = React.useState(initialState);

    const addToCart = (item) => {
        setState({
            ...state,
            cart: [...state.cart, item]
        })
    }

    const deleteFromCart = (item) => {
        const newCart = state.cart.filter((object) => object.id !== item.id);

        setState({
            ...state,
            cart: newCart,
        })
    }

    const finalCost = () => {
        const inititalValue = 0;
        
        const result = state.cart.reduce((accumulator, currentValue) => accumulator + currentValue.price, inititalValue);
        
        return result;
    }

    return {
        state,
        addToCart,
        deleteFromCart,
        useGetItems,
        finalCost
    }
}

export default UseInitialState;