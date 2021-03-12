const ADD_CAKE_TO_CART= 'ADD_CAKE_TO_CART'
export const addCakeToCartActionHandler= (flavour)=>{
    return ({type:ADD_CAKE_TO_CART,flavour:flavour})
}