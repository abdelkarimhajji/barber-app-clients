import NavBar from "../components/NavBar";
import BottomMenu from "../components/BottomMenu";
import beard from '../imgs/beard.jpg';

function ProfileBarber(){
    return (
        <div className="bg-login w-full  min-h-screen h-auto flex justify-center">
            <div className="bg-customBlue h-full min-h-screen w-full lg:w-[70%] 2xl:w-[1000px] box-border relative ">
                <NavBar />
                <div className="mt-[163px] 324:mt-[165px] 480:mt-[200px]"></div>
                
                <div className="w-full flex items-center flex-col">
                    <div className="w-[90%] h-[300px] bg-red-400 relative rounded-xl">
                        <img src={beard} alt="" className="w-full h-[300px] object-cover rounded-xl"/>
                        <div className="w-[140px] h-[140px] rounded-full bg-red-600 absolute top-[260px] left-10">
                            <img src={beard} alt="" className="w-full h-full object-cover rounded-full"/>
                        </div>
                    </div>
                    <div className="w-full pl-[245px] pt-[25px] text-white">
                        <p className="font-bold text-lg">Abdelkarim Hajji</p>
                        <p>Hajji</p>
                    </div>
                </div>
                






                <BottomMenu location="posts"/>
                <div className='mb-[120px]'>

                </div>
            </div>
        </div>
    );
}

export default ProfileBarber;