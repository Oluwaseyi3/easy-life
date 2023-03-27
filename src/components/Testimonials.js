import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section id="clients" className={` ${styles.flexCenter} flex-col relative `}>
      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1] mb-10">
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </div>
    <div className="absolute z-[0] w-[50%] h-[50%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        What People are <br className="sm:block hidden" /> saying about us
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
        You can save daily, weekly or monthly and have access to it as soon as you desire.


        </p>
      </div>
    </div>

  
  </section>
);

export default Testimonials;