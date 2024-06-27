


function AvailabelBarbers(){
    return (
        <div className="w-full px-3 480:px-5">
            <div className="pl-3"><p className="font-extrabold text-xl text-green-600 mb-6">Barbers Availabel</p></div>
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
        </div>
    );
}

export default  AvailabelBarbers;