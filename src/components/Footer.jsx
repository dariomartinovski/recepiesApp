import React from 'react';
import '../styles/Footer.css';
import facebook from '../images/facebook.png';
import github from '../images/github.png';
import linkedIn from '../images/linkedIn.png';

export default function Footer() {
  return (
    <footer>
        <div>
            <p>Live, learn, level up, one day at a time</p>
            <p>Dario Martinovski &copy; 2022</p>
        </div>
        <div>
          <a href="https://github.com/dariomartinovski" target="_blank" rel="noopener noreferrer"><img src={github} alt="Github" /></a>
          <a href="https://www.linkedin.com/in/dario-martinovski-24297122a/" target="_blank" rel="noopener noreferrer"><img src={linkedIn} alt="LinkedIn" /></a>
          <a href="https://www.facebook.com/dario.martinovski" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="Facebook" /></a>
        </div>
    </footer>
  );
}
