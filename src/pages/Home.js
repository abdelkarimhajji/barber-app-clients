import { useEffect } from "react";
import NavBar from "../components/NavBar";
import Ads from "../components/Ads";
import TopBarbers from "../components/TopBarbers";
import NearestBarbers from "../components/NearestBarbers";
import BottomMenu from "../components/BottomMenu";
import ProposedBarbers from "../components/ProposedBarbers"

function Home(){

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return(
        <div className="bg-login w-full  min-h-screen h-auto flex justify-center">
            <div className="bg-customBlue h-full min-h-screen w-full md:w-[100%] lg:w-[1000px] box-border relative ">
                <NavBar />
                <Ads />
                <TopBarbers/>
                <NearestBarbers/>
                <ProposedBarbers/>
                <BottomMenu location="home"/>
            </div>
        </div>
    );
}

export default Home;