import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveFromCart }) => {
    let massage;
    if (cart.length === 0) {
        massage = <p>Cart is empty</p>
    }
    else {
        massage = <div>
            <p>Thanks for buying</p>
            <p>invest on yourself</p>
        </div>
    }
    return (
        <div>
            <h2 className={cart.length >= 3 ? 'green' : cart.length > 0 ? 'green-opacity' : 'red'}>Order summary: {cart.length}</h2>
            {cart.length > 2 ? <span className='purple'>Awesome</span> : <span>Buy Now</span>}
            {massage}
            <div>
                {cart.map((tshirt, idx) => (
                    <div key={idx}>
                        <h3>{tshirt.name}</h3>
                        <p>Price: ${tshirt.price} <span onClick={() => handleRemoveFromCart(tshirt._id)} style={{ fontSize: '20px' }}>X</span> </p>
                    </div>
                ))} </div>
            {
                cart.length === 2 && <p>Good Investement</p>
            }
            {
                cart.length === 3 || <p>Buy 3</p>
            }
        </div >
    );
};

export default Cart;

/* 
* Conditional RENDERING
* 1. use if else to set a variable that will contain an element, component.
* 2. ternary operator: condition ? 'for ture': 'for false'
* 3. Logical &&: (if the condition is true then the next thing will be displayed)
* 4. Logical ||: (if the condition is false then the next thing will be displayed).
*/

/* 
***

*/