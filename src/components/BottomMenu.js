import { HiMenu } from "react-icons/hi";
import { LuSearch } from "react-icons/lu";
import { BsPersonFill } from "react-icons/bs";
import { BiSolidHome } from "react-icons/bi";


function BottomMenu() {
    return (
        <div className="fixed bottom-0 w-full  lg:w-[70%] 2xl:w-[1000px] sm:h-[100px]  h-[85px]  flex justify-center items-start">
            <div className="text-white  w-[90%] sm:w-[450px] bg-customBlue shadow-black2  h-[70px] 375:px-[40px] px-[20px] rounded-[20px] flex items-center justify-between">
                <BiSolidHome className="sm:text-[29px] text-[25px] text-green-700 cursor-pointer"/>
                <HiMenu  className="sm:text-[29px] text-[25px] cursor-pointer" />
                <LuSearch  className="sm:text-[29px] text-[25px] cursor-pointer" />
                <BsPersonFill className="sm:text-[29px] text-[25px] cursor-pointer"/>
            </div>
        </div>
    );
}
export default BottomMenu;