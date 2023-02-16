import React from 'react'

const SecondReducer = (cart=[],action) => {
  switch (action.type) {
    case "ADD_TO_CART":
        return [...cart,action.payload]
    case "REMOVE":
      return  cart.filter(element=>{return element!==action.payload})

    case "DELETE_ALL":
      return []

  
    default:
        return cart
  }
}



export default SecondReducer