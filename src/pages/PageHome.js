import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { downArrow } from '../globals/icon';
import Contact from '../components/Contact';
import '../css-files/pages/_pageHome.css'

const PageHome = () => {
  const elementRef = useRef(null);
  const executeScroll = () =>
    elementRef.current.scrollIntoView({ behavior: 'smooth' });

  return (
    <motion.div
      className="home-container main-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.3 }}
    >
      <Helmet>
        <title>Djihad Hamdi - Front End Developer</title>
        <meta
          name="description"
          content="A portfolio site built in React by Djihad Hamdi, a Front-End Developer based in Bab ezzouar, DZ, Algeria.
           He has hands-on experience building websites from scratch, with a mobile-first approach. He likes React, JavaScript, HTML, CSS."
        />
      </Helmet>
      <section className="landing">
        <div
          className="landing-content"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="text">
            <h1>Wail</h1>
            <p>
              A <mark>front-end developer</mark> based in Bab Ezzouar, Algiers.
            </p>
            <Link className="work-btn homepage-btn" to="/work">
              View My Work
              <div className="overlay"></div>
            </Link>
          </div>
        </div>
        <button onClick={executeScroll} className="scroll-btn">
          {downArrow}
        </button>
      </section>
      <section ref={elementRef} className="brief-intro">
        <div className="text">
          <h2>One Pixel at a Time</h2>
          <p>
            A self-motivated front-end developer with{' '}
            <Link className="link-to-work" to="/work">
              <span>hands-on project experiences</span>
            </Link>{' '}
            designing and building websites from scratch. My goal is to build
            websites with both visually appealing and user experience-oriented
            functionality.
            <Link className="link-to-about" to="/about">
              <span> More about me.</span>
            </Link>
          </p>
        </div>
      </section>
      <Contact />
    </motion.div>
  );
};

export default PageHome;
