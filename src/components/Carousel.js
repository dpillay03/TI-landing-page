import one from "../assets/logo-one.png";
import two from "../assets/logo-two.png";
import three from "../assets/logo-three.png";
import four from "../assets/logo-4.png";
import five from "../assets/logo-five.png";
import left from "../assets/arrow-left.png";
import right from "../assets/arrow-right.png";

export default function Carousel() {
  return (
    <div>
      {" "}
      <h3 id='testimonial-header'>TRUSTED BY:</h3>
      <div className='Carousel'>
        <img src={left} id='left-arrow' className='testimonial' />
        <img src={one} className='testimonial' />
        <img src={two} className='testimonial' />
        <img src={three} className='testimonial' />
        <img src={four} className='testimonial' />
        <img src={five} className='testimonial' />
        <img src={right} id='right-arrow' className='testimonial' />
      </div>
    </div>
  );
}
