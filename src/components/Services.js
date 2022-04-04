export default function Services() {
  return (
    <div>
      <h2 id='services-header'>We make working together easy.</h2>
      <div className='three-column-grid'>
        <a href='#' target='_blank'>
          <div id='convo' className='services-container'>
            <div className='services-overlay'>
              <p className='services-title'>1. 30-MINUTE VIDEO CONVERSATION</p>
              <p className='services-info'>
                Get started with a free consultation to help us understand where
                our team can best help you build and grow your online business.
              </p>
            </div>
          </div>
        </a>

        <a href='#' target='_blank'>
          <div id='roadmap' className='services-container'>
            <div className='services-overlay'>
              <p className='services-title'>2. DIAGNOSTIC ROADMAP</p>
              <p className='services-info'>
                Within a week we’ll diagnose your biggest opportunities and
                build a custom roadmap to optimize your ecommerce experience.
              </p>
            </div>
          </div>
        </a>

        <a href='#' target='_blank'>
          <div id='growth' className='services-container'>
            <div className='services-overlay'>
              <p className='services-title'>3. GROWTH SERVICES</p>
              <p className='services-info'>
                Our team will start immediately taking action to make
                improvements and deliver a brand experience that drives lifetime
                value.
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
