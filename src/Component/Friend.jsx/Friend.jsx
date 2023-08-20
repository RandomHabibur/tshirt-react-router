import React from 'react';

const Friend = ({ ring }) => {
    console.log(ring)
    return (
        <div>
            <h2>Friend</h2>
            {ring && <p>Sepcial Ring: {ring}</p>}
        </div>
    );
};

export default Friend;