
import beard from '../imgs/beard.jpg';
import { FaHeart } from "react-icons/fa";
import { BiSolidBell } from "react-icons/bi";
import { HiMenu } from "react-icons/hi";
import { LuSearch } from "react-icons/lu";
import { PiLineVertical } from "react-icons/pi";
import { FaDeleteLeft } from "react-icons/fa6";
import styles from '../styles/App.module.css';

function NavBar(){
    return(
        <div className="480:h-[180px] boxsh bg-customBlue shadow-lg flex flex-col w-full lg:w-[70%] 2xl:w-[1000px] box-border fixed z-50">
            {/* start top container  of img and not*/}
            <div className=' p-5 box-border flex '>
                {/* start container of image and name */}
                <div className='flex  480:w-1/2 w-[60%]'>
                    <img src={beard} alt="" srcset="" className=" object-cover w-[40px] h-[40px] 480:w-[55px] 480:h-[55px] rounded-full"/>
                    <div className='pt-1 pl-3'>
                        <p className={`text-green-600 text-sm ${styles.truncate}`}>Welcome</p>
                        <p className={`text-white text-[11px] font-bold 480:text-[14px] ${styles.truncate}`}>Hey, Abdelkarim hajji</p>
                    </div>
                </div>
                {/* end container of image and name */}
                {/* start container notification */}
                <div className='flex 480:w-1/2 w-[40%] justify-end 480:items-center items-end '>
                    <div className='480:w-[40px] w-[30px]  480:h-[40px] h-[30px] ml-2 border-[2px] border-white  bg-login cursor-pointer rounded-full flex justify-center items-center'>
                        <FaHeart className='text-[13px] 480:text-lg text-white'/>
                    </div>
                    <div className='480:w-[40px] w-[30px] 480:h-[40px] h-[30px] ml-2  border-[2px] border-white  bg-login cursor-pointer rounded-full flex justify-center items-center'>
                        <BiSolidBell className='text-[13px] 480:text-lg text-white'/>
                    </div>
                    <div className='480:w-[40px] w-[30px] 480:h-[40px] h-[30px] ml-2 border-[2px] border-white  bg-login cursor-pointer rounded-full flex justify-center items-center'>
                        <HiMenu  className='text-[13px] 480:text-lg text-white'/>
                    </div>
                </div>
                {/* end container notification */}
            </div>
            {/* end top container of image and not */}
            {/* start container search */}
            <div className='w-full  px-5 flex justify-center items-center rounded-xl '>
                <div className=' w-full   h-[35px] 480:h-[50px]  flex rounded-xl mb-6 480:mb-none'>
                    <div className='h-full w-full relative'>
                        <LuSearch className='absolute text-white top-2 480:top-2.5 left-3 text-[20px] 480:text-[30px]'/>
                        <input type="text" placeholder='Find Your Barber' className='h-full pl-10 480:pl-14 pr-5 bg-searchBar text-white text-sm 480:text-md 2xl:text-[16px] w-full border-none outline-none rounded-l-xl'/>
                    </div>
                    <div className='rounded-r-xl bg-searchBar  w-[60px] flex justify-center items-center relative'>
                        <PiLineVertical className='absolute  right-9 top-[3px] 480:top-[5px] text-white 480:text-[40px] text-[30px]'/>
                        <FaDeleteLeft className='text-white cursor-pointer text-xl'/>
                    </div>
                </div>
            </div>
            {/* end container search */}
        </div>
    );
}

export default NavBar;