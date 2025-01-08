import linksym from '../images/link2.png'
export default function Project({name,link,slink,Landingimg,des} : {
    name : string,
    link : string,
    slink : string,
    Landingimg : string,
    des : string
}){
    return <a href={link}><div className=" rounded-lg flex p-2 shadow border-slate-300 border transform transition-transform hover:scale-105 duration-300">
        <img src={Landingimg} className='w-60 h-48 mx-3 my-2 rounded-lg'></img>
        <div className="flex flex-col mt-2">
            <div className='text-3xl italic font-bold'>{name}</div>
            <div className='flex space-x-2 items-center text-xl my-1'>Project Link : <a href={link} target='_blank'><img src={linksym} className='h-4 w-4 ml-2'></img></a></div>
            <div className='flex space-x-2 items-center text-xl my-1'>Source Link : <a href={slink} target='_blank'><img src={linksym} className='h-4 w-4 ml-2'></img></a></div>
            <div className='text-xl'> About : </div>
            <div className='text-sm '>{des}</div>
        </div>
    </div></a>
}