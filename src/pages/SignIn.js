import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GiBeard } from "react-icons/gi";
import styles from "../styles/App.module.css";

function SignIn() {
  return (
    <div   className="bg-customBlue min-h-screen h-auto flex  items-center justify-center pt-4 pb-4 2xl:items-center sm:pt-10 sm:pb-10 box-border ">
            {/* start of the container of two parts */}
            <div className="bg-black min-h-full w-11/12 flex h-full 2xl:w-[1300px] lg:h-[720px] rounded-xl  box-border">
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
                <div className="bg-login w-full lg:w-2/5 h-full flex items-center justify-center flex-col text-white  box-border rounded-xl lg:rounded-r-xl py-[50px]">
                    <div className="w-full flex items-center justify-center  flex-col mb-[60px] sm:mb-[100px]">
                        <div className="w-[90px] h-[90px] rounded-2xl flex items-center justify-center bg-white shadow-white mb-5">
                                <GiBeard className="text-[75px] text-login"/>
                        </div>
                        <h1 className="font-semibold font-signature tracking-widest text-2xl mb-[40px]">7ala9</h1>
                        <h2 className="text-4xl font-semibold mb-4">Welcome back</h2>
                        <p className="w-8/12 text-center mb-10 ">Lorem ipsum dolor sit amet, consectetur, adipiscing elit, sed do eiusmod tempor</p>
                        <div className="flex  rounded-xl h-[50px] w-[300px] relative">
                            <GiBeard className="text-[25px] top-3 left-2 text-green-800  w-[40px] absolute"/>
                              <input type="text" placeholder="Login or Email" className={`rounded-xl w-full border-green-500 text-login  focus:outline-green-500 box-border pl-[50px] ${styles.inputPlaceholder}`}/>
                        </div>
                    </div>
                    
                </div>
                {/* end of the second part of right login */}
            </div>
            {/* end of the container of two parts */}
        </div>
  );
}

export default SignIn;
