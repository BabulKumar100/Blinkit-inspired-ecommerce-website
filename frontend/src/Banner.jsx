import React from 'react'
import './Banner.css';

const Banner = ({isLoggedIn,setShowLoginPopup,navigate}) => {
  const handleshopClick = (e) => {
    e.preventDefault();
    if(!isLoggedIn) {
      setShowLoginPopup(true);
    }else {
      navigate('/Shop');
    }
  }

  return (
    <div className="banner-wrapper">
        <img 
          src="banner.png" 
          alt="Pharmacy banner" 
          className="pharmacy-banner" 
        />
        
         
          <button id='shop-button' onClick={handleshopClick}>Shop Now</button>
         
          
      </div>

  )
}

export default Banner;
