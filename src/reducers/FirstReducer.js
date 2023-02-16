import React from 'react'

const FirstReducer = (state=[],action) => {
    switch (action.type) {
        case "SHOW_USER":
            return action.payload
            
    
        default:
            return state
    }


}

export default FirstReducer