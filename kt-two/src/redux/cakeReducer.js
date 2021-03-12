
export const cakeReducer=(state,action)=>{
    switch(action.type){
        CASE ADD_CAKE_TO_CART : {
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