import Carousel from "./Carousel";
import Services from "./Services";
import ContactForm from "./ContactForm";

export default function Body() {
  return (
    <div className='Body'>
      <ContactForm className='form' />
      <div id='services'>
        <Services />
      </div>

      <div id='testimonials'>
        <Carousel />
      </div>
    </div>
  );
}
