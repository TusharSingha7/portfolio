

export default function About(){
    return <div className="m-4 bg-white max-w-2xl mx-auto min-h-96 rounded-lg shadow shadow-md hover:shadow-xl">
        <ul className="p-3 font-bold">
            <li>Email : tscorpo2@gmail.com</li>
            <li>Phone no : +91 8527613096</li>
        </ul>
        <div className="flex flex-col p-3">
            <input placeholder="Name" className="border border-slate-400 rounded-lg p-2 max-w-sm my-2"></input>
            <input placeholder="Email" className="border border-slate-400 rounded-lg p-2 max-w-sm my-2"></input>
            <input placeholder="Message" className="border border-slate-400 rounded-lg p-2 max-w-sm my-2 min-h-24"></input>
            <button className="w-24 p-2 rounded-lg border-slate-400 border my-2">Submit</button>
        </div>
        
    </div>
}