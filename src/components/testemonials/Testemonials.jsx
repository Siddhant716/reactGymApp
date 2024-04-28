
import './Testemonials.css'
import user2 from '../../assets/images/user2.jpg'
import user1 from '../../assets/images/user1.jpg'

const Testemonials = () => {
  return (
<section className="testimonials">
      <h1>Our Trainners</h1>
      <p>Expert, motivating, certified, adaptable, patient, energetic, communicative, supportive, goal-oriented, knowledgeable..</p>
      <div className="row">
        <div className="testimonial-col">
          <img src={user1} alt=""/>
          <div>
            <p>
            Tina is a dedicated gym trainer with a passion for helping others reach their fitness goals. With over a decade of experience, she specializes in strength training and high-intensity interval workouts. Tina is known for his upbeat attitude and motivational coaching style, making even the toughest sessions enjoyable. She creates personalized fitness plans tailored to individual needs and closely monitors progress to ensure results. Beyond the gym, Tina encourages a balanced lifestyle, promoting proper nutrition and rest. Her clients appreciate his patience and positivity, as she guides them on their journey to becoming their healthiest selves
            </p>
            <h3>Tina Mathew</h3>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star-o"></i>
          </div>
        </div>
        <div className="testimonial-col">
          <img src={user2} alt=""/>
          <div>
            <p>
            Siddhant is a dedicated gym trainer known for his dynamic and motivational approach to fitness. With a passion for health and wellness, he creates personalized workout plans that push clients to achieve their goals. His expertise spans strength training, cardiovascular workouts, and flexibility exercises, allowing him to tailor routines to individual needs. Beyond the physical, Siddhant promotes a positive mindset, encouraging clients to stay consistent and believe in their potential. His high-energy sessions, combined with a friendly demeanor, make him a favorite among gym-goers. Siddhant's commitment to holistic fitness ensures that clients leave the gym feeling empowered and ready for more.
            </p>
            <h3>Siddhant</h3>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star-half-o"></i>
          </div>
        </div>
      </div>
    </section>
  )
}
    export default Testemonials