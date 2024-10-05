import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {

    const languageSelect = useSelector(store=>store.config.lang)
    // console.log("🚀 ~ GptSearchBar ~ languageSelect:", languageSelect)
 
 
    return (

    <div className=' pt-[15%] flex justify-center  '>
        <form className='w-1/2 bg-black grid grid-cols-12 ' onSubmit={(e) => e.preventDefault()}>
            <input className='col-span-8 p-4 m-4' type='text' placeholder={lang[languageSelect]?.gptSearchPlaceholder}  />
            <button className='col-span-4 p-4 m-4 bg-red-600 text-white rounded' >{lang[languageSelect]?.searchButtonText}</button>
        </form>
    </div>

)
}

export default GptSearchBar