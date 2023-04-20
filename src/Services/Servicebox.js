import { layout } from "../style";
import styles from "../style";
import change from "../assets/change.gif"

import Outline from "../components/Outline"
const Servicebox = () => {
    return ( 
        <div className="flex flex-col gap-10">
            <div className="h-30">
                <div className="text-[30px] text-center p-8 font-bold ">
                We have exciting Products and Services for our Clients which include
                </div>
            </div>
            <section className={`${layout.section} w-full pb-10 h-[85]  text-black `}>
            <div className={`${layout.sectionInfo} ${styles.paddingX} gap-7 w-full`} >
                 <div className="text-[40px]">
                 Regular Savings Account
                 </div>
                 <div className="text-[25px]">
                 Members can save daily, weekly or monthly and have access to it as soon as they desire with a prior two day notice or make withdrawals directly on their dashboard.
                 </div>
                 <div>
                    <Outline title="Join the Community"/>
                 </div>
            </div>

            <div className={`${layout.sectionImg} ${styles.paddingX} h-50 `} >
           <img src={change} alt="" className="h-50 w-[100%]  mt-6 rounded-xl" /> 
            </div>
                {/* <img src={change} alt="" /> */}
            </section>
        </div>
     );
}
 
export default Servicebox;