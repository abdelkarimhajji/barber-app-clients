import styles from '../styles/App.module.css';
import beard from '../imgs/beard.jpg';
import { FaArrowRightLong } from "react-icons/fa6";
function Ads()
{
    return (
        <div className='px-5'>
            <div className={`w-full  mb-16  md:mb-20 overflow-y-scroll flex  text-white mt-[180px] 324:mt-[160px] 480:mt-[200px] gap-x-5 ${styles.hideScrollbar}`}>
                <div className="flex-shrink-0 shadow-black2 relative">
                    <img src={beard} alt=""  className="object-cover rounded-[20px] w-[270px] h-[180px] sm:w-[500px] sm:h-[250px]"/>
                    <div className='absolute flex justify-center items-center text-[12px] font-semibold top-[127px] left-[25px]  sm:top-[185px] sm:left-[40px]  cursor-pointer rounded-xl px-[15px] py-[6px] bg-red-900 hover:bg-green-900 transition-all'>
                        <p>By now </p>
                        <FaArrowRightLong  className='ml-3' />
                    </div>
                </div>
                <div className="flex-shrink-0 shadow-black2 relative">
                    <img src={beard} alt=""  className="object-cover rounded-[20px] w-[270px] h-[180px] sm:w-[500px] sm:h-[250px]"/>
                    <div className='absolute flex justify-center items-center text-[12px] font-semibold top-[127px] left-[25px]  sm:top-[185px] sm:left-[40px]  cursor-pointer rounded-xl px-[15px] py-[6px] bg-red-900 hover:bg-green-900 transition-all'>
                        <p>By now </p>
                        <FaArrowRightLong  className='ml-3' />
                    </div>
                </div>
                <div className="flex-shrink-0 shadow-black2 relative">
                    <img src={beard} alt=""  className="object-cover rounded-[20px] w-[270px] h-[180px] sm:w-[500px] sm:h-[250px]"/>
                    <div className='absolute flex justify-center items-center text-[12px] font-semibold top-[127px] left-[25px]  sm:top-[185px] sm:left-[40px]  cursor-pointer rounded-xl px-[15px] py-[6px] bg-red-900 hover:bg-green-900 transition-all'>
                        <p>By now </p>
                        <FaArrowRightLong  className='ml-3' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ads;