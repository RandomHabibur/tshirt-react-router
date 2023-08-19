import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const tshirt = useLoaderData()
    console.log(tshirt);
    return (
        <div>
            <h3>This is Home{tshirt.length} </h3>
        </div>
    );
};

export default Home;