import React from 'react';
import './index.css';

export function Icon (){
  return(
    <div className='icon'>
      <IconImage/>
      <IconImage2/>
    </div>
  );
}
const IconImage = () => <a href="https://tinyurl.com/mr3343v9" target="_blank" ><img src="https://i.postimg.cc/bJK2R85V/New-slack.jpg" alt="slack"/></a>;
const IconImage2 = () => <a href="https://github.com/nifemi2005/" target="_blank" ><img src="https://i.postimg.cc/3xwCRfCN/New-github.jpg" alt="github"/></a>;

