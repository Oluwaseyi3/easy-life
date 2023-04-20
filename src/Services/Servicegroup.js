import  community  from "../assets/community.jpg";
import { layout } from "../style";
import styles from "../style";

const Servicegroup = () => {
    return ( 
        <div>
       
        <section className={`${layout.sectionReverse} w-full pb-10 py-10  gap-5  h-[85]  text-black `}>
        <div className={`${layout.sectionInfo} ${styles.paddingX} gap-7 w-full`} >
             <div className="text-[40px]">
           	Group Financing  (Rotational Savings)
             </div>
             <div className="text-[25px]">
           
Members get to pull funds together weekly or monthly to achieve individual or collective projects, this pool of funds range from 100,000 weekly up to 10 Million Naira monthly. Members can access a community of choice for interaction and collective planning. To have access to this members must have been saving faithfully for over 6 months


             </div>
             <div>
             
             </div>
        </div>

        <div className={`${layout.sectionImg}  h-50 `} >
       <img src={community} alt="" className="h-50 w-[100%]  mt-6 rounded-xl" /> 
        </div>
       
        </section>
    </div>
     );
}
 
export default Servicegroup;