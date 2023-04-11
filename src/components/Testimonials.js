import { feedback } from "../constants";
import { features } from "../constants";
import styles from "../style";

import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <div>
    <div className="flex flex-row items-start justify-start  h-[100%] max-w-[100vh] w-[100%] mt-5 sm:text-[34px] text-[20px] font-bold  " >
          <h2 className="">
          The services and products that we provide
          </h2>
        </div>
        <section id="clients" className={` ${styles.flexCenter} flex-col relative  `}>
    
      <div className="flex flex-wrap justify-center sm:justify-between  w-full feedback-container relative z-[1] mb-10">
        
      {features.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </div>
    {/* <div className="absolute z-[0] w-[50%] h-[50%] -right-[50%] rounded-full blue__gradient bottom-40" /> */}



  
  </section>
  </div>
  
);

export default Testimonials;