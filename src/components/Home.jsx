import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

function Home() {
    const [result, setResult] = useState({
        content: "The past is so much safer, because whatever's in it has already happened. It can't be changed; so, in a way, there's nothing to dread.",
        originator: {
            name: "Margaret Atwood",
        },
        tags: ["Way","Change","Past","happening","nothing","paste"]
    })
    const location = useLocation()

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://quotes15.p.rapidapi.com/quotes/random/',
            params: {
                language_code: 'en'
            },
            headers: {
                'x-rapidapi-key': '60f4cd0945msh79435640a97e714p13ec56jsnf80bbe924f6c',
                'x-rapidapi-host': 'quotes15.p.rapidapi.com'
            }
        };

        const getQuote = async () => {
            try {
                // const response = await axios.request(options);
                // console.log(response.data);
                // setResult(response.data)
            } catch (error) {
                // console.error(error);
            }
        }

        getQuote()
    }, [location.pathname])

    return (
        <div className='w-full min-h-svh flex flex-col items-center justify-center'>
            <div className='w-full max-w-[650px]'>
            <h1 className='font-bold text-4xl tracking-tight'>
                {result !== "" && result.content}
            </h1>
            <p className='pt-4'>
                &mdash; &nbsp;{result !== "" && result.originator.name}
            </p>
            <div className='flex gap-2 pt-4'>
                {result !== "" && result.tags.map((tag, index) => (
                 <span key={index} className='text-sm bg-stone-100 px-3 py-1 rounded-xl'>{tag}</span>   
                ))}
            </div>
            </div>
        </div>
    )
}

export default Home