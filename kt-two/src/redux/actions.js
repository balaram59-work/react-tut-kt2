export const ADD_CAKE_TO_CART= 'ADD_CAKE_TO_CART'
export const addCakeToCartActionCreator= (flavour)=>{
    return ({type:ADD_CAKE_TO_CART,flavour:flavour})
}