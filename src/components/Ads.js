import styles from '../styles/App.module.css';
import beard from '../imgs/beard.jpg';

function Ads()
{
    return (
        <div className={`w-full   mb-20 overflow-y-scroll flex text-white mt-[180px] 324:mt-[160px] 480:mt-[200px] gap-x-5 px-5 ${styles.hideScrollbar}`}>
            <div className="flex-shrink-0 ">
                <img src={beard} alt=""  className="rounded-[20px] w-[300px] h-[180px] sm:w-[500px] sm:h-[250px]"/>
            </div>
            <div className="flex-shrink-0">
                <img src={beard} alt=""  className="rounded-[20px] w-[300px] h-[180px] sm:w-[500px] sm:h-[250px]"/>
            </div>
            <div className="flex-shrink-0">
                <img src={beard} alt=""  className="rounded-[20px] w-[300px] h-[180px] sm:w-[500px] sm:h-[250px]"/>
            </div>
        </div>
    );
}

export default Ads;