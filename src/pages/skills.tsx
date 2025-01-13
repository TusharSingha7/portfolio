
import reactsym from '../images/react.png'
import javasym from '../images/java-script.png'
import mongo from '../images/mongodb.svg'
import postgre from '../images/postgre.png'
import express from '../images/express.svg'
import typescript from '../images/typescript(1).png'
import node from '../images/nodejs.png'
import c__ from '../images/c++.png'
import html_5 from '../images/html-5.png'
import css_3 from '../images/css-3.png'
import tailwindcss from '../images/tailwindcss.png'
import postman from '../images/icons8-postman-api-512.png'
import github from '../images/github-sign.png'
export default function Skills(){
    return <div className="m-4 bg-white max-w-2xl mx-auto min-h-96 rounded-lg shadow shadow-md hover:shadow-xl">
        <div className='flex flex-wrap'>
            <img src={html_5} className='h-24 w-24 m-4'></img>
            <img src={css_3} className='h-24 w-24 m-4'></img>
            <img src={javasym} className='h-24 w-24 m-4'></img>
            <img src={typescript} className='h-24 w-24 m-4'></img>
            <img src={reactsym} className='h-24 w-24 m-4'></img>
            <img src={mongo} className='h-24 w-24 m-4'></img>
            <img src={postgre} className='h-24 w-24 m-4'></img>
            <img src={express} className='h-24 w-24 m-4'></img>
            <img src={node} className='h-24 w-24 m-4'></img>
            <img src={c__} className='h-24 w-24 m-4'></img>
            <img src={tailwindcss} className='h-24 w-24 m-4'></img>
            <img src={postman} className='h-24 w-24 m-4'></img>
            <img src={github} className='h-24 w-24 m-4'></img>
        </div>
    </div>
}