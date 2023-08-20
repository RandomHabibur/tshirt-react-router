import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandapa';

const Special = ({ ring }) => {
    const goldenRing = useContext(RingContext)
    return (
        <div>
            <h2>Special</h2>
            <p><small>Ring: {goldenRing}</small></p>
        </div>
    );
};

export default Special;