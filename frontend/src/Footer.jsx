import React from 'react'
import './Footer.css'
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareThreads } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
        <div className="foot-panel1">                                                                     
          <a href='#top' style={{textDecoration:"none"}}> Back to Top </a> 
        </div>

<div className="foot-panel2">

  <ul>
    <span className="section-header">Useful Links</span>
    <li><a href="/blog">Blog</a></li>
    <li><a href="/privacy">Privacy</a></li>
    <li><a href="/terms">Terms</a></li>
    <li><a href="/faqs">FAQs</a></li>
    <li><a href="/security">Security</a></li>
    <li><a href="/Contact">Contact</a></li>
  </ul>


  <ul>
    <br></br>
    <br></br>
    <li><a href="/Partner">Partner</a></li>
    <li><a href="/Franchise">Franchise</a></li>
    <li><a href="/Seller">Seller</a></li>
    <li><a href="/Warehouse">Warehouse</a></li>
    <li><a href="/Deliver">Deliver</a></li>
    <li><a href="/Resources">Resources</a></li>
  </ul>


  
  <ul>
   <br></br>
      <br></br>
    <li><a href="/Recipes">Recipes</a></li>
    <li><a href="/Bistro">Bistro</a></li>
  </ul>

  <ul>
    <div className="category-header">
      <span className="section-header">Categories</span>
      <a href="/see all" className="see-all">see all</a>
    </div>
    <li><a href="/Vegetables & Fruits">Vegetables & Fruits</a></li>
    <li><a href="/Cold Drinks & Juices">Cold Drinks & Juices</a></li>
    <li><a href="/Bakery & Biscuits">Bakery & Biscuits</a></li>
    <li><a href="/Dry Fruits, Masala & Oil">Dry Fruits, Masala & Oil</a></li>
    <li><a href="/Paan Corner">Paan Corner</a></li>
    <li><a href="/Pharma & Wellness">Pharma & Wellness</a></li>
    <li><a href="/Ice Creams & Frozen Desserts">Ice Creams & Frozen Desserts</a></li>
    <li><a href="/Beauty & Cosmetics">Beauty & Cosmetics</a></li>
    <li><a href="/Electronics & Electricals">Electronics & Electricals</a></li>
    <li><a href="/Toys & Games">Toys & Games</a></li>
  </ul>



    
        <ul>
    <br></br>
     <br></br>
    <li><a href="/Dairy & Breakfast">Dairy & Breakfast</a></li>
    <li><a href="/Instant & Frozen Food">Instant & Frozen Food</a></li>
    <li><a href="/Sweet Tooth">Sweet Tooth</a></li>
    <li><a href="/Sauces & Spreads">Sauces & Spreads</a></li>
    <li><a href="/Organic & Premium">Organic & Premium</a></li>
    <li><a href="/Cleaning Essentials">Cleaning Essentials</a></li>
    <li><a href="/Personal Care">Personal Care</a></li>
    <li><a href="/Magazines">Magazines</a></li>
    <li><a href="/Stationery Needs">Stationery Needs</a></li>
    <li><a href="/Print Store">Print Store</a></li>
    </ul>
    
  



  <ul>
    <br></br>
     <br></br>
    <li><a href='/Munchies'>Munchies</a></li>
    <li><a href="/Tea, Coffee & Health Drinks">Tea, Coffee & Health Drinks</a></li>
    <li><a href="/Atta, Rice & Dal">Atta, Rice & Dal</a></li>
    <li><a href="/Chicken, Meat & Fish">Chicken, Meat & Fish</a></li>
    <li><a href="/Baby Care">Baby Care</a></li>
    <li><a href="/Home & Office">Home & Office</a></li>
    <li><a href="/Pet Care">Pet Care</a></li>
    <li><a href="/Fashion & Accessories">Fashion & Accessories</a></li>
    <li><a href="/Books">Books</a></li>
    <li><a href="/E-Gift Cards">E-Gift Cards</a></li>
  </ul>
  
</div>

<div className="footer-panel3">
  <div className="text">© Blink Commerce Private Limited, 2016-2025</div>
  <div className="Download">Download App  :</div>
  <div className="store-buttons">
        <a href="https://apps.apple.com/app/idXXXXXXXXX" target="_blank" rel="noreferrer">
          <img src="App-Store.png" alt="App Store" height="80" />
        </a>
        
        <a href="https://play.google.com/store/apps/details?id=com.example.app" target="_blank" rel="noreferrer">
          <img src="Google-play.png" alt="Google Play" height="40" />
        </a>
        </div>
        
        <FaFacebookSquare />
        <FaTwitterSquare />
        <FaInstagramSquare />
        <FaLinkedin />
        <FaSquareThreads />

        
        </div>
        <div id='Information'>“Blinkit” is owned & managed by "Blink Commerce Private Limited" and is not related, linked or interconnected in whatsoever manner or nature, to “GROFFR.COM” which is a real estate services business operated by “Redstone Consultancy Services Private Limited”.</div>



    </footer>
  )
}

export default Footer;
