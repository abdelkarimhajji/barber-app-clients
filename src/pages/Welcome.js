import { GiBeard } from "react-icons/gi";

function Welcome() {
    return (
        <div className="bg-customBlue min-h-screen h-auto flex  justify-center pt-4 pb-4 2xl:items-center sm:pt-10 sm:pb-10 ">
            <div className="bg-black min-h-full w-10/12 flex  2xl:w-[1300px] 2xl:h-[720px] rounded-xl">
                <div className="bg-beard bg-custom-left w-3/5 h-full hidden lg:block rounded-l-xl">
                    <div className="w-full h-full bg-transparent text-white rounded-l-xl">
                        <div className="  flex flex-col items-start box-border pl-[80px] pt-[80px]">
                            <GiBeard className="text-[60px] text-white"/>
                        </div>
                        <div className=" h-[600px]  w-full box-border overflow-hidden flex flex-col justify-center pr-[70px]">
                            <div className=" w-full h-auto  box-border pl-[80px]">
                                <h3 className="text-5xl font-bold mb-6">Welcome back!</h3>
                                <p className="ml-2 text-lg text-justify tracking-wide mb-6">Get access to your Orders, Wishlist and Recommendations,
                                     Get access to your Orders, Wishlist and Recommendations.</p>
                                <button type="button" className="bg-brown ml-3 py-3.5 w-[300px] rounded-xl hover:bg-hover transition-all">Barber Login</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-login w-full lg:w-2/5 h-full flex items-center justify-center flex-col text-white  sm:py-10 box-border rounded-xl lg:rounded-r-xl">
                    <div className="w-full flex items-center justify-center  flex-col mb-[60px] sm:mb-[100px]">
                        <div className="w-[90px] h-[90px] rounded-2xl flex items-center justify-center bg-white shadow-white mb-6">
                                <GiBeard className="text-[75px] text-login"/>
                        </div>
                        <h1 className="font-semibold font-signature tracking-widest text-2xl mb-1">Barbers</h1>
                        <p className="text-sm  tracking-widest text-gray">Choose the Barber</p>
                    </div>
                    <h2 className="text-3xl xsm:text-3xl font-medium tracking-wide text-center mb-6">Healthy Food, For <br />Breakfast</h2>
                    <p className=" text-sm sm:text-base  text-center   tracking-wide text-gray mb-[90px] sm:mb-[80px]">Lorem ipsum dolor sit amet, consectetur  <br />adipiscing elit, sed do eiusmod tempor</p>
                    <div className="flex flex-col  justify-center w-full items-center">
                        <button type="button" className=" w-11/12 xsm:w-[300px] sm:w-1/2 lg:w-[300px] h-[55px]  bg-red-800 hover:bg-red-900 transition-all rounded-xl mb-4">Sign In</button>
                        <button type="button" className=" w-11/12 xsm:w-[300px]  sm:w-1/2 lg:w-[300px] h-[55px] bg-brown hover:bg-hover rounded-xl">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Welcome;