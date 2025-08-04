import React, { useState, useEffect } from 'react';
import { FaSearch, FaShoppingCart,FaUser} from 'react-icons/fa';
import './Navbar.css';
import { Link, useNavigate,useLocation } from 'react-router-dom';
import ProfilePanel from './ProfilePanel';


const Navbar = ({ cartcount = 0, itemsArray, totalPrice=0,isLoggedIn,setShowProfilePanel}) => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState(localStorage.getItem("searchTerm") || "");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const userEmail = localStorage.getItem("userEmail");


  const isLoginOrRegister = location.pathname === "/Login" || location.pathname === "/Register";
  




  useEffect(() => {
    localStorage.setItem("searchTerm", searchTerm);
  }, [searchTerm]);
  

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    const filtered = (itemsArray  || []).filter(item =>
     item.itemname?.toLowerCase().includes(value.toLowerCase())

    );
    setSuggestions(value.trim() ? filtered : []);
  };

  
  return (
    <div className="navbar">
      <img src="blinkit.logo.webp" alt="logo" className="logo" />
      <h1 className="delivery-text">Delivery in minutes</h1>

     {!isLoginOrRegister && (
      <form className="search-container" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter search item..."
          value={searchTerm}
          onChange={handleChange}
        />
        <button type="submit" className="search-icon-button">
          <FaSearch className="search-icon" />
        </button>

        {suggestions.length > 0 && (
          <ul className="suggestions-list">
            {suggestions.map((item, index) => (
              <li key={index} onClick={() => {
                setSearchTerm(item.itemname);
                setSuggestions([]);
                navigate(`/search?query=${encodeURIComponent(item.itemname)}`);
              }}>
                {item.itemname}
              </li>
            ))}
          </ul>
        )}
      </form>
     )}
      
      {!userEmail ? (
      <Link to="/Login"><button id="login-button">Login</button></Link>

      ) : (
       <div className='Profile' onClick={() => setIsPanelOpen(!isPanelOpen)}>
        <FaUser className="profile-icon" />
      </div>
        )}
      <div className='Price-container'>
      <h3>Total Price: ₹{totalPrice}</h3>
      </div>
      
      <Link to="/Cart" style={{ textDecoration: "none" }}>
        <div className='cart-container'>
          <span className="cart-label">My Cart</span>
          <div className="cart-icon-wrapper">
            <FaShoppingCart className="cart-icon" />
            {!isLoginOrRegister && cartcount > 0 && (
              <span className='cart-count'>{cartcount > 99 ? '99+' : cartcount}</span>
            )}
          </div>
        </div>
      </Link>

      {isPanelOpen && <ProfilePanel setIspanelOpen={setIsPanelOpen} />}
    </div>
  );
};

export default Navbar;

