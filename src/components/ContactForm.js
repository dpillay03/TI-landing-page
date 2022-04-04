export default function ContactForm() {
  return (
    <div className='ContactForm'>
      <form>
        <p id='free'>FREE</p>
        <p id='web-strategy-session'>Website Strategy Session</p>
        <div className='input-wrapper'>
          <label className='input-label'>First Name</label>
          <input className='input-field'></input>
        </div>

        <div className='input-wrapper'>
          <label className='input-label'>Last Name</label>
          <input className='input-field'></input>
        </div>

        <div className='input-wrapper'>
          <label className='input-label'>Website</label>
          <input className='input-field'></input>
        </div>
        <div className='input-wrapper'>
          <label className='input-label'>Email *</label>
          <input className='input-field'></input>
        </div>
        <div className='input-wrapper'>
          <label className='input-label'>Phone Number</label>
          <input className='input-field'></input>
        </div>
        <button id='request-session'>REQUEST SESSION</button>
      </form>
    </div>
  );
}
