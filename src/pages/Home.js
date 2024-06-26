import NavBar from "../components/NavBar";
import Ads from "../components/Ads";

function Home(){
    return(
        <div className="bg-login w-full  h-[2000px] flex justify-center">
            <div className="bg-customBlue h-full w-full lg:w-[70%] 2xl:w-[1000px] box-border">
                <NavBar />
                <Ads />
                <div className="w-full px-5 text-white ">
                    <p className="font-extrabold text-xl text-green-600">Top Barbers</p>
                </div>
            </div>
        </div>
    );
}

export default Home;