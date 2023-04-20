
import { layout } from "../style";
import  loan  from "../assets/loan.webp";
import styles from "../style";
const Servicehome = () => {
    return ( 
        <div>
          <section  className={`${layout.sectionReverse} w-full py-10 h-[85] bg-blue-300 text-white `}>
          <div className={`${layout.sectionInfo} ${styles.paddingX} py-5 rounded-xl gap-10  `} >
              <div className="text-[35px] font-black font-sans">
              Saving money is one of the essential aspects of building wealth and having a secure financial future. 
              </div>
              <div className="text-[27px]">
              Saving money gives you a way out of the uncertainties of life and provides you with an opportunity to enjoy a quality life
              </div>
          </div>

          <div className={`${layout.sectionImg} ${styles.paddingX} `} >
            <img src={loan} alt="" className="h-50 w-[70%]"/>
          </div>
          </section>
        </div>
     );
}
 
export default Servicehome;