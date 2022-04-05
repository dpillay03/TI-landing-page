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
        <img
          src={left}
          id='left-arrow'
          className='testimonial'
          alt='left arrow'
        />
        <img
          src={one}
          className='testimonial'
          alt='desktop testimonial static'
        />
        <img
          src={two}
          className='testimonial'
          alt='desktop testimonial static'
        />
        <img
          src={three}
          className='testimonial'
          alt='desktop testimonial static'
        />
        <img
          src={four}
          className='testimonial'
          alt='desktop testimonial static'
        />
        <img
          src={five}
          className='testimonial'
          alt='desktop testimonial static'
        />
        <img
          src={right}
          id='right-arrow'
          className='testimonial'
          alt='right arrow'
        />
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
          <img
            src={one}
            className='testimonial-mobile'
            alt='mobile testimonial slider'
          />
          <img
            src={two}
            className='testimonial-mobile'
            alt='mobile testimonial slider'
          />
          <img
            src={three}
            className='testimonial-mobile'
            alt='mobile testimonial slider'
          />
          <img
            src={four}
            className='testimonial-mobile'
            alt='mobile testimonial slider'
          />
          <img
            src={five}
            className='testimonial-mobile'
            alt='mobile testimonial slider'
          />
        </Flickity>
      </div>
    </div>
  );
}
