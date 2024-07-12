import {useEffect, useRef} from 'react';
import NavBar from "../components/NavBar";
import BottomMenu from "../components/BottomMenu";
import AllPosts from "../components/AllPosts";
import PostsBarber from "../components/PostsBarber";
import beard from '../imgs/beard.jpg';
import { IoIosPersonAdd } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { BsPersonFillCheck } from "react-icons/bs";
import { IoMdHeartDislike } from "react-icons/io";
import { IoCalendarSharp } from "react-icons/io5";
import { ImLocation2 } from "react-icons/im";
import { FaFacebookF } from "react-icons/fa6";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaTiktok } from "react-icons/fa6";

function ProfileBarber(){


    const movableDivRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
        console.log("Current scroll position:", window.pageYOffset);
        if(window.pageYOffset >= 910)
        {
            movableDivRef.current.style.top = `${window.pageYOffset - 910}px`;
        }
        else if(window.pageYOffset < 930)
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
        <div className="bg-customBlue h-full min-h-screen flex flex-col items-center w-full lg:w-[70%] 2xl:w-[1000px] box-border relative">
            <NavBar />
            <div className="mt-[163px] 324:mt-[165px] 480:mt-[200px]"></div>

            <div className="w-[90%] flex items-center flex-col z-20  rounded-xl bg-login relative mb-[50px] pt-7 pb-[80px]">
            <div className="w-[94%] h-[300px] relative rounded-xl">
                <img src={beard} alt="" className="w-full h-[300px] object-cover rounded-xl " />
                <div className="w-[140px] h-[140px] bg-customBlue rounded-full absolute top-[260px] left-10 flex items-center justify-center">
                <div className="w-[130px] h-[130px] rounded-full">
                    <img src={beard} alt="" className="w-full h-full object-cover rounded-full" />
                    <div className="w-[25px] h-[25px] bg-customBlue absolute right-[9px] bottom-[7px] rounded-full flex items-center justify-center">
                    <div className="w-[17px] h-[17px] bg-green-700 rounded-full"></div>
                    </div>
                </div>
                </div>
            </div>

            <div className="w-full pl-[245px] pt-[25px] relative text-white z-20  ">
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
                <div className="flex absolute right-14 bottom-0 w-[280px] justify-around">
                <button type="button" className="w-[125px] py-1.5 rounded-xl bg-customBlue flex justify-center items-center ">
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

            <div className="flex w-full  px-10 justify-around min-h-[150px] mb-[50px]  box-border ">
                <div className='min-w-[47%]   relative px-1 rounded-xl box-border'>
                    <div className='mb-3 px-4 py-2.5 bg-login rounded-xl '>
                        <p className='text-white font-bold text-xl'>Open Time</p>
                    </div>
                    <div className='grid grid-cols-3 gap-x-5 gap-y-4  text-white bg-login p-5   rounded-xl box-border   '>
                        <div className='w-[130px] rounded-xl h-[60px] bg-customBlue box-border p-1 pl-2 text-[13px]'>
                           <p className='text-green-600 mb-1'>Monday</p>
                           <div className='text-[11.5px] flex justify-center items-center flex-wrap w-full '>
                                <p className='relative'>8:00<span className='text-[9px] text-green-600 relative top-0.5 font-bold'>AM</span><span className='font-extrabold'> − </span></p>
                                <p className='relative ml-0.5'> 12:00<span className='text-[9px] text-green-600 relative top-0.5 font-bold'>PM</span></p>
                           </div>
                        </div>
                        <div className='w-[130px] rounded-xl h-[60px] bg-customBlue box-border p-1 pl-2 text-[13px]'>
                           <p className='text-green-600 mb-1'>Tuesday</p>
                           <div className='text-[11.5px] flex justify-center items-center flex-wrap w-full '>
                                <p className='relative'>8:00<span className='text-[9px] text-green-600 relative top-0.5 font-bold'>AM</span><span className='font-extrabold'> − </span></p>
                                <p className='relative ml-0.5'> 12:00<span className='text-[9px] text-green-600 relative top-0.5 font-bold'>PM</span></p>
                           </div>
                        </div>
                        <div className='w-[130px] rounded-xl h-[60px] bg-customBlue box-border p-1 pl-2 text-[13px]'>
                           <p className='text-green-600 mb-1'>Wednesday</p>
                           <div className='text-[11.5px] flex justify-center items-center flex-wrap w-full '>
                                <p className='relative'>8:00<span className='text-[9px] text-green-600 relative top-0.5 font-bold'>AM</span><span className='font-extrabold'> − </span></p>
                                <p className='relative ml-0.5'> 12:00<span className='text-[9px] text-green-600 relative top-0.5 font-bold'>PM</span></p>
                           </div>
                        </div>
                        <div className='w-[130px] rounded-xl h-[60px] bg-customBlue box-border p-1 pl-2 text-[13px]'>
                           <p className='text-green-600 mb-1'>thurshday</p>
                           <div className='text-[11.5px] flex justify-center items-center flex-wrap w-full '>
                                <p className='relative'>8:00<span className='text-[9px] text-green-600 relative top-0.5 font-bold'>AM</span><span className='font-extrabold'> − </span></p>
                                <p className='relative ml-0.5'> 12:00<span className='text-[9px] text-green-600 relative top-0.5 font-bold'>PM</span></p>
                           </div>
                        </div>
                        <div className='w-[130px] rounded-xl h-[60px] bg-red-950 box-border p-1 pl-2 text-[13px]'>
                           <p className='text-green-600 mb-1'>Friday</p>
                           <div className='text-[11.5px] flex justify-center items-center flex-wrap w-full '>
                                <p className='relative'>8:00<span className='text-[9px] text-green-600 relative top-0.5 font-bold'>AM</span><span className='font-extrabold'> − </span></p>
                                <p className='relative ml-0.5'> 12:00<span className='text-[9px] text-green-600 relative top-0.5 font-bold'>PM</span></p>
                           </div>
                        </div>
                        <div className='w-[130px] rounded-xl h-[60px] bg-customBlue box-border p-1 pl-2 text-[13px]'>
                           <p className='text-green-600 mb-1'>Saturday</p>
                           <div className='text-[11.5px] flex justify-center items-center flex-wrap w-full '>
                                <p className='relative'>8:00<span className='text-[9px] text-green-600 relative top-0.5 font-bold'>AM</span><span className='font-extrabold'> − </span></p>
                                <p className='relative ml-0.5'> 12:00<span className='text-[9px] text-green-600 relative top-0.5 font-bold'>PM</span></p>
                           </div>
                        </div>
                        <div className='w-[130px] rounded-xl h-[60px] bg-customBlue box-border p-1 pl-2 text-[13px]'>
                           <p className='text-green-600 mb-1'>Sunday</p>
                           <div className='text-[11.5px] flex justify-center items-center flex-wrap w-full '>
                                <p className='relative'>8:00<span className='text-[9px] text-green-600 relative top-0.5 font-bold'>AM</span><span className='font-extrabold'> − </span></p>
                                <p className='relative ml-0.5'> 12:00<span className='text-[9px] text-green-600 relative top-0.5 font-bold'>PM</span></p>
                           </div>
                        </div>


                    </div>
                </div>

                <div className='min-w-[45%]   relative px-1 rounded-xl h-[100px] '>
                    <div className='mb-3 px-4 py-2.5 bg-login rounded-xl '>
                        <p className='text-white font-bold text-xl'>Location</p>
                    </div>
                    <div className='p-3 bg-login rounded-xl mb-3 pb-5'>
                        <div className='flex items-center justify-center text-gray'>
                            <ImLocation2 className='text-white'/>
                            {/* <span className='text-white'>/</span> */}
                            <p className='cursor-pointer ml-1'>Tnagier, ras msallah</p>
                        </div>
                    </div>
                    <div className='mb-4 px-4 py-2.5 bg-login rounded-xl '>
                        <p className='text-white font-bold text-xl'>Social Media</p>
                    </div>
                    <div className='rounded-xl  mb-3'>
                        <div className='flex w-full justify-around'>
                            <div className='flex items-center justify-center bg-login w-[40%] h-[50px] rounded-xl text-gray mb-2.5'>
                                <FaFacebookF  className='text-white text-[20px]'/>
                            </div>
                            <div className='flex items-center justify-center bg-login w-[40%] h-[50px] rounded-xl text-gray mb-2.5'>
                                <BiLogoInstagramAlt className='text-white text-[20px]'/>
                            </div>
                        </div>
                        
                        <div className='flex items-center justify-center bg-login w-[90%] m-auto h-[50px] rounded-xl text-gray '>
                            <FaTiktok className='text-white text-[20px]'/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex w-full relative justify-center px-9">
                <div ref={movableDivRef} className="w-[40%] h-[450px] relative  rounded-xl ">
                    <div className='mb-3 px-4 py-2.5 bg-login rounded-xl '>
                        <p className='text-white font-bold text-xl'>Photos</p>
                    </div>
                    <div className='grid grid-cols-2 gap-4 w-full justify-around bg-login p-4 rounded-xl'>
                        <div className='w-[100%] h-[160px] bg-green-800 rounded-xl'><img src={beard} alt="" className='w-full h-full object-cover rounded-xl' /></div>
                        <div className='w-[100%] h-[160px] bg-green-800 rounded-xl'><img src={beard} alt="" className='w-full h-full object-cover rounded-xl' /></div>
                        {/* Uncomment if you want more divs */}
                        <div className='w-[100%] h-[160px] bg-green-800 rounded-xl'><img src={beard} alt="" className='w-full h-full object-cover rounded-xl' /></div>
                        <div className='w-[100%] h-[160px] bg-green-800 rounded-xl'><img src={beard} alt="" className='w-full h-full object-cover rounded-xl' /></div>
                        {/* <div className='w-[100%] h-[160px] bg-green-800 rounded-xl'></div>
                        <div className='w-[100%] h-[160px] bg-green-800 rounded-xl'></div> */}
                    </div>
                </div>
                <div className="w-[57%]  flex flex-col items-end">
                    <div className='mb-3 px-4 py-2.5 bg-login rounded-xl w-[90%]'>
                        <p className='text-white font-bold text-xl'>Posts</p>
                    </div>
                    <PostsBarber/>
                    <PostsBarber/>
                </div>
            </div>



            

            <BottomMenu location="posts" />
            <div className='mb-[120px]'></div>
        </div>
    </div>

    );
}

export default ProfileBarber;