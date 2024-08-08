import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IoCopy } from 'react-icons/io5';
import Navbar from './Navbar';

const Converter = () => {
    const [rates, setRates] = useState({});
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('EUR');
    const [amount, setAmount] = useState(1);
    const [result, setResult] = useState(420483);

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

    function withCommas(num) {
        // Convert the number to a string and split into integer and decimal parts
        const [integerPart, decimalPart] = num.toString().split('.');

        // Add commas to the integer part
        const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

        // Rejoin integer and decimal parts, if present
        return decimalPart ? `${formattedIntegerPart}.${decimalPart}` : formattedIntegerPart;

    }

    return (
        <div className='w-full h-svh flex justify-center relative'>
            <div className='w-[300px] bg-stone-100 h-full flex flex-col'>
                <Navbar />
                <div className='flex-1 flex items-start'>
                    <div className='w-fit px-5 flex flex-col gap-2 py-2'>
                        <div className='flex items-center gap-2'>
                            {/* <select
                            value={fromCurrency}
                            onChange={(e) => setFromCurrency(e.target.value)}
                        >
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>
                            <option value="GBP">GBP</option>
                        </select> */}
                            <div className='w-full max-w-fit px-2'>{fromCurrency}</div>
                            <input
                                type="text"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                className='w-full h-[40px] rounded-md text-right px-3'
                            />
                        </div>
                        <h1 className='w-full h-fit text-end text-xl pt-3 font-bold text-main-color tracking-wider'>{withCommas(result)} <span className='text-base'>{toCurrency}</span></h1>
                        <button className='w-full h-fit text-xs text-end'>
                            Swap Currencies
                        </button>


                    </div>
                </div>

            </div>
            <div className='flex-1 flex items-start justify-between w-full mx-auto p-5'>

            </div>
        </div>


    );
};

export default Converter;
