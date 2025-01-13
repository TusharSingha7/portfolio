
export default function Home(){
    return <div className="m-4 bg-white max-w-2xl mx-auto min-h-96 rounded-lg shadow shadow-md hover:shadow-xl"> 
        <div className="mx-auto w-fit text-5xl font-bold">
            Hi , I Am Tushar Singh
        </div>
        <ul className="mx-auto w-fit my-5 list-disc">
            <li>I am a full stack developer</li>
            <li>I am skilled in MERN stack along with SQL databases</li>
            <li>I am a competitive programmer, I uses C++ for CP</li>
            <li>Currently I am learing Machine Learning and Deep Learning</li>
        </ul>
        <div className=" flex h-28">
            <button className=" m-auto rounded-lg p-2 border border-slate-400" onClick={()=>{
                window.open('https://drive.google.com/file/d/1PukIqTb8qVqmHexQhv0k-bAoQD3OFD5h/view?usp=sharing','_blank')
            }}>View Resume</button>
        </div>
    </div>
}