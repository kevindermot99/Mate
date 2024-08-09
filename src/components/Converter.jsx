import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { IoArrowForward, IoCaretDown, IoCheckmarkCircleSharp, IoCopy, IoSwapVerticalOutline } from 'react-icons/io5';
import Navbar from './Navbar';
import debounce from 'lodash.debounce'; // Import lodash.debounce

const Converter = () => {
    const [rates, setRates] = useState({});
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('EUR');
    const [amount, setAmount] = useState(1);
    const [result, setResult] = useState(0);
    const [copied, setCopied] = useState(false)

    const fetchRates = useCallback(debounce(async (currency) => {
        try {
            // const response = await axios.get(``);
            setRates(response.data.conversion_rates);
        } catch (error) {
            console.error('Error fetching rates:', error);
        }
    }, 500), []);

    useEffect(() => {
        fetchRates(fromCurrency);
    }, [fromCurrency, fetchRates]);

    useEffect(() => {
        if (rates && toCurrency) {
            convertCurrency(amount, rates);
        }
    }, [amount, rates, toCurrency]);

    const convertCurrency = (amount, rates) => {
        const conversionRate = rates[toCurrency];
        if (conversionRate) {
            // Format the result with 2 decimal places
            const formattedResult = (amount * conversionRate).toFixed(2);
            setResult(parseFloat(formattedResult)); // Convert back to number
        }
    };

    const withCommas = (num) => {
        if (isNaN(num)) return '';

        // Ensure num is a number with 2 decimal places
        const formattedNum = Number(num).toFixed(2);
        const [integerPart, decimalPart] = formattedNum.split('.');
        const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

        return `${formattedIntegerPart}.${decimalPart}`;
    };


    const handleSwap = () => {
        setFromCurrency(prevFromCurrency => {
            const newToCurrency = toCurrency;
            setToCurrency(prevFromCurrency);
            return newToCurrency;
        });
    };

    const handleAmountChange = (e) => {
        // Use parseFloat to ensure the value is a number
        const value = parseFloat(e.target.value);
        // If the value is NaN, set amount to 0
        setAmount(isNaN(value) ? 0 : value);
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(withCommas(result) + ' ' + toCurrency)
            .then(() => {
                setCopied(true)
                setTimeout(() => {
                    setCopied(false)
                }, 1200);
            })
    };

    const cc = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",]

    return (
        <div className='w-full h-svh flex flex-col items-start justify-start relative'>
            <div className='w-full h-fit flex flex-col bg-stone-100 '>
                <Navbar />
                <div className=' flex items-center justify-center pt-24 bg-red '>
                    <div className=' flex flex-col w-fit gap-2 relative'>
                        <div className='flex items-center justify-center gap-2 w-full'>
                            <div className='w-[80px] h-[60px] bg-white rounded-2xl select-none ring-1 ring-stone-200 flex items-center justify-center text-sm font-extrabold gap-1 pl-1 cursor-pointer'>
                                <span>{fromCurrency}</span>
                                <IoCaretDown className='opacity-30' />
                            </div>
                            <input
                                type="text"
                                value={amount}
                                autoFocus
                                onChange={handleAmountChange}
                                className='w-[270px] h-[60px] rounded-2xl px-5 bg-white ring-1 ring-stone-200 tracking-wider'
                            />
                        </div>
                        <div onClick={handleSwap} className='absolute top-0 bottom-0 left-[-40px] my-auto bg-stone-100 h-[40px] w-auto aspect-square rounded-full p-1 flex items-center justify-center cursor-pointer transition duration-100 active:scale-90 select-none ' title='Swap fields'>
                            <span className='h-full w-full bg-white flex items-center justify-center p-1 rounded-full ring-1 ring-stone-200'>
                                <IoSwapVerticalOutline className='text-xl' />
                            </span>
                        </div>
                        <div className='flex items-center justify-center gap-2 w-full relative group'>
                            <div className='w-[80px] h-[60px] bg-main-color select-none text-white rounded-2xl tracking-wider flex items-center justify-center text-sm font-extrabold gap-1 pl-1 cursor-pointer'>
                                <span>{toCurrency}</span>
                                <IoCaretDown className='opacity-100' />
                            </div>
                            <input
                                type="text"
                                readOnly
                                value={withCommas(result)}
                                className='w-[270px] h-[60px] rounded-2xl px-5 bg-main-color text-white font-extrabold cursor-default'
                            />

                            {copied ?
                                <button onClick={copyToClipboard} className=' absolute top-0 bottom-0 my-auto right-4 text-white text-2xl opacity-0 group-hover:opacity-100' title='Copied'>
                                    <IoCheckmarkCircleSharp />
                                </button>
                                :
                                <button onClick={copyToClipboard} className=' absolute top-0 bottom-0 my-auto right-4 text-white text-xl opacity-0 group-hover:opacity-100' title='Copy to clipboard'>
                                    <IoCopy />
                                </button>
                            }
                        </div>
                    </div>
                </div>
                <p className='w-full text-sm text-center py-5 opacity-75 tracking-wide'>Quick, reliable, and spot-on currency converter</p>
            </div>
            <div className='flex-1 flex items-start justify-start flex-col w-full mx-auto p-5'>
                <h1 className='font-medium text-base'>Currency Picker</h1>
                <div className='py-5 gridRespo'>
                    {/* single thing */}
                    {cc.map((option, index) => (
                        <div className='flex items-center justify-between max-w-[230px] p-5 rounded-xl'>
                            <div className='flex flex-col'>
                                <p className='w-full text-sm opacity-75'>From</p>
                                <h1 className='text-xl font-bold'>EUR</h1>
                            </div>
                            <IoArrowForward className='text-2xl' />
                            <div className='flex flex-col'>
                                <p className='w-full text-sm opacity-75'>To</p>
                                <h1 className='text-xl font-bold'>EUR</h1>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Converter;
