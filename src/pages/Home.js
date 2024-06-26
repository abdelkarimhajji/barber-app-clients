import NavBar from "../components/NavBar";
import beard from '../imgs/beard.jpg';

function Home(){
    return(
        <div className="bg-login w-full  h-[2000px] flex justify-center">
            <div className="bg-customBlue h-full w-full lg:w-1/2 2xl:w-[800px] box-border">
                <NavBar />
                <div className="w-full   overflow-y-scroll flex text-white mt-[180px] 324:mt-[160px] 480:mt-[200px] gap-x-10 px-8">
                    <div className="flex-shrink-0  ">
                        <img src={beard} alt=""  className="rounded-[20px]  w-[500px] h-[300px]"/>
                    </div>
                    <div className="flex-shrink-0">
                        <img src={beard} alt=""  className="rounded-[20px] w-[500px] h-[300px]"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;