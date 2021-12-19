import { Link, useLocation } from 'react-router-dom';
import { email } from '../globals/global';
import { FaArrowCircleUp } from 'react-icons/fa';
import '.././css-files/components/_contact.css'

const Contact = () => {
  const location = useLocation();

  //console.log(location.pathname);

  const toTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <section className="contact" id="contact">
      <div className="text">
        <h2>Get in Touch.</h2>
        <p>
          You can reach me via email or find me on social networks.
          I would love to hear from you!
        </p>
        <div className="btn-wrapper">
          {location.pathname !== '/work' && (
            <div className="btn">
              <div className="side default-side">
                <Link to="/work">View Work</Link>
              </div>
              <div className="side hover-side">
                <Link to="/work">View Work</Link>
              </div>
            </div>
          )}
          <div className="btn">
            <div className="side default-side">
              <a href={`mailto:${email}`}>Email Me</a>
            </div>

            <div className="side hover-side hover-side-email-btn">
              <a href={`mailto:${email}`}>Email Me</a>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-to-top">
        <FaArrowCircleUp onClick={toTop} className='scrollTop' title="move to top" />
      </div>
    </section>
  );
};

export default Contact;
