import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section id="clients" className={` ${styles.flexCenter} flex-col relative `}>
      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1] mb-10">
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </div>
    <div className="absolute z-[0] w-[50%] h-[50%] -right-[50%] rounded-full blue__gradient bottom-40" />



  
  </section>
);

export default Testimonials;