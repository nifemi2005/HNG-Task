import React from 'react';
import './index.css';

export function Profile(){
  return(
    <div className="flex2">
      <div className='flex'id="profile__img">
        <CameraIcon/>
      <div className='background'></div>
      </div>
      <div className='share'>
        <ShareLink/>
      </div>
      <MobileShare/>
    </div>
  )
}
const CameraIcon = () => <img src="https://zuri-hng-task1.vercel.app/static/media/camera.62b44a2e1fdb5ee06de6ac721c4d2202.svg" alt="icon" id='cameraicon'/>;
const ShareLink = () => <img src="https://samzuritask1.netlify.app/img/Tooltip.png" alt="share-txt" id='sharelink' />;
const MobileShare = () => <img src="https://samzuritask1.netlify.app/img/mobile-more.png" alt="mobile-share" id='mobileshare'/>;
