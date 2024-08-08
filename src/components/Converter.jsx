import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Converter = () => {
    const [rates, setRates] = useState({});
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('EUR');
    const [amount, setAmount] = useState(1);
    const [result, setResult] = useState(0);

    useEffect(() => {
        // Fetch exchange rates
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

    return (
        <div className='flex items-start justify-between w-full'>
         <div>
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <select
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
            >
                {/* Add more currency options as needed */}
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
            </select>
            <br />
            <input
                readOnly
                type="number"
                value={result}
            />
            <select
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
            >
                {/* Add more currency options as needed */}
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
            </select>

        </div>
        </div>
       
    );
};

export default Converter;
