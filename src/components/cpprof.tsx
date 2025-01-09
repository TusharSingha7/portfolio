
export default function CPprof({img,platform,psolved,rating,level,badge,color,prop,username,link} : {
    img : string,
    platform : string,
    psolved : string,
    rating : string,
    level : string,
    badge? : string,
    color : string,
    prop? : string,
    username : string,
    link : string
}){
    return <a href={link}><div className="rounded-lg flex p-2 shadow border-slate-300 border transform transition-transform hover:scale-105 duration-300 mx-6">
        <img src={img}></img>
        <div className="text-4xl mx-4 font-bold flex items-center">{platform}</div>
        <div className="mx-4 text-lg flex flex-col items-center">
            <span>Solved Problems</span>
            <span className="font-bold text-2xl mt-2">{psolved}</span>
        </div>
        <div className="mx-4 text-lg flex flex-col items-center">
            <span>Rating</span>
            <span className="font-bold text-2xl mt-2">{rating}</span>
        </div>
        <div className="mx-4 text-lg flex flex-col items-center">
            <span>Username</span>
            <a href={link} target="_blank" className="mt-2"><span className="font-bold text-2xl text-blue-600 underline-offset-1 underline">{username}</span></a>
        </div>
        <div className="mx-4 text-lg flex flex-col items-center">
            <span>Level</span>
            <span className={`font-bold text-2xl mt-2 ${color}`}>{level}</span>
        </div>
        <div className="flex items-center"><img src={badge} className={prop}></img></div>
    </div></a>
}