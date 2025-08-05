import React, { useEffect, useState } from 'react';
import './ProfilePanel.css';
import { useNavigate } from 'react-router-dom';

const ProfilePanel = ({ setIspanelOpen }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const email = localStorage.getItem("userEmail");
  const name = localStorage.getItem("userName"); 
  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        if (!email) {
          if (name) {
            setUserData({
              name: name,
              email: email || "No email available"
            });
          }
          setLoading(false);
          return;
        }

        const res = await fetch("https://blinkit-backend.onrender.com/api/profile", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({email: email.toLowerCase()}),
        });

        if (!res.ok) {
          if (name) {
            setUserData({
              name: name,
              email: email
            });
          }
          setLoading(false);
          return;
        }

        const data = await res.json();
        setUserData(data);
      } catch (error) {
        console.error("Profile fetch error:", error);
        if (name) {
          setUserData({
            name: name,
            email: email || "No email available"
          });
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [email, name]);

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userName");
    navigate("/Login");
  };

  if (loading) {
    return (
      <div className="profile-panel">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="profile-panel">
      <button type="button" className="close-btn" onClick={() => setIspanelOpen(false)}>×</button>
      
      {userData ? (
        <div className='Profile-container'>
          <div className='User-Profile'>👤 User Profile</div>
          <div id='name'><strong>Name:</strong> {userData.name}</div>
          <div id='email'><strong>Email:</strong> {userData.email}</div>
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div id= "paragraph">No user data available</div>
      )}
    </div>
  );
};

export default ProfilePanel;
