import {useEffect, useRef} from 'react';
import NavBar from "../components/NavBar";
import BottomMenu from "../components/BottomMenu";
import BgProfileBarber from "../components/BgProfileBarber";
import AllPosts from "../components/AllPosts";
import PostsBarber from "../components/PostsBarber";
import beard from '../imgs/beard.jpg';
import { ImLocation2 } from "react-icons/im";
import { FaFacebookF } from "react-icons/fa6";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaTiktok } from "react-icons/fa6";

function ProfileBarber(){


    const movableDivRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
        console.log("Current scroll position:", window.pageYOffset);
        console.log("Current window width:", window.innerWidth); // Log the window width
        if(window.pageYOffset >= 910 && window.innerWidth > 800)
            movableDivRef.current.style.top = `${window.pageYOffset - 910}px`;
        if(window.innerWidth < 800)
            movableDivRef.current.style.top = `0px`;
        else if(window.pageYOffset < 930)
            movableDivRef.current.style.top = `0px`;
    };

    // Add the scroll event listener to the window
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty dependency array means this effect runs once on mount

    return (
    <div className="bg-login w-full min-h-screen h-auto flex justify-center overflow-y-auto">
        <div className="bg-customBlue h-full min-h-screen flex flex-col items-center w-full md:w-[100%] lg:w-[1000px] box-border relative">
            <NavBar />
            <BgProfileBarber />

            <div className=" 800:flex w-full  499:px-10 px-3 justify-around min-h-[150px] 800:mb-[50px]  box-border ">
                <div className='980:w-[52.5%] 800:w-[60%] 800:mb-0 mb-[30px] w-full  relative px-1 rounded-xl box-border '>
                    <div className='mb-3 px-4 py-2.5 bg-login rounded-xl '>
                        <p className='text-white font-bold text-xl'>Open Time</p>
                    </div>
                    <div className='grid grid-cols-3 gap-x-5 gap-y-4  text-white bg-login  p-5   rounded-xl box-border'>
                        <div className='980:w-[130px] w-[100%] cursor-pointer rounded-xl min-h-[60px] bg-customBlue box-border p-1 pl-2 text-[13px]'>
                           <p className='text-green-600 mb-1 overflow-hidden text-ellipsis'>Monday</p>
                           <div className='text-[11.5px] flex justify-center items-center flex-wrap w-full '>
                                <p className='relative'>8:00<span className='text-[9px] text-green-600 relative top-0.5 font-bold'>AM</span><span className='font-extrabold 499:inline hidden'> − </span></p>
                                <p className='relative ml-0.5 mb-1'> 12:00<span className='text-[9px] text-green-600 relative top-0.5 font-bold'>PM</span></p>
                           </div>
                        </div>
                        <div className='980:w-[130px] w-[100%] cursor-pointer rounded-xl min-h-[60px] bg-customBlue box-border p-1 pl-2 text-[13px]'>
                           <p className='text-green-600 mb-1 overflow-hidden text-ellipsis'>Tuesday</p>
                           <div className='text-[11.5px] flex justify-center items-center flex-wrap w-full '>
                                <p className='relative'>8:00<span className='text-[9px] text-green-600 relative top-0.5 font-bold'>AM</span><span className='font-extrabold 499:inline hidden'> − </span></p>
                                <p className='relative ml-0.5 mb-1'> 12:00<span className='text-[9px] text-green-600 relative top-0.5 font-bold'>PM</span></p>
                           </div>
                        </div>
                        <div className='980:w-[130px] w-[100%] cursor-pointer rounded-xl min-h-[60px] bg-customBlue box-border p-1 pl-2 text-[13px] overflow-hidden'>
                           <p className='text-green-600 mb-1 w-[100%] overflow-hidden text-ellipsis'>Wednesday</p>
                           <div className='text-[11.5px] flex justify-center items-center flex-wrap w-full '>
                                <p className='relative'>8:00<span className='text-[9px] text-green-600 relative top-0.5 font-bold'>AM</span><span className='font-extrabold 499:inline hidden'> − </span></p>
                                <p className='relative ml-0.5 mb-1'> 12:00<span className='text-[9px] text-green-600 relative top-0.5 font-bold'>PM</span></p>
                           </div>
                        </div>
                        <div className='980:w-[130px] w-[100%] cursor-pointer rounded-xl min-h-[60px] bg-customBlue box-border p-1 pl-2 text-[13px]'>
                           <p className='text-green-600 mb-1 overflow-hidden text-ellipsis'>thurshday</p>
                           <div className='text-[11.5px] flex justify-center items-center flex-wrap w-full'>
                                <p className='relative'>8:00<span className='text-[9px] text-green-600 relative top-0.5 font-bold'>AM</span><span className='font-extrabold 499:inline hidden'> − </span></p>
                                <p className='relative ml-0.5 mb-1'> 12:00<span className='text-[9px] text-green-600 relative top-0.5 font-bold'>PM</span></p>
                           </div>
                        </div>
                        <div className='980:w-[130px] w-[100%] cursor-pointer rounded-xl min-h-[60px] bg-red-950 box-border p-1 pl-2 text-[13px]'>
                           <p className='text-green-600 mb-1 overflow-hidden text-ellipsis'>Friday</p>
                           <div className='text-[11.5px] flex justify-center items-center flex-wrap w-full '>
                                <p className='relative'>8:00<span className='text-[9px] text-green-600 relative top-0.5 font-bold'>AM</span><span className='font-extrabold 499:inline hidden'> − </span></p>
                                <p className='relative ml-0.5 mb-1'> 12:00<span className='text-[9px] text-green-600 relative top-0.5 font-bold'>PM</span></p>
                           </div>
                        </div>
                        <div className='980:w-[130px] w-[100%] cursor-pointer rounded-xl min-h-[60px] bg-customBlue box-border p-1 pl-2 text-[13px]'>
                           <p className='text-green-600 mb-1 overflow-hidden text-ellipsis'>Saturday</p>
                           <div className='text-[11.5px] flex justify-center items-center flex-wrap w-full '>
                                <p className='relative'>8:00<span className='text-[9px] text-green-600 relative top-0.5 font-bold'>AM</span><span className='font-extrabold 499:inline hidden'> − </span></p>
                                <p className='relative ml-0.5 mb-1'> 12:00<span className='text-[9px] text-green-600 relative top-0.5 font-bold'>PM</span></p>
                           </div>
                        </div>
                        <div className='980:w-[130px] w-[100%] cursor-pointer  rounded-xl min-h-[60px] bg-customBlue box-border p-1 pl-2 text-[13px]'>
                           <p className='text-green-600 mb-1 overflow-hidden text-ellipsis'>Sunday</p>
                           <div className='text-[11.5px] flex justify-center items-center flex-wrap w-full '>
                                <p className='relative'>8:00<span className='text-[9px] text-green-600 relative top-0.5 font-bold'>AM</span><span className='font-extrabold 499:inline hidden'> − </span></p>
                                <p className='relative ml-0.5 mb-1'> 12:00<span className='text-[9px] text-green-600 relative top-0.5 font-bold'>PM</span></p>
                           </div>
                        </div>


                    </div>
                </div>

                <div className='980:w-[45%] 800:w-[40%] w-full   px-1 rounded-xl h-[100px] 800:mb-0 mb-[200px]'>
                    <div className='mb-3 px-4 py-2.5 bg-login rounded-xl '>
                        <p className='text-white font-bold text-xl'>Info</p>
                    </div>
                    <div className='w-[100%] flex justify-center  p-5 bg-login  mb-3 rounded-xl'>

                    
                        <div className=' rounded-xl grid grid-cols-3  z-10 gap-x-5 gap-y-4 w-[100%] text-white box-border '>
                            
                            <div className='980:w-[110px] w-[100%] overflow-hidden  group relative cursor-pointer flex justify-center items-center rounded-xl min-h-[60px] bg-customBlue box-border p-1 pl-2 text-[13px]'>
                                <ImLocation2 className='text-xl z-10 '/>
                                <div className='absolute w-[50px] h-[100px] right-[-40px] top-[0px] rotate-45 bg-green-700'></div>
                            </div>
                            <div className='980:w-[110px] w-[100%] group overflow-hidden relative cursor-pointer flex justify-center items-center rounded-xl min-h-[60px] bg-customBlue box-border p-1 pl-2 text-[13px]'>
                                <FaFacebookF  className='text-xl z-10'/>
                                <div className='absolute w-[50px] h-[100px] right-[-40px] top-[0px] rotate-45 bg-facebook'></div>
                            </div>
                            <div className='980:w-[110px] w-[100%] group overflow-hidden relative cursor-pointer flex justify-center items-center rounded-xl min-h-[60px] bg-customBlue box-border p-1 pl-2 text-[13px]'>
                                <BiLogoInstagramAlt  className='text-xl z-10'/>
                                <div className='absolute w-[50px] h-[100px] right-[-40px] top-[0px] rotate-45 bg-instagram'></div>
                            </div>
                            <div className='980:w-[110px] w-[100%] group overflow-hidden relative cursor-pointer flex justify-center items-center rounded-xl min-h-[60px] bg-customBlue box-border p-1 pl-2 text-[13px]'>
                                <FaTiktok  className='text-xl z-10'/>
                                <div className='absolute w-[50px] h-[100px] right-[-40px] top-[0px] rotate-45 bg-tiktok'></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="800:flex w-full relative justify-center 499:px-9  px-3">
                <div ref={movableDivRef} className="800:w-[40%]  h-[450px] relative  w-full rounded-xl ">
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
                <div className="800:w-[57%] w-full flex flex-col 800:items-end ">
                    <div className='mb-3 px-4 py-2.5 bg-login rounded-xl 800:w-[90%] w-full'>
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