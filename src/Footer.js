import React from 'react';
import './index.css';

 export function Footer(){
  return(
    <footer>
      <ZuriImage/>
      <FooterP/>
      <ZuriImage2/>
    </footer>
  );
}

const ZuriImage = () => <img src="https://i.postimg.cc/bvqXstN3/New-Zuri.jpg" alt="Zuri_logo" />;
const FooterP = () => <p>HNG Internship 9 Frontend Task</p>
const ZuriImage2 = () => <img src="https://i.postimg.cc/hjt5LLgX/ingressive-logo.jpg" alt="ingressivelogo" />;
