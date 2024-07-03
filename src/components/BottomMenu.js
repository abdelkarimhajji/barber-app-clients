import {useNavigate} from 'react-router-dom';
import { FaPeopleGroup } from "react-icons/fa6";
import { LuSearch } from "react-icons/lu";
import { BsPersonFill } from "react-icons/bs";
import { BiSolidHome } from "react-icons/bi";
import { BsPostageHeartFill } from "react-icons/bs";

function BottomMenu(location)   {
    console.log("location ",    location);
    const navigate = useNavigate();
    return (
        <div className="fixed bottom-0 w-full  lg:w-[70%] 2xl:w-[1000px] sm:h-[100px]  h-[85px]  flex justify-center items-start">
            <div className="text-white  w-[90%] sm:w-[450px] bg-customBlue shadow-black2  h-[70px] 375:px-[40px] px-[20px] rounded-[20px] flex items-center justify-between">
                <BiSolidHome onClick={() => navigate("/home")} className={`sm:text-[29px] text-[25px] ${location.location === 'home' ? "text-green-700" : "text-white" } hover:text-green-700  cursor-pointer transition-all`}/>
                <FaPeopleGroup onClick={() => navigate("/barbers")} className={`sm:text-[29px] text-[25px] ${location.location === 'barbers' ? "text-green-700" : "text-white" } cursor-pointer hover:text-green-700 transition-all`} />
                <BsPostageHeartFill onClick={() => navigate("/posts")} className={`sm:text-[25px] text-[21px] ${location.location === 'posts' ? "text-green-700" : "text-white"}  hover:text-green-700 cursor-pointer transition-all`}/>
                <LuSearch  className="sm:text-[29px] text-[25px] cursor-pointer hover:text-green-700 transition-all" />
                <BsPersonFill className="sm:text-[29px] text-[25px] cursor-pointer hover:text-green-700 transition-all"/>
            </div>
        </div>
    );
}
export default BottomMenu;