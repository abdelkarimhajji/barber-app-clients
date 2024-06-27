import NavBar from "../components/NavBar";
import Ads from "../components/Ads";
import TopBarbers from "../components/TopBarbers";

// import { FaHeart } from "react-icons/fa";
function Home(){
    return(
        <div className="bg-login w-full  h-[2000px] flex justify-center">
            <div className="bg-customBlue h-full w-full lg:w-[70%] 2xl:w-[1000px] box-border">
                <NavBar />
                <Ads />
                <TopBarbers/>
                <div className="w-full px-3 480:px-5">
                    <div className="pl-3"><p className="font-extrabold text-xl text-green-600 mb-6">Barbers Availabel</p></div>
                    {/* <div className="flex   justify-center w-full min-h-screen bg-gray-100 p-4"> */}
                        <div className=" w-full grid grid-cols-2  md:grid-cols-3  gap-x-4 480:gap-x-2 gap-y-4  480:gap-y-12">
                            <div className="w-[100%] 480:w-[90%] sm:h-[350px] h-[300px] shadow-black2 rounded-[20px]  mx-auto  flex items-center justify-center">
                            <p>Div 1</p>
                            </div>
                            <div className="w-[100%] 480:w-[90%] sm:h-[350px] h-[300px] shadow-black2 rounded-[20px]  mx-auto  flex items-center justify-center">
                            <p>Div 2</p>
                            </div>
                            <div className="w-[100%] 480:w-[90%] sm:h-[350px] h-[300px] shadow-black2 rounded-[20px]  mx-auto  flex items-center justify-center">
                            <p>Div 3</p>    
                            </div>
                            <div className="w-[100%] 480:w-[90%] sm:h-[350px] h-[300px] shadow-black2 rounded-[20px]  mx-auto  flex items-center justify-center">
                            <p>Div 4</p>
                            </div>
                        </div>
                     {/* </div> */}
                </div>
            </div>
        </div>
    );
}

export default Home;