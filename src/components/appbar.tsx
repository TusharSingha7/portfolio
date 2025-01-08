import { useNavigate } from 'react-router-dom'
import githubsym from '../images/github-sign.png'
import linkedinsym from '../images/linkedin-logo.png'
export default function AppBar(){
    const nav = useNavigate();
    return <div className="flex justify-center shadow-lg py-4 rounded-lg border border-slate-400 sticky top-1 bg-white z-10">
        <div className="flex justify-center w-full space-x-8 pl-16">
            <button onClick={()=>{
                nav('/');
            }}>Home</button>
            <button onClick={()=>{
                nav('/skills');
            }}>Skills</button>
            <button onClick={()=>{
                nav('/projects');
            }}>Projects</button>
            <button onClick={()=>{
                nav('/cpprofiles');
            }}>CP Profiles</button>
            <button onClick={()=>{
                nav('/about');
            }}>About</button>
            
        </div>
        <div className="flex px-2 justify-end space-x-4 pr-16">
            <a href='https://github.com/Tusharsingha7' target='_blank'><img src={githubsym} className='h-6 w-7'></img></a>
            <a href='https://www.linkedin.com/in/tushar-singh-34838624a/' target='_blank'><img src={linkedinsym} className='h-6 w-7'></img></a>
        </div>
    </div>
}