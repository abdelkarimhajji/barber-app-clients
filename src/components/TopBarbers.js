import {useState} from 'react';
import beard from '../imgs/beard.jpg';
import styles from '../styles/App.module.css';
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { useNavigate} from "react-router-dom";

function TopBarbers() {
    const [liked, setLiked] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="w-full px-5 text-white mb-10">
            <div className="pl-3"><p className="font-extrabold text-xl text-green-600 mb-5">Top Barbers</p></div>
            <div className={`flex gap-5   pb-5  overflow-x-scroll ${styles.hideScrollbar}`}>
            <div className="min-h-[250px] h-auto 480:w-[250px] w-[220px] shadow-black2 rounded-[20px] flex-shrink-0 cursor-pointer" onClick={() => navigate("/profileBarber")}>
                <div className="h-[70%] w-full"><img src={beard} alt=""className="h-full w-full object-cover rounded-t-[20px]" /></div>
                    <div className="h-[30%] w-full p-3 flex">
                        <div className="w-[80%]">
                            <h2 className={`font-bold ${styles.truncate}`}>Salon DODO Salon DODO</h2>
                            <p className={`text-sm text-gray ${styles.truncate}`}>Abdemoneim</p>
                        </div>
                        <div className="w-[20%] items-center justify-center flex flex-col">
                            { liked ? <FaHeart onClick={() => setLiked(!liked)} className="text-lg cursor-pointer text-red-700 mb-1"/>
                                : <FaRegHeart onClick={() => setLiked(!liked)} className="text-lg cursor-pointer text-red-700 mb-1"/>
                            }
                            <p className="text-[12px]">20K</p>
                        </div>
                    </div>
                </div>
                <div className="min-h-[250px] h-auto 480:w-[250px] w-[220px] shadow-black2 rounded-[20px] flex-shrink-0 cursor-pointer"  onClick={() => navigate("/profileBarber")}>
                <div className="h-[70%] w-full"><img src={beard} alt=""className="h-full w-full object-cover rounded-t-[20px]" /></div>
                    <div className="h-[30%] w-full p-3 flex">
                        <div className="w-[80%]">
                            <h2 className={`font-bold ${styles.truncate}`}>Salon DODO Salon DODO</h2>
                            <p className={`text-sm text-gray ${styles.truncate}`}>Abdemoneim</p>
                        </div>
                        <div className="w-[20%] items-center justify-center flex flex-col">
                        { liked ? <FaHeart onClick={() => setLiked(!liked)} className="text-lg cursor-pointer text-red-700 mb-1"/>
                                : <FaRegHeart onClick={() => setLiked(!liked)} className="text-lg cursor-pointer text-red-700 mb-1"/>
                            }
                            <p className="text-[12px]">20K</p>
                        </div>
                    </div>
                </div>
                <div className="min-h-[250px] h-auto 480:w-[250px] w-[220px] shadow-black2 rounded-[20px] flex-shrink-0 cursor-pointer"  onClick={() => navigate("/profileBarber")}>
                <div className="h-[70%] w-full"><img src={beard} alt=""className="h-full w-full object-cover rounded-t-[20px]" /></div>
                    <div className="h-[30%] w-full p-3 flex">
                        <div className="w-[80%]">
                            <h2 className={`font-bold ${styles.truncate}`}>Salon DODO Salon DODO</h2>
                            <p className={`text-sm text-gray ${styles.truncate}`}>Abdemoneim</p>
                        </div>
                        <div className="w-[20%] items-center justify-center flex flex-col">
                        { liked ? <FaHeart onClick={() => setLiked(!liked)} className="text-lg cursor-pointer text-red-700 mb-1"/>
                                : <FaRegHeart onClick={() => setLiked(!liked)} className="text-lg cursor-pointer text-red-700 mb-1"/>
                            }
                            <p className="text-[12px]">20K</p>
                        </div>
                    </div>
                </div>
                <div className="min-h-[250px] h-auto 480:w-[250px] w-[220px] shadow-black2 rounded-[20px] flex-shrink-0 cursor-pointer"  onClick={() => navigate("/profileBarber")}>
                <div className="h-[70%] w-full"><img src={beard} alt=""className="h-full w-full object-cover rounded-t-[20px]" /></div>
                    <div className="h-[30%] w-full p-3 flex">
                        <div className="w-[80%]">
                            <h2 className={`font-bold ${styles.truncate}`}>Salon DODO Salon DODO</h2>
                            <p className={`text-sm text-gray ${styles.truncate}`}>Abdemoneim</p>
                        </div>
                        <div className="w-[20%] items-center justify-center flex flex-col">
                        { liked ? <FaHeart onClick={() => setLiked(!liked)} className="text-lg cursor-pointer text-red-700 mb-1"/>
                                : <FaRegHeart onClick={() => setLiked(!liked)} className="text-lg cursor-pointer text-red-700 mb-1"/>
                            }
                            <p className="text-[12px]">20K</p>
                        </div>
                    </div>
                </div>
                
                
            </div>
        </div>
    )
}

export default TopBarbers;