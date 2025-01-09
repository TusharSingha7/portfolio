import CPprof from "../components/cpprof";
import leetsym from '../images/leetcode.png'
import cfsym from '../images/codeforces.png'
import knightsym from '../images/knight.png'
export default function CPprofiles(){
    return <div className="p-2 rounded-lg flex flex-col space-y-4">
        <CPprof img={leetsym} platform="Leetcode" psolved="730+" level="Knight" rating="1850+" color="text-blue-500" 
        badge={knightsym} prop="h-16 w-16" link="https://leetcode.com/u/BOLTA7479/" username="BOLTA7479"/>
        <CPprof img={cfsym} platform="Codeforces" psolved="120+" level="Pupil" rating="1300+" color="text-green-500"
        link="https://codeforces.com/profile/BOLTCO" username="BOLTCO"/>
    </div>
}