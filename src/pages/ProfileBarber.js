import NavBar from "../components/NavBar";
import BottomMenu from "../components/BottomMenu";
import beard from '../imgs/beard.jpg';
import { IoIosPersonAdd } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
function ProfileBarber(){
    return (
        <div className="bg-login w-full  min-h-screen h-auto flex justify-center">
            <div className="bg-customBlue h-full min-h-screen w-full lg:w-[70%] 2xl:w-[1000px] box-border relative ">
                <NavBar />
                <div className="mt-[163px] 324:mt-[165px] 480:mt-[200px]"></div>
                
                <div className="w-full flex items-center flex-col">
                    <div className="w-[90%] h-[300px] bg-red-400 relative rounded-xl">
                        <img src={beard} alt="" className="w-full h-[300px] object-cover rounded-xl"/>
                            <div className="w-[140px] h-[140px] rounded-full bg-red-600 absolute top-[260px] left-10">
                                <img src={beard} alt="" className="w-full h-full object-cover rounded-full"/>
                                
                                <div className="w-[25px] h-[25px] bg-customBlue absolute right-[9px] bottom-[7px] rounded-full flex items-center justify-center">
                                <div className="w-[17px] h-[17px] bg-green-700 rounded-full"></div>
                                </div>
                            </div>
                    </div>
                    <div className="w-full pl-[245px] pt-[25px] relative text-white  z-10">
                        <p className="font-bold text-lg">Abdelkarim Hajji</p>
                        <div className="flex">
                            <div className="flex items-center">
                                <p className="480:text-[15px] text-gray">20K </p>
                                <IoIosPersonAdd className='text-[13px] 480:text-[19px] ml-1  text-green-700 transition-all'/>
                            </div>
                            <div className="flex items-center ml-4">
                                <p className="480:text-[15px] text-gray">20K </p>
                                <FaHeart className='text-[13px] 480:text-[15px] ml-1  text-red-700 transition-all'/>
                            </div>
                        </div>
                        <div  className="flex absolute right-12 bottom-0 w-[300px] justify-around">
                            <button type="button" className="w-[125px] py-1.5 rounded-xl bg-login flex justify-center items-center "><IoIosPersonAdd className=""/> <span className="ml-2">Follow</span></button>
                            <button type="button" className="w-[125px] py-1.5 rounded-xl bg-red-700">Like</button>
                        </div>
                    </div>
                </div>
                






                <BottomMenu location="posts"/>
                <div className='mb-[120px]'>

                </div>
            </div>
        </div>
    );
}

export default ProfileBarber;