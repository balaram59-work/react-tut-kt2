import {ADD_CAKE_TO_CART} from './actions'
export const cakeReducer=(state,action)=>{
    switch(action.type){
        case ADD_CAKE_TO_CART : {
            return (
                    {...state,
                        cakes:[...state.cakes,{flavour:action.flavour}]
                    }
                )
        }
        default:
            return state

    }
}