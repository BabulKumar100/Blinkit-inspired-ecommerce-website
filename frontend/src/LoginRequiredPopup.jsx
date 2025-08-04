import './LoginRequiredPopup.css';

const LoginRequiredPopup = ({ onClose }) => {



  const handleOutsideClick = (e) => {
    if (e.target.className === 'popup-overlay') {
      onClose();
    }
  };

  return (
    <div className="popup-overlay" onClick={handleOutsideClick}>
      <div className="popup-content">
        <div id='First-text'>Login is Required First !</div>
        <div id='Second-text'>Please click the Login button present in Navbar to complete your login.</div>
       
      </div>
    </div>
  );
};

export default LoginRequiredPopup;

