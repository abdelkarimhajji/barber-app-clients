
import {useNavigate} from 'react-router-dom';
import { GiBeard } from "react-icons/gi";

function Welcome() {
    const navigate = useNavigate();
    return (
        <div className="bg-customBlue min-h-screen h-auto flex  justify-center pt-4 pb-4 2xl:items-center sm:pt-10 sm:pb-10 ">
            {/* start of the container of two parts */}
            <div className="bg-black min-h-full w-11/12 flex  2xl:w-[1300px] 2xl:h-[720px] rounded-xl">
                {/* start of the first part of left login */}
                <div className="bg-beard bg-custom-left w-3/5 h-full hidden lg:block rounded-l-xl">
                    <div className="w-full h-full bg-transparent text-white rounded-l-xl">
                        <div className="  flex flex-col items-center box-border  pt-[100px]">
                            <GiBeard className="text-[80px] text-white"/>
                        </div>
                        <div className=" h-[600px]  w-full box-border overflow-hidden flex flex-col   justify-center ">
                            <div className=" w-full h-auto  flex flex-col items-center box-border pl-[30px] pr-[80px] ">
                                <h3 className="text-5xl font-bold mb-6 text-center ">Welcome back!</h3>
                                <p className="ml-2 text-lg tracking-wide mb-6 text-center">Get access to your Orders, Wishlist and Recommendations,
                                     Get access to your Orders, Wishlist and Recommendations.</p>
                                <button type="button" className="bg-green-800 hover:bg-green-900  ml-3 py-3.5 w-[300px] rounded-xl  transition-all ">Watch Demo</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end of the first part of left login */}
                {/* start of the second part of right login */}
                <div className="bg-login w-full lg:w-2/5 h-full flex items-center justify-center flex-col text-white  sm:py-10 box-border rounded-xl lg:rounded-r-xl">
                    <div className="w-full flex items-center justify-center  flex-col mb-[60px] sm:mb-[100px]">
                        <div className="w-[90px] h-[90px] rounded-2xl flex items-center justify-center bg-white shadow-white mb-5">
                                <GiBeard className="text-[75px] text-login"/>
                        </div>
                        <h1 className="font-semibold font-signature tracking-widest text-2xl mb-1">7ala9</h1>
                        <p className="text-sm  tracking-widest text-gray">Choose the Barber</p>
                    </div>
                    <h2 className="text-3xl xsm:text-3xl font-medium tracking-wide text-center mb-6">Healthy Food, For <br />Breakfast</h2>
                    <p className=" text-sm sm:text-base  text-center   tracking-wide text-gray mb-[20px] lg:mb-[90px]">Lorem ipsum dolor sit amet, consectetur  <br />adipiscing elit, sed do eiusmod tempor</p>
                    <button type="button" className="bg-green-800 hover:bg-green-900 transition-all py-3 rounded-xl px-5 lg:hidden mb-[40px] sm:mb-[80px] text-sm">Watch Demo</button>
                    <div className="flex flex-col  justify-center w-full items-center">
                        <button type="button" onClick={() => navigate("login")} className=" w-11/12 xsm:w-[280px] sm:w-1/2 lg:w-[300px] h-[55px]  bg-red-800 hover:bg-red-900 transition-all rounded-xl mb-4">clients login</button>
                        <button type="button" className=" w-11/12 xsm:w-[280px]  sm:w-1/2 lg:w-[300px] h-[55px] bg-brown hover:bg-hover rounded-xl">barbers login</button>
                    </div>
                </div>
                {/* end of the second part of right login */}
            </div>
            {/* end of the container of two parts */}
        </div>
    );
  }
  
  export default Welcome;