/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>JHON PAREDES</h2>
        <p><a href="mailto:sthivenp@gmail.com">sthivenp@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Jhon. I like building,test and deploy things.
        I am a <a href="https://www.cibertec.edu.pe/">Cibertec</a> graduate, and take some classes at <a href="https://www.unitru.edu.pe/">National University of Trujillo</a>. Before NTT DATA Peru I was
        at <a href="https://www.itoour.com">Itoour</a>
        , <a href="https://gerenciasac.com/">Gerencia.com</a>
        , and <a href="http://itecsac.com/">Imagina Technologies</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; JHON PAREDES <Link to="/">sthivenparedes.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
