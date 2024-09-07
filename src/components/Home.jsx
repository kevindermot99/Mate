import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { json, useLocation } from 'react-router-dom'
import { LuCopy, LuLanguages, LuVolume2 } from 'react-icons/lu'
import { HiSparkles } from "react-icons/hi2";

function Home() {
    const [result, setResult] = useState("")
    // const [result, setResult] = useState({
    //     content: "The past is so much safer, because whatever's in it has already happened. It can't be changed; so, in a way, there's nothing to dread.",
    //     originator: {
    //         name: "Margaret Atwood",
    //     },
    //     tags: ["Way", "Change", "Past", "happening", "nothing", "paste"]
    // })
    const location = useLocation()

    const handleNewQuote = () => {

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
                const response = await axios.request(options);
                // console.log(response.data);
                setResult(response.data)
                localStorage.setItem('quoteCache', JSON.stringify(response.data))
            } catch (error) {
                // console.error(error);
            }
        }

        getQuote()
    }

    useEffect(() => {
        const cache = localStorage.getItem('quoteCache') || []
        setResult(JSON.parse(cache))
    },[])

    return (
        <div className='w-full min-h-svh flex flex-col items-center justify-center text-lg'>
            <div className='w-full max-w-[650px]'>
                <h1 className='font-bold text-4xl tracking-tight'>
                    {result !== "" && "❝ " + result.content + " ❞"}
                </h1>
                <p className='pt-4'>
                    &mdash; &nbsp;{result !== "" && result.originator.name}
                </p>
                <div className='flex items-center justify-end gap-3 pt-4'>
                    <button className='text-dark-color/50 hover:text-dark-color text-xl'>
                        <LuCopy />
                    </button>
                    <button className='text-dark-color/50 hover:text-dark-color text-2xl pr-[2px]'>
                        <LuVolume2 />
                    </button>
                    <button onClick={handleNewQuote} className='text-dark-color text-xl flex items-center gap-1 bg-stone-200/50 hover:bg-stone-200 transition-all h-[37px] pl-3 pr-4 rounded-lg font-medium group '>
                        <HiSparkles className='group-hover:rotate-180 transition' />
                        <span className='text-base '>Generate</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home