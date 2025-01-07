import Project from "../components/project";
import venmoL from '../images/venmoL.png'
import mediumL from '../images/mediumL.png'
import ewalletL from '../images/ewalletL.png'
export default function Projects(){
    return <div className="dark:text-white p-2 rounded-lg flex flex-col space-y-2">
        <Project name="Venmo Clone" link="https://venmoclone.vercel.app/" slink="https://github.com/TusharSingha7/venmoclone" Landingimg={venmoL}
        des={"It is a Clone of famous payment application Venmo"}/>
        <Project name="Medium" link="https://medium-psi-one.vercel.app/" slink="https://github.com/TusharSingha7/Medium" Landingimg={mediumL}
        des={"It is a Blogging Website"}/>
        <Project name="E-Wallet" link="https://paytm-like-nine.vercel.app/" slink="https://github.com/TusharSingha7/Paytm-Like" Landingimg={ewalletL}
        des={"Dummy Wallet having tansaction capability between existing users"}/>
    </div>
}