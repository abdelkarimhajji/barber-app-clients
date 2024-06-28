import NavBar from "../components/NavBar";
import BottomMenu from "../components/BottomMenu";
import NearestBarbers from "../components/NearestBarbers";
function Barbers(){
    return(
    <div className="bg-login w-full  min-h-screen h-auto flex justify-center">
        <div className="bg-customBlue h-full w-full lg:w-[70%] 2xl:w-[1000px] box-border relative ">
            <NavBar />
            <div className="mt-[180px] 324:mt-[160px] 480:mt-[200px]"></div>
            <NearestBarbers/>
            <BottomMenu location="barbers"/>
        </div>
    </div>  
    );
}

export default Barbers;