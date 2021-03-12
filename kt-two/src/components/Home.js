import React from 'react'
import {addCakeToCartActionHandler} from '../redux/actions'


function Home(props) {
    return (
        <div>
           
            <h1>Home Component</h1>
           
                <div className="btn-wrapper item">
                    <button 
                    onClick={
                        ()=>{props.addCakeToCartActionDispatcher({flavour:'vanilla'})}
                        }>
                        Add Cake To Cart</button>
                </div>
        </div>
    )
}
export default Home