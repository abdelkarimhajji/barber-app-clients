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
        <div className="fixed bottom-0 w-full  md:w-[100%] lg:w-[1000px] sm:h-[100px]  h-[85px] z-40 flex justify-center items-start">
            <div className="text-white  w-[95%] 480:w-[80%]  sm:w-[450px] bg-login shadow-black2  sm:h-[80px] h-[70px] 480:px-[40px] px-[25px] rounded-xl flex items-center justify-between">
                <div className='flex flex-col  items-center justify-end h-[50px]'>
                    <BiSolidHome onClick={() => navigate("/home")} className={`sm:text-[29px] mb-1  text-[25px] ${location.location === 'home' ? "text-green-700" : "text-white" } hover:text-green-700  cursor-pointer transition-all`}/>
                    <p className='text-[10px] font-bold'>HOME</p>
                </div>
                <div className='flex flex-col   items-center justify-end h-[50px]'>
                    <FaPeopleGroup onClick={() => navigate("/barbers")} className={`sm:text-[29px] mb-1 text-[25px] ${location.location === 'barbers' ? "text-green-700" : "text-white" } cursor-pointer hover:text-green-700 transition-all`} />
                    <p className='text-[10px] font-bold'>BARBERS</p>
                </div>
                <div className='flex flex-col   items-center justify-end h-[50px]'>
                    <BsPostageHeartFill onClick={() => navigate("/posts")} className={`sm:text-[25px] mb-1.5 text-[21px] ${location.location === 'posts' ? "text-green-700" : "text-white"}  hover:text-green-700 cursor-pointer transition-all`}/>
                    <p className='text-[10px] font-bold'>POSTS</p>
                </div>
                <div className='flex flex-col   items-center justify-end h-[50px]'>
                    <LuSearch  className="sm:text-[29px] mb-1 text-[25px] cursor-pointer hover:text-green-700 transition-all" />
                    <p className='text-[10px] font-bold'>SEARCH</p>
                </div>
                <div className='flex flex-col   items-center justify-end h-[50px]'>
                    <BsPersonFill onClick={() => navigate("/profile")}  className={`sm:text-[29px] mb-1 text-[25px] cursor-pointer ${location.location === 'profile' ? "text-green-700" : "text-white" } hover:text-green-700 transition-all`}/>
                    <p className='text-[10px] font-bold'>PROFILE</p>
                </div>
            </div>
        </div>
    );
}
export default BottomMenu;