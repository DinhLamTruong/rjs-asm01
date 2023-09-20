import './Mail.css';

const Mail = () => {
  return (
    <div className="mail">
      <h2>Save time, save money!</h2>
      <p>sign up and we'll send the best deals to you</p>
      <div className='mailInput'>
        <input type="email" placeholder="Your Email" />
        <button type="submit">Subscribe</button>
      </div>
    </div>
  );
};
export default Mail;
