import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { init } from 'ityped';
import { motion } from 'framer-motion';
import Contact from '../components/Contact';
import '../css-files/pages/_pageAbout.css'

const PageAbout = () => {
  const topicsRef = useRef(null);

  useEffect(() => {
    if (!topicsRef.current) {
      return;
    }

    init(topicsRef.current, {
      showCursor: true,
      typeSpeed: 150,
      startDelay: 800,
      strings: [
        'Coding...',
        'Web Development...',
        'Technology...',
        'Swimming...',
        'Exploring cities...',
        'Football...',
      ],
    });
  }, []);

  return (
    <motion.div
      className="about-container main-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.3 }}
    >
      <Helmet>
        <title>Hamdi Djihad | About Me</title>
        <meta
          name="description"
          content="A summary of Djihad Hamdi's background and technical skills as a Front-End Developer."
        />
      </Helmet>
      <section className="about-content">
        <div className="about-text">
          <h1 data-aos="fade-up">About Me.</h1>
          <p data-aos="fade-up" data-aos-delay="50">
            I'm djihad(wail) hamdi My training and hands-on projects experience
            at{' '}
            <abbr title="Constantine 2 University">BCIT</abbr>{' '}
            Front-End Web Developer Program, have allowed me to further develop
            my passion and skillsets in the web development industry. With solid
            fundamentals in various front-end programming languages as well as
            web design, I mostly enjoy working with React JS, HTML5, CSS3,
            JavaScript and Adobe XD.
          </p>
          <p data-aos="fade-up" data-aos-delay="100">
            Graduated with a master of Networks and Distributed Systems major at University
            of Constantine2, I have developed a detail-oriented mindset, creative problem-solving skills
            and strong logical thinking ability.
          </p>
        </div>
      </section>
      <section className="skills" data-aos="fade-up" data-aos-delay="200">
        <div className="skills-flex">
          <div className="skills-cat">
            <h3>Development Skills</h3>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>jQuery</li>
              <li>Java</li>
              <li>Python</li>
              <li>PHP</li>
              <li>BootStrap</li>
              <li>SQL</li>
              <li>Git/GitHub</li>
            </ul>
          </div>
          <div className="skills-cat">
            <h3>Design Skills</h3>
            <ul>
              <li>Photoshop</li>
              <li>Figma(next-step)</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="interested-topics">
        <div className="interested-topics-content">
          <h2>
            Here are the topics that I am{' '}
            <mark className="interested-topics-hightlight">interested</mark>{' '}
            in...
          </h2>
          <p className="topics-text">
            <span ref={topicsRef}></span>
          </p>
        </div>
      </section>
      <Contact />
    </motion.div>
  );
};

export default PageAbout;
