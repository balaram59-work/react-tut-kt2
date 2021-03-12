import React from 'react'
function Header(props)
{
    
    return(
        <div>
            <h2>This component displays the count of various items in the cart</h2>
            <h3>no.of cakes in the cart is {props.cakes.length}</h3>
        </div>
    )
}

export default Header