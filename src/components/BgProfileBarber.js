
import { IoIosPersonAdd } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { BsPersonFillCheck } from "react-icons/bs";
import { IoMdHeartDislike } from "react-icons/io";
import { IoCalendarSharp } from "react-icons/io5";
import beard from '../imgs/beard.jpg';

function BgProfileBarber(){
    return (
        <>
            <div className="mt-[163px] 324:mt-[165px] 480:mt-[200px]"></div>

            <div className="w-[90%] flex items-center flex-col z-20  rounded-xl bg-login relative mb-[50px] 800:pt-7 pt-5 800:pb-[80px]  pb-[220px]">
                <div className="w-[94%] 586:h-[300px] 431:h-[200px] h-[150px] relative rounded-xl ">
                    <img src={beard} alt="" className="w-full 586:h-[300px] 431:h-[200px] h-[150px] object-cover rounded-xl " />
                    <div className='w-full h-[200px] absolute bottom-[-150px] 800:pl-[40px] pl-0 flex 800:justify-start justify-center'>
                        <div className="w-[140px] h-[140px] bg-customBlue rounded-full   flex items-center justify-center">
                            <div className="w-[130px] h-[130px] rounded-full relative">
                                <img src={beard} alt="" className="w-full h-full object-cover rounded-full" />
                                <div className="w-[25px] h-[25px] bg-customBlue absolute bottom-[10px] right-[-2px] rounded-full flex items-center justify-center">
                                    <div className="w-[17px] h-[17px] bg-green-700 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>

                <div className="w-full 800:pl-[245px] flex  flex-col items-center 800:items-start   pt-[25px] relative text-white z-20 800:top-0 top-[80px] 800:h-auto h-full  ">
                    <p className="font-bold text-xl">Salon DODO</p>
                    <p className="text-sm">Abdelkarim Hajji</p>
                    <div className="flex">
                        <div className="flex items-center">
                            <p className="480:text-[15px] text-gray">20K </p>
                            <IoIosPersonAdd className='text-[13px] 480:text-[19px] ml-1 text-green-700 transition-all' />
                        </div>
                        <div className="flex items-center ml-4">
                            <p className="480:text-[15px] text-gray">20K </p>
                            <FaHeart className='text-[13px] 480:text-[15px] ml-1 text-red-700 transition-all' />
                        </div>
                    </div>
                    <div className="flex absolute 800:right-14 800:bottom-0 bottom-[-50px]   w-[280px] justify-around ">
                        <button type="button" className="w-[125px] h-[35px] rounded-xl bg-customBlue flex justify-center items-center ">
                            <BsPersonFillCheck className="" /> <span className="ml-2">Friends</span>
                        </button>
                        <button type="button" className="w-[125px] h-[35px] rounded-xl bg-red-700 flex justify-center items-center ">
                            <IoMdHeartDislike className="" /> <span className="ml-2">Like</span>
                        </button>
                    </div>
                    <div className="flex absolute 800:right-16 800:bottom-[-50px] bottom-[-100px] bg-red-100 rounded-2xl justify-center items-center w-[260px]">
                        <button type="button" className="w-full py-1.5 rounded-xl bg-green-800 flex justify-center items-center ">
                            <IoCalendarSharp className="" /> <span className="ml-2">Appointment</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BgProfileBarber;