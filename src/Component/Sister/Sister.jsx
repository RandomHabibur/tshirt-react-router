import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandapa';

const Sister = () => {
    const [money] = useContext(MoneyContext)
    return (
        <div>
            <h2>Empty Sis</h2>
            <p><small>Grandpa Money: {money}</small></p>
        </div>
    );
};

export default Sister;