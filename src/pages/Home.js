import NavBar from "../components/NavBar";
import Ads from "../components/Ads";
import TopBarbers from "../components/TopBarbers";
import AvailabelBarbers from "../components/AvailabelBarbers";
import BottomMenu from "../components/BottomMenu";

function Home(){
    return(
        <div className="bg-login w-full  h-[auto] flex justify-center">
            <div className="bg-customBlue h-full w-full lg:w-[70%] 2xl:w-[1000px] box-border">
                <NavBar />
                <Ads />
                <TopBarbers/>
                <AvailabelBarbers/>
                <BottomMenu/>
            </div>
        </div>
    );
}

export default Home;