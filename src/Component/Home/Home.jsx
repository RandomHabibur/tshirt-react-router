import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';
import toast, { Toaster } from 'react-hot-toast';
import './Home.css'

const Home = () => {
    const tshirts = useLoaderData()
    const [cart, setCart] = useState([]);

    const handleAddToCart = (tshirt) => {
        // console.log('Add to cart', tshirt);
        const exists = cart.find(ts => ts._id === tshirt._id);
        if (exists) {
            const notify = () => toast('Cart already added');
            notify();
        }
        else {
            const newCart = [...cart, tshirt];
            setCart(newCart);
        }
    }
    // console.log(tshirts);
    const handleRemoveFromCart = (id) => {
        console.log(id);
        const remaining = cart.filter(tshirt => tshirt._id !== id);
        setCart(remaining);
    }
    return (
        <div className='home-container'>
            <div className="t-shirts-container">
                {
                    tshirts.map(tshirt => <TShirt key={tshirt._id} tshirt={tshirt} handleAddToCart={handleAddToCart}></TShirt>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
            </div>
            <Toaster />
        </div>
    );
};

export default Home;