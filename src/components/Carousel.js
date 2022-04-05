import Flickity from "react-flickity-component";
import one from "../assets/logo-one.png";
import two from "../assets/logo-two.png";
import three from "../assets/logo-three.png";
import four from "../assets/logo-4.png";
import five from "../assets/logo-five.png";
import left from "../assets/arrow-left.png";
import right from "../assets/arrow-right.png";

export default function Carousel() {
  const flickityOptions = {
    initialIndex: 3,
  };
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
      <div>
        <Flickity
          className={"carousel"} // default ''
          elementType={"div"} // default 'div'
          options={flickityOptions} // takes flickity options {}
          disableImagesLoaded={false} // default false
          reloadOnUpdate // default false
          static // default false
        >
          <img src={one} className='testimonial-mobile' />
          <img src={two} className='testimonial-mobile' />
          <img src={three} className='testimonial-mobile' />
          <img src={four} className='testimonial-mobile' />
          <img src={five} className='testimonial-mobile' />
        </Flickity>
      </div>
    </div>
  );
}
