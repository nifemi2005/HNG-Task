import React from 'react'
import './index.css';
import { Link } from 'react-router-dom';

 export function Links (){
  return(
      <>
        <article className='Links'>
          <LinkOne/>
          <LinkTwo/>
          <LinkThree/>
          <LinkFour/>
          <LinkFive/>
          <LinkSix/>
          <Link to="/contact">contact</Link>
        </article>
      </>
        
  );
}
const LinkOne = () => <a href="https://twitter.com/niffyby1234" target="_blank" id="Twitter">Twitter Link</a>;
const LinkTwo = () => <a href="https://training.zuri.team/" target="_blank" id="btn_zuri">Zuri Team</a>;
const LinkThree = () => <a href="http://books.zuri.team/" target="_blank" id="books">Zuri Book</a>;
const LinkFour = () => <a href="https://books.zuri.team/python-for-beginners?ref_id=Niffyboy" target="_blank" id="book__python">Python Book</a>;
const LinkFive = () => <a href="https://background.zuri.team/" target="_blank" id="pitch">Background Check on Coders</a>;
const LinkSix = () => <a href="https://books.zuri.team/design-rules" target="_blank" id="book__design">Design Book </a>;
// const ContactPage = () => {
//   return(
//     <>
//       <a href="" id='contact'>Contact</a>
//       {/* <Link to='/contact' id='contact'>Contact</Link>  */}
//     </>
//   );
// };

