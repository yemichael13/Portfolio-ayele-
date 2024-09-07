import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Experience from './Experience';
import Contact from './Contact';
import Gallery from './Gallery';
import Pricing from './Pricing';
import './Home.css';
import Pic_phd from '../assets/pic_phd.JPG';
import { Link } from 'react-router-dom';

// Reusable FAQ Item component
const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFaq = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item">
      <h3 onClick={toggleFaq} style={{ cursor: 'pointer' }}>
        {question}
      </h3>
      <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
        {Array.isArray(answer) ? (
          <ul>
            {answer.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{answer}</p>
        )}
      </div>
    </div>
  );
};


const MoreInfo = ({ summary, details }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMoreInfo = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="more-info">
      <h3 onClick={toggleMoreInfo} style={{ cursor: 'pointer' }}>
        More
      </h3>
      <div className={`more-answer ${isOpen ? 'open' : ''}`}>
        {isOpen && <p>{details}</p>}
      </div>
    </div>
  );
};

const Home = () => {
  const faqs = [
    {
      question: 'My Vision',
      answer:
        'To be a globally recognized leader in sustainable agriculture research and consulting, providing cutting-edge solutions that benefit both animals and people.',
    },
    {
      question: 'My Mission',
      answer: [
        'To promote sustainable agriculture by delivering innovative research and consulting services that improve animal welfare, production efficiency, and environmental impact.',
      ],
    },
  ];

  const moreInfoDetails = 'With over 30 years of experience in animal science and livestock research, I have the expertise to deliver innovative solutions to industry challenges. Focusing on sustainable agriculture, I provide research and consulting services to help clients improve animal welfare,';

  return (
    <div>
      <Navbar />
      <section className="home">
        <div className="contents">
          <div className="picture">
            <div className="title">
              <h1>Who is me?</h1>
              <p>
                I'm Ayele Abebe Dr. I am a Livestock researcher
                <br />
                and an animal scientist especially on Sheep and Goats.
                <br />
              </p>

              {/* MoreInfo component */}
              <MoreInfo summary="More" details={moreInfoDetails} />

              <Link to="#experience">Browse CV</Link>
            </div>

            <img src={Pic_phd} alt="phd" />
          </div>
        </div>

        <div className="space">
          <div className="items">
            <h2>Company Name</h2>
            <p>1 years</p>
            <p>Experience</p>
          </div>
          <div className="items">
            <h2>Company Name</h2>
            <p>1 years</p>
            <p>Experience</p>
          </div>
          <div className="items">
            <h2>Company Name</h2>
            <p>1 years</p>
            <p>Experience</p>
          </div>
        </div>

        <div className="contents-2">
          <h1>A lifelong commitment to animal science</h1>
          <div className="picture-2">
            <img src={Pic_phd} alt="pic" />
            <div className="text">
              <h1>
                Promoting sustainable <br /> agriculture through <br />
                innovative research
              </h1>
              <p>
                With over 30 years of experience in animal science and <br />
                livestock research, I have the expertise to deliver <br />
                innovative solutions to industry challenges. Focusing on <br />
                sustainable agriculture, I provide research and consulting <br />
                services to help clients improve animal welfare,
                <br />
                production efficiency, and environmental impact.
              </p>

              <div className="faq-section">
                {faqs.map((faq, index) => (
                  <FaqItem key={index} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="gallery">
        <Gallery />
      </section>
      <section id='pricing'>
        <Pricing />
      </section>
      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
};

export default Home;
