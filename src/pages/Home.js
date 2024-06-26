
import beard from '../imgs/beard.jpg';
import { FaHeart } from "react-icons/fa";
import { BiSolidBell } from "react-icons/bi";
import { HiMenu } from "react-icons/hi";
import { LuSearch } from "react-icons/lu";
import { PiLineVertical } from "react-icons/pi";
import { FaDeleteLeft } from "react-icons/fa6";
function Home(){
    return(
        <div className="bg-login w-full  h-[2000px] flex justify-center">
            <div className="bg-customBlue h-full w-1/2 2xl:w-[800px] box-border">
                <div className="h-[180px] boxsh bg-customBlue shadow-lg flex flex-col w-1/2 2xl:w-[800px] box-border fixed">
                    {/* start top container  of img and not*/}
                    <div className=' p-5 box-border flex '>
                        {/* start container of image and name */}
                        <div className='flex  w-1/2 '>
                            <img src={beard} alt="" srcset="" className="w-[55px] h-[55px] rounded-full"/>
                            <div className='pt-1 pl-3'>
                                <p className='text-green-600 text-sm'>Welcome</p>
                                <p className='text-white'>Hey, Abdelkarim hajji</p>
                            </div>
                        </div>
                        {/* end container of image and name */}
                        {/* start container notification */}
                        <div className='flex w-1/2 justify-end items-center'>
                            <div className='w-[40px] h-[40px] ml-2 border-[2px] border-white  bg-login cursor-pointer rounded-full flex justify-center items-center'>
                                <FaHeart className='text-lg text-white'/>
                            </div>
                            <div className='w-[40px] h-[40px] ml-2  border-[2px] border-white  bg-login cursor-pointer rounded-full flex justify-center items-center'>
                                <BiSolidBell className='text-lg text-white'/>
                            </div>
                            <div className='w-[40px] h-[40px] ml-2 border-[2px] border-white  bg-login cursor-pointer rounded-full flex justify-center items-center'>
                                <HiMenu  className='text-lg text-white'/>
                            </div>
                        </div>
                        {/* end container notification */}
                    </div>
                    {/* end top container of image and not */}
                    <div className='w-full  px-5 flex justify-center items-center rounded-xl'>
                        <div className=' w-11/12 h-[50px]  flex rounded-xl'>
                            <div className='h-full w-[91%] relative'>
                                <LuSearch className='absolute text-white top-2.5 left-3 text-[30px]'/>
                                <PiLineVertical className='absolute left-[97%] top-[5px] text-white text-[40px]'/>
                                <input type="text" placeholder='Find Your Barber' className='h-full pl-14 pr-5 bg-searchBar text-white w-full border-none outline-none rounded-l-xl'/>
                            </div>
                            <div className='rounded-r-xl bg-searchBar w-[9%] flex justify-center items-center'>
                                <FaDeleteLeft className='text-white cursor-pointer text-xl'/>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;