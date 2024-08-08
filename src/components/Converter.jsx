import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IoCaretDown, IoCopy, IoSwapVerticalOutline } from 'react-icons/io5';
import Navbar from './Navbar';

const Converter = () => {
    const [rates, setRates] = useState({});
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('EUR');
    const [amount, setAmount] = useState(1);
    const [amountWithNoCommas, setAmountWithNoCommas] = useState(0)
    const [result, setResult] = useState(0);

    useEffect(() => {
        axios.get(`https://v6.exchangerate-api.com/v6/11ba1ec567299a9cdd244247/latest/${fromCurrency}`)
            .then(response => {
                setRates(response.data.conversion_rates);
                convertCurrency(amount, response.data.conversion_rates);
            });
    }, [fromCurrency, toCurrency, amount]);

    const convertCurrency = (amount, rates) => {
        if (rates && toCurrency) {
            const conversionRate = rates[toCurrency];
            setResult(amount * conversionRate);
        }
    };

    function withCommas(num) {
        // Convert the number to a string and split into integer and decimal parts
        const [integerPart, decimalPart] = num.toString().split('.');

        // Add commas to the integer part
        const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

        // Rejoin integer and decimal parts, if present
        return decimalPart ? `${formattedIntegerPart}.${decimalPart}` : formattedIntegerPart;

    }


    return (
        <div className='w-full h-svh flex flex-col items-start justify-start relative'>
            <div className='w-full h-fit flex flex-col bg-stone-100'>
                <Navbar />
                <div className=' flex items-center justify-center pt-16 bg-red'>
                    <div className=' flex flex-col w-fit gap-2 relative'>
                        <div className='flex items-center justify-center gap-2 w-full'>
                            {/* <select
                            value={fromCurrency}
                            onChange={(e) => setFromCurrency(e.target.value)}
                        >
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>
                            <option value="GBP">GBP</option>
                        </select> */}
                            <div className='w-[80px] h-[60px] bg-white rounded-2xl select-none ring-1 ring-stone-200 flex items-center justify-center text-sm font-extrabold gap-1 pl-1 cursor-pointer'>
                                <span>{fromCurrency}</span>
                                <IoCaretDown className='opacity-30' />
                            </div>
                            <input
                                type="number"
                                value={amount}
                                autoFocus
                                onChange={(e) => setAmount(e.target.value)}
                                className='w-[250px] h-[60px] rounded-2xl px-5 bg-white ring-1 ring-stone-200 tracking-wider'
                            />
                        </div>
                        <div className='absolute top-0 bottom-0 left-[-40px] my-auto bg-stone-100 h-[40px] w-auto aspect-square rounded-full p-1 flex items-center justify-center cursor-pointer transition duration-100 active:scale-90 select-none ' title='Swap fields'>
                            <span className='h-full w-full bg-white flex items-center justify-center p-1 rounded-full ring-1 ring-stone-200'>
                                <IoSwapVerticalOutline className='text-xl' />
                            </span>
                        </div>
                        <div className='flex items-center justify-center gap-2 w-full relative group'>
                            {/* <select
                            value={fromCurrency}
                            onChange={(e) => setFromCurrency(e.target.value)}
                        >
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>
                            <option value="GBP">GBP</option>
                        </select> */}
                            <div className='w-[80px] h-[60px] bg-main-color select-none text-white rounded-2xl tracking-wider flex items-center justify-center text-sm font-extrabold gap-1 pl-1 cursor-pointer'>
                                <span>{toCurrency}</span>
                                <IoCaretDown className='opacity-100' />
                            </div>
                            <input
                                type="text"
                                readOnly
                                value={withCommas(result)}
                                className='w-[250px] h-[60px] rounded-2xl px-5 bg-main-color text-white font-extrabold cursor-default'
                            />
                            <button className=' absolute top-0 bottom-0 my-auto right-4 text-white text-xl transition duration-150 opacity-0 group-hover:opacity-100' title='Copy to clipboard'>
                                <IoCopy />
                            </button>
                        </div>
                    </div>
                </div>
                <p className='w-full text-xs text-center py-5 opacity-75 tracking-wide'>Please wait while we process your calculation</p>
            </div>
            <div className='flex-1 flex items-start justify-between w-full mx-auto p-5'>

            </div>
        </div>


    );
};

export default Converter;
