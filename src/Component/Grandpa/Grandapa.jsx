import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'
import Aunty from '../Aunty/Aunty';
export const RingContext = createContext('Gold Ring')
export const MoneyContext = createContext('Money');
const Grandapa = () => {
    const ring = 'precious ring';
    const [money, setMoney] = useState(0)
    return (
        <div className='grandpa-main'>
            <h2>Grandapa</h2>
            <p>Has Money: {money}</p>
            <div className='grandpa'>
                <MoneyContext.Provider value={[money, setMoney]}>
                    <RingContext.Provider value='golden Ring'>
                        <section className='flex'>
                            <Father ring={ring}></Father>
                            <Uncle></Uncle>
                            <Aunty ring={ring}></Aunty>
                        </section>
                    </RingContext.Provider>
                </MoneyContext.Provider>
            </div>
        </div>
    );
};

export default Grandapa;

/* 
* 1. create context and export
* 2. create a provider and pass a vlue
* 3. use useContext to recive value
*/