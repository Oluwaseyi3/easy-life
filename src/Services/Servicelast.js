import credpal from "../assets/credpal.png"
import { layout } from "../style";
import styles from "../style";

const Servicelast = () => {
    return (
        <div>
       
        <section className={`${layout.section} w-full pb-10 py-10  gap-5 bg-black  h-[85]  text-white `}>
        <div className={`${layout.sectionImg}  h-50 `} >
       <img src={credpal} alt="" className="h-50 w-[100%]  mt-6 rounded-xl" /> 
        </div>
        <div className={`${layout.sectionInfo} ${styles.paddingX} gap-7 w-full`} >
             <div className="text-[40px]">
             Personal & Business Loans (Credits)
             </div>
             <div className="text-[25px]">
           
Members can access Loan Facilities for 6 Months or 1 year, with an interest rate of 5% and 10% respectively. Members can only access this after faithfully saving for over 6 Months. 


             </div>
             <div className="text-[25px]">
             Our Loans are collateral-free but Guarantors who are also members must have higher amounts than the loan being guaranteed
             </div>

             <div className="text-[25px]">
                
Grow your small business or fix personal emergencies with affordable, No paperwork, no embarrassment.

                </div>

                <div className="text-[25px]">
                Get money within 48 hours<br/>
No collateral required<br/>
No hidden fees
                
                </div>
             <div>
                
             
             </div>
        </div>

       
       
        </section>
    </div>
      );
}
 
export default Servicelast;