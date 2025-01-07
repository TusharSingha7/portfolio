
export default function Project({name,link,slink} : {
    name : string,
    link : string,
    slink : string
}){
    return <div className="dark:bg-slate-600 rounded-lg flex">
        <img></img>
        <div className="flex flex-col">
            <div>{name}</div>
            <div>Project Link : <a><img></img></a></div>
            <div>Source Link : <a></a></div>
        </div>
    </div>
}