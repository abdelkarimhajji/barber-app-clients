
import {useNavigate} from 'react-router-dom';
import { GiBeard } from "react-icons/gi";
import {useEffect, useRef} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
function Welcome() {
    useEffect(() => {
        AOS.init({
          duration: 2000, // values from 0 to 3000, with step 50ms
          once: true, // whether animation should happen only once - while scrolling down
        });
      }, []);
    const navigate = useNavigate();
    const elementRef = useRef(null);
            
    return (
        <div  ref={elementRef} className="bg-customBlue min-h-screen h-full flex  items-center justify-center pt-4 pb-4 2xl:items-center sm:pt-10 sm:pb-10 box-border ">
            {/* start of the container of two parts */}
            <div className="bg-black min-h-full w-11/12 flex h-full 2xl:w-[1300px] lg:h-[720px] rounded-xl  box-border">
                {/* start of the first part of left login */}
                <div className="bg-beard bg-custom-left w-3/5 h-full hidden lg:block rounded-l-xl overflow-hidden">
                    <div className="w-full h-full bg-transparent text-white rounded-l-xl">
                        <div className="  flex flex-col items-center box-border  pt-[100px]">
                            <GiBeard className="text-[80px] text-white"/>
                        </div>
                        <div className=" h-[600px]   w-full box-border overflow-hidden flex flex-col   justify-center ">
                            <div className=" w-full h-auto  flex flex-col items-center box-border pl-[30px] pr-[80px] ">
                                <h3 className="text-5xl font-bold mb-6 text-center ">Welcome back!</h3>
                                <p className="ml-2 text-lg tracking-wide mb-6 text-center">Manage your bookings, explore styles, discover top barbers, track your history, and enjoy a seamless grooming experience!.</p>
                                <button type="button" className="bg-green-800 hover:bg-green-900  ml-3 py-3.5 w-[300px] rounded-xl  transition-all ">Watch Demo</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end of the first part of left login */}
                {/* start of the second part of right login */}
                <div className="bg-login w-full lg:w-2/5 h-full flex items-center justify-center flex-col text-white  box-border    rounded-xl lg:rounded-none lg:rounded-r-xl py-[50px]">
                    <div className="w-full flex items-center justify-center  flex-col mb-[60px] sm:mb-[100px]">
                        <div className="w-[90px] h-[90px] rounded-2xl flex items-center justify-center bg-white shadow-white mb-5">
                                <GiBeard className="text-[75px] text-login"/>
                        </div>
                        <h1 className="font-semibold font-signature tracking-widest text-2xl mb-1">7ala9</h1>
                        <p className="text-sm  tracking-widest text-gray">Choose the Barber</p>
                    </div>
                    <h2 className="text-3xl xsm:text-3xl font-medium tracking-wide text-center mb-6">Book Your Barber <br />Get the Perfect Cut!</h2>
                    <p className=" text-sm sm:text-base  text-center   tracking-wide text-gray mb-[20px] ">Get the perfect haircut! Pick your barber <br />book your appointment now!</p>
                    <p className='lg:mb-[50px]  lg:block hidden text-sm'>Choose Your Choice !</p>
                    <button type="button" className="bg-green-800 hover:bg-green-900 transition-all py-3 rounded-xl px-5 lg:hidden mb-[40px] sm:mb-[80px] text-sm">Watch Demo</button>
                    <div className="flex flex-col  justify-center w-full items-center">
                        <button type="button" onClick={() => navigate("/signIn")} className=" w-11/12 xsm:w-[280px] sm:w-1/2 lg:w-[300px] h-[55px]  bg-red-800 hover:bg-red-900 transition-all rounded-xl mb-4">clients login</button>
                        <button type="button" onClick={() => window.location.href = "https://tailwindcss.com/docs/font-size"} className=" w-11/12 xsm:w-[280px]  sm:w-1/2 lg:w-[300px] h-[55px] bg-brown hover:bg-hover rounded-xl">barbers login</button>
                        {/* <button onClick={handleFullscreen}>Go Fullscreen</button> */}
                    </div>
                </div>
                {/* end of the second part of right login */}
            </div>
            {/* end of the container of two parts */}
        </div>
    );
  }
  
  export default Welcome;