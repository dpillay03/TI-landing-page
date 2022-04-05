import React from "react";
import logo from "../assets/trinity-white.png";
export default function Header() {
  return (
    <React.Fragment>
      <div id='header-wrapper'>
        <div className='Header'>
          <div id='header-container'>
            <div className='header-column'>
              <a href='tel:#'>
                <p id='header-phone-mobile'>
                  Give us a call!{" "}
                  <span className='body-bold'>866-535-8807</span>
                </p>
              </a>
              <img src={logo} id='logo' alt='Trinity logo white' />
              <h1 id='header-title'>
                Gain new insight to grow digital revenues faster.
              </h1>
              <p id='header-subtitle'>
                Sign up for your <span className='body-bold'>FREE</span> Website
                Strategy Session ($795 value)
              </p>
              <div id='consultation-wrapper-mobile'>
                <p id='consultation-desc-mobile'>
                  In a FREE consultation discussion with our CEO, Craig Smith
                  you will receive a live website review, complete with our
                  toolsets, to help you understand what digital growth
                  opportunities exist in your business.
                </p>
                <ul id='ul-checkmark-mobile'>
                  <li className='list-checkmark-mobile'>
                    An expert analysis of your eCommerce store or website
                  </li>
                  <li className='list-checkmark-mobile'>
                    Diagnostic SEO Crawl Report
                  </li>
                  <li className='list-checkmark-mobile'>
                    Site Speed & Performance Assessment
                  </li>
                  <li className='list-checkmark-mobile'>
                    User Experience Review and Recommendations
                  </li>
                  <li className='list-checkmark-mobile'>
                    Email & Marketing Automation Review
                  </li>
                  <li className='list-checkmark-mobile'>
                    No Obligations & 100% FREE
                  </li>
                </ul>
              </div>
            </div>
            <div className='header-column'>
              <p id='header-phone'>
                Give us a call! <span className='body-bold'>866-535-8807</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id='consultation-wrapper-desktop'>
        <p id='consultation-desc-desktop'>
          In a <strong>FREE</strong> consultation discussion with our CEO,{" "}
          <span id='underline'>Craig Smith</span> you will receive a live
          website review, complete with our toolsets, to help you understand
          what digital growth opportunities exist in your business.
          <br />
          <br />
          Within your strategy session you will receive:
        </p>

        <ul id='ul-checkmark-desktop'>
          <li className='list-checkmark-desktop'>
            An expert analysis of your eCommerce store or website
          </li>
          <li className='list-checkmark-desktop'>
            Diagnostic SEO Crawl Report
          </li>
          <li className='list-checkmark-desktop'>
            Site Speed & Performance Assessment
          </li>
          <li className='list-checkmark-desktop'>
            User Experience Review and Recommendations
          </li>
          <li className='list-checkmark-desktop'>
            Email & Marketing Automation Review
          </li>
          <li className='list-checkmark-desktop'>No Obligations & 100% FREE</li>
        </ul>
      </div>
      <hr id='divider'></hr>
    </React.Fragment>
  );
}
