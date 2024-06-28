import NavBar from "../components/NavBar";
import Ads from "../components/Ads";
import TopBarbers from "../components/TopBarbers";
import NearestBarbers from "../components/NearestBarbers";
import BottomMenu from "../components/BottomMenu";

function Home(){
    return(
        <div className="bg-login w-full  min-h-screen h-auto flex justify-center">
            <div className="bg-customBlue h-full w-full lg:w-[70%] 2xl:w-[1000px] box-border relative">
                <NavBar />
                <Ads />
                <TopBarbers/>
                <NearestBarbers/>
                <BottomMenu/>
            </div>
        </div>
    );
}

export default Home;