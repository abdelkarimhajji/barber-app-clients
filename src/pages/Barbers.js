import { useEffect } from "react";
import NavBar from "../components/NavBar";
import BottomMenu from "../components/BottomMenu";
import NearestBarbers from "../components/NearestBarbers";
function Barbers(){
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return(
    <div className="bg-login w-full  min-h-screen h-auto flex justify-center">
        <div className="bg-customBlue min-h-screen h-full w-full md:w-[100%] lg:w-[1000px] box-border relative ">
            <NavBar />
            <div className="mt-[180px] 324:mt-[160px] 480:mt-[200px]"></div>
            <NearestBarbers/>
            <BottomMenu location="barbers"/>
            <div className="mb-[120px]"></div>
        </div>
    </div>  
    );
}

export default Barbers;