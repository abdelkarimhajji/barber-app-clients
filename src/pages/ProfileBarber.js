import {useEffect, useRef} from 'react';
import NavBar from "../components/NavBar";
import BottomMenu from "../components/BottomMenu";
import AllPosts from "../components/AllPosts";
import beard from '../imgs/beard.jpg';
import { IoIosPersonAdd } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { BsPersonFillCheck } from "react-icons/bs";
import { IoMdHeartDislike } from "react-icons/io";
import { IoCalendarSharp } from "react-icons/io5";
function ProfileBarber(){


    const movableDivRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
        console.log("Current scroll position:", window.pageYOffset);
        if(window.pageYOffset >= 497)
        {
            movableDivRef.current.style.top = `${window.pageYOffset - 485}px`;
        }
        else if(window.pageYOffset < 500)
        {
            movableDivRef.current.style.top = `0px`;
        }
    };

    // Add the scroll event listener to the window
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty dependency array means this effect runs once on mount

    return (
    <div className="bg-login w-full min-h-screen h-auto flex justify-center overflow-y-auto">
        <div className="bg-customBlue h-full min-h-screen w-full lg:w-[70%] 2xl:w-[1000px] box-border relative">
            <NavBar />
            <div className="mt-[163px] 324:mt-[165px] 480:mt-[200px]"></div>

            <div className="w-full flex items-center flex-col z-20 relative">
            <div className="w-[90%] h-[300px] relative rounded-xl">
                <img src={beard} alt="" className="w-full h-[300px] object-cover rounded-xl" />
                <div className="w-[140px] h-[140px] bg-customBlue rounded-full absolute top-[260px] left-10 flex items-center justify-center">
                <div className="w-[130px] h-[130px] rounded-full">
                    <img src={beard} alt="" className="w-full h-full object-cover rounded-full" />
                    <div className="w-[25px] h-[25px] bg-customBlue absolute right-[9px] bottom-[7px] rounded-full flex items-center justify-center">
                    <div className="w-[17px] h-[17px] bg-green-700 rounded-full"></div>
                    </div>
                </div>
                </div>
            </div>

            <div className="w-full pl-[245px] pt-[25px] relative text-white z-20 mb-[100px] ">
                <p className="font-bold text-lg">Abdelkarim Hajji</p>
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
                <div className="flex absolute right-14 bottom-0 w-[280px] justify-around">
                <button type="button" className="w-[125px] py-1.5 rounded-xl bg-login flex justify-center items-center ">
                    <BsPersonFillCheck className="" /> <span className="ml-2">Friends</span>
                </button>
                <button type="button" className="w-[125px] py-1.5 rounded-xl bg-red-700 flex justify-center items-center ">
                    <IoMdHeartDislike className="" /> <span className="ml-2">Like</span>
                </button>
                </div>
                <div className="flex absolute right-16 bottom-[-47px] bg-red-100 rounded-xl justify-center items-center w-[260px]">
                <button type="button" className="w-full py-1.5 rounded-xl bg-green-800 flex justify-center items-center ">
                    <IoCalendarSharp className="" /> <span className="ml-2">Appointment</span>
                </button>
                </div>
            </div>
            </div>

            <div className="flex w-full relative">
            <div ref={movableDivRef} className=" w-[44%] h-[500px] relative px-4 ">
              <div className='mb-6 px-2'>
                <p className='text-white font-bold text-xl'>Photos</p>
              </div>
              <div className='grid grid-cols-2 gap-4 w-full justify-around'>
                <div className='w-[170px] h-[170px] bg-green-800 rounded-xl'></div>
                <div className='w-[170px] h-[170px] bg-green-800 rounded-xl'></div>
                {/* Uncomment if you want more divs */}
                <div className='w-[170px] h-[170px] bg-green-800 rounded-xl'></div>
                <div className='w-[170px] h-[170px] bg-green-800 rounded-xl'></div>
                </div>
            </div>
            <div className="w-[70%]">
             
                <AllPosts />
                <AllPosts />
            </div>
            </div>

            <BottomMenu location="posts" />
            <div className='mb-[120px]'></div>
        </div>
    </div>

    );
}

export default ProfileBarber;