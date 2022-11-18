import React from "react";

const initialState = {
    cart: []
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

    return {
        state,
        addToCart,
        deleteFromCart
    }
}

export default UseInitialState;