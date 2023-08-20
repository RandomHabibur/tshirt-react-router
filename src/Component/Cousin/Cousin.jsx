import React from 'react';
import Friend from '../Friend.jsx/Friend';
const Cousin = ({ children, hasFriend, ring }) => {
    return (
        <div>
            <h2>This is cousin</h2>
            <p><small>{children}</small></p>
            {hasFriend && <Friend ring={ring}></Friend>}
        </div>
    );
};

export default Cousin;