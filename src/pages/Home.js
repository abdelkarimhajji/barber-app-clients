import NavBar from "../components/NavBar";
import Ads from "../components/Ads";
import TopBarbers from "../components/TopBarbers";
import AvailabelBarbers from "../components/AvailabelBarbers";


function Home(){
    return(
        <div className="bg-login w-full  h-[2000px] flex justify-center">
            <div className="bg-customBlue h-full w-full lg:w-[70%] 2xl:w-[1000px] box-border">
                <NavBar />
                <Ads />
                <TopBarbers/>
                <AvailabelBarbers/>
                <div></div>
            </div>
        </div>
    );
}

export default Home;