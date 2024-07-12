
import { useState } from 'react';
import beard from '../imgs/beard.jpg';
import { FaHeart } from "react-icons/fa";
import { BiSolidBell } from "react-icons/bi";
import { HiMenu } from "react-icons/hi";
import { LuSearch } from "react-icons/lu";
import { PiLineVertical } from "react-icons/pi";
import { FaDeleteLeft } from "react-icons/fa6";
import styles from '../styles/App.module.css';

function NavBar(){
    const [value, setValue] = useState('');

    // this function is used to delete the last charachter in the input of search
    function deleteCharachter(){
        setValue(value.slice(0, -1));
    }

    return(
        <div className="480:h-[180px] boxsh bg-customBlue shadow-lg flex flex-col w-full md:w-[100%] lg:w-[1000px] box-border fixed z-50">
            {/* start top container  of img and not*/}
            <div className=' p-5 box-border flex '>
                {/* start container of image and name */}
                <div className='flex  480:w-1/2 w-[60%]'>
                    <img src={beard} alt=""  className=" object-cover w-[40px] h-[40px] 480:w-[55px] 480:h-[55px] rounded-full"/>
                    <div className='pt-1 pl-3'>
                        <p className={`text-green-600 text-sm ${styles.truncate}`}>Welcome</p>
                        <p className={`text-white text-[11px] font-bold 480:text-[14px] ${styles.truncate}`}>Hey, Abdelkarim hajji</p>
                    </div>
                </div>
                {/* end container of image and name */}
                {/* start container notification */}
                <div className='flex 480:w-1/2 w-[40%] justify-end 480:items-center items-end '>
                    <div className='480:w-[35px] w-[30px]  480:h-[35px] h-[30px] ml-2 border-[2px] border-white hover:border-green-700 transition-all group bg-login cursor-pointer rounded-full flex justify-center items-center'>
                        <FaHeart className='text-[13px] 480:text-[16px] text-white group-hover:text-green-700 transition-all'/>
                    </div>
                    <div className='480:w-[35px] w-[30px] 480:h-[35px] h-[30px] ml-2 relative border-[2px] border-white hover:border-green-700  transition-all group bg-login cursor-pointer rounded-full flex justify-center items-center'>
                        <BiSolidBell className='text-[13px] 480:text-[16px] text-white group-hover:text-green-700 transition-all'/>
                        <div className='w-[12px] h-[12px] flex items-center justify-center 480:w-[12px] 480:h-[12px] bg-customBlue rounded-full absolute top-0 left-[19.5px] 480:left-[23.5px]'>
                            <div className='w-[8px] h-[8px] bg-red-600 rounded-full'></div>
                        </div>
                    </div>
                    <div className='480:w-[35px] w-[30px] 480:h-[35px] h-[30px] ml-2 border-[2px] border-white  hover:border-green-700  transition-all group bg-login cursor-pointer rounded-full flex justify-center items-center'>
                        <HiMenu  className='text-[13px] 480:text-[16px] text-white group-hover:text-green-700 transition-all'/>
                    </div>
                </div>
                {/* end container notification */}
            </div>
            {/* end top container of image and not */}
            {/* start container search */}
            <div className='w-full  px-5 flex justify-center items-center rounded-xl  '>
                <div className=' w-full   h-[35px] 480:h-[50px]  flex rounded-xl  mb-6 480:mb-0  480:mt-[16px]  480:mb-none'>
                    <div className='h-full w-full relative'>
                        <LuSearch className='absolute text-white top-2 480:top-1.5 left-3 text-[20px] 480:text-[30px]'/>
                        <input type="text" onChange={(e) => setValue(e.target.value)} value={value}  placeholder='Find Your Barber' className='480:h-[85%] h-full pl-10 480:pl-14 pr-5  bg-searchBar text-white text-sm 480:text-md 2xl:text-[16px] w-full border-none outline-none rounded-l-xl'/>
                    </div>
                    <div className='480:h-[85%] h-full rounded-r-xl bg-searchBar  w-[60px] flex justify-center items-center relative'>
                        <PiLineVertical className='absolute  right-9 top-[3px] 480:top-[4.5px] text-white 480:text-[35px] text-[30px]'/>
                        <FaDeleteLeft onClick={deleteCharachter} className='text-white cursor-pointer text-xl hover:text-login' />
                    </div>
                </div>
            </div>
            {/* end container search */}
        </div>
    );
}

export default NavBar;