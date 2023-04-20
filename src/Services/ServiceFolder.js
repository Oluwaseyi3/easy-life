import { layout } from "../style";
import styles from "../style";
import change from "../assets/change.gif"
import credpal from "../assets/credpal.png"
import Outline from "../components/Outline";
import Buttons from  "../components/Buttons"
const ServiceFolder = () => {
    return ( 
        <div>
       
        <section className={`${layout.sectionReverse} w-full pb-10 py-10  gap-5  h-[85]  text-black `}>
        <div className={`${layout.sectionImg}  h-50 `} >
       <img src={credpal} alt="" className="h-50 w-[100%]  mt-6 rounded-xl" /> 
        </div>
        <div className={`${layout.sectionInfo} ${styles.paddingX} gap-7 w-full`} >
             <div className="text-[40px]">
             Locked Savings Account
             </div>
             <div className="text-[25px]">
             Members can lock their savings for 6 months or 1 year, it accrues an interest of 3% and 6% Respectively. This enhances the culture of long term savings and pays more.

             </div>
             <div>
                <Buttons title="Join the Community"/>
             </div>
        </div>
        </section>
    </div>
     );
}
 
export default ServiceFolder;

