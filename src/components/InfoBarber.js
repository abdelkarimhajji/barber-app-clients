
import { ImLocation2 } from "react-icons/im";
import { FaFacebookF } from "react-icons/fa6";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaTiktok } from "react-icons/fa6";

function InfoBarber(){
    return(
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

    );
}

export default InfoBarber;