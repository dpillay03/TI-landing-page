import footer_logo from "../assets/emblem-white.png";
export default function Footer() {
  return (
    <div className='Footer'>
      <img
        src={footer_logo}
        id='footer-logo'
        alt='footer logo for trinity insight'
      />
      <p id='footer-text'>© 2020 Trinity Insight, LLC. All Rights Reserved.</p>
    </div>
  );
}
