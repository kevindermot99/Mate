import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Converter = () => {
    const [rates, setRates] = useState({});
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('EUR');
    const [amount, setAmount] = useState(1);
    const [result, setResult] = useState(0);

    // useEffect(() => {
    //     axios.get(`https://v6.exchangerate-api.com/v6/11ba1ec567299a9cdd244247/latest/${fromCurrency}`)
    //         .then(response => {
    //             setRates(response.data.conversion_rates);
    //             convertCurrency(amount, response.data.conversion_rates);
    //         });
    // }, [fromCurrency, toCurrency, amount]);

    // const convertCurrency = (amount, rates) => {
    //     if (rates && toCurrency) {
    //         const conversionRate = rates[toCurrency];
    //         setResult(amount * conversionRate);
    //     }
    // };

    const keyboardButton = 'w-full h-full aspect-square font-bold text-2xl rounded-2xl flex items-center justify-center bg-stone-100 hover:bg-stone-200'

    return (
        <div className='flex items-start justify-between w-full p-5'>
            <div className='w-fit p-10 flex flex-col'>
                <div className='flex items-center'>
                    <select
                        value={fromCurrency}
                        onChange={(e) => setFromCurrency(e.target.value)}
                    >
                        {/* Add more currency options as needed */}
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="GBP">GBP</option>
                    </select>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div>
                <div className='flex items-center'>
                    <select
                        value={toCurrency}
                        onChange={(e) => setToCurrency(e.target.value)}
                    >
                        {/* Add more currency options as needed */}
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="GBP">GBP</option>
                    </select>
                    <input
                        readOnly
                        type="number"
                        value={result}
                    />
                </div>

            </div>
            <div className='flex-1 p-10 grid grid-cols-4 gap-2 w-full max-w-[600px]'>
                <button className={keyboardButton}>
                    1
                </button>
                <button className={keyboardButton}>
                    1
                </button>
                <button className={keyboardButton}>
                    1
                </button>
                <button className={keyboardButton}>
                    1
                </button>
                <button className={keyboardButton}>
                    1
                </button>
                <button className={keyboardButton}>
                    1
                </button>
                <button className={keyboardButton}>
                    1
                </button>
                <button className={keyboardButton}>
                    1
                </button>
                <button className={keyboardButton}>
                    1
                </button>
                <button className={keyboardButton}>
                    1
                </button>
                <button className={keyboardButton}>
                    1
                </button>
                <button className={'/w-full h-full aspect-square font-bold text-2xl rounded-2xl flex items-center justify-center bg-gradient-to-br from-main-color to-main-color-light text-white'}>
                    1
                </button>
            </div>
        </div>

    );
};

export default Converter;
