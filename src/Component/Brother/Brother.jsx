import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandapa';

const Brother = () => {
    const ring = useContext(RingContext);
    return (
        <div>
            <h2>This Brother</h2>
            <p>which Ring: {ring}</p>
        </div>
    );
};

export default Brother;