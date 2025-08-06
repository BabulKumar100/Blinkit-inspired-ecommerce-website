import { Route, Routes, useNavigate } from 'react-router-dom';
import { useMemo, useEffect, useState, useRef } from 'react';
import Cart from './Cart';
import Shop from './Shop';
import Blinkit from './Blinkit';
import Register from './Register';
import SearchResults from './SearchResults';
import Navbar from './Navbar';
import Forgot from './Forgot';
import Login from './Login';
import LoginRequiredPopup from './LoginRequiredPopup';
import ResetPassword from './ResetPassword';
import AllUsers from './AllUsers';

const App = () => {
  const hasRedirected = useRef(false);
  const navigate = useNavigate();

  const [cartcount, setcartcount] = useState(0);
  const [userEmail,setUserEmail] = useState("");
  const [userName,setUserName] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [itemStatus, setItemStatus] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
  return !!localStorage.getItem("userEmail");
});
const [loadingBackend, setLoadingBackend] = useState(true);

  const [showLoginPopup, setShowLoginPopup] = useState(true);
      
      useEffect(() => {
      const navEntry = performance.getEntriesByType("navigation")[0];
      if(navEntry?.type === "navigate"){
      localStorage.removeItem("userEmail");
      localStorage.removeItem("userName");
      setIsLoggedIn(false);
      }
    },[]);

    useEffect(() => {
  fetch("https://blinkit-inspired-ecommerce-application-8.onrender.com/healthcheck")
    .then(() => {
      console.log("Backend awake");
      setLoadingBackend(false);
    })
    .catch((err) => {
      console.error("Ping failed", err);
      setLoadingBackend(false); 
    });
}, []);


    

  const itemsArray = useMemo(() => ([
    {title:"Dairy, Bread & Eggs :" },
     {itemname: "Amul Masti Pouch Curd",
      imageURL: "amul-dahi.webp",
       quantity:"400 g",
       Price:"₹35"},

    {itemname: "Amul Cow Milk",
      imageURL: "cow-milk.webp",
       quantity:"500 ml",
       Price:"₹35"},

    {itemname: "Sudha Dairy Pasteurised Cow Milk",
      imageURL: "sudha-cow-milk.webp",
       quantity:"500 ml",
       Price:"₹28"},

    {itemname: "Sudha Dairy Shakti Fresh Milk",
      imageURL: "sudha-cow-Milk.jpg",
       quantity:"500 ml",
       Price:"₹29"},

    {itemname: "Amul Shakti Fresh Milk",
      imageURL: "amul-shakti-pouch-milk.webp",
       quantity:"500 ml",
       Price:"₹30"},
    
    {itemname:"Mother Dairy Full Cream Milk",
      imageURL: "Milk.jpg",
         quantity: "500ml",
         Price: "₹35"},
    
     {title: "Cold Drinks & Juices :"},
      {itemname: "Thums Up Soft Drink",
       imageURL: "thums-up-soft-drink.webp",
       quality: "750 ml",
       Price: "₹30"},

      {itemname:"Ice Cubes by Dras Ice",
        imageURL: "Ice-cubes.avif",
         quality: "750 ml",
         Price: "₹75"},

      {itemname:"Sprite Lime Flavored Soft Drink",
        imageURL: "sprite.webp",
        quantity: "750 ml",
        Price: "₹40"},
      
      {itemname:"Maaza Mango Drink",
        imageURL: "Maaza.jpg",
        quantity: "600 ml",
        Price: "₹40"},

      {itemname: "Frooti Mango Drink",
        imageURL: "Frooti.jpg",
        quantity: "125 ml",
        Price: "₹10"},
      
      {itemname: "Fanta Orange Soft Drink",
        imageURL: "Fanta.webp",
        quantity: "750 ml",
        Price: "₹40"},

      {title: " Candies & Gums :"},
       {itemname: "Parle Melody Chocolaty Candy",
        imageURL: "candy.webp",
       quantity: "175.95 g",
       Price: "₹50" },

       {itemname: "Sunfeast Fantastik Mini Treats (Homepack) Candy",
        imageURL: "Fantastik.webp",
        quantity : "125.4 g",
        Price: "₹55"},

        {itemname:"Chupa Chups Sour Bites Mixed Fruit Candy",
          imageURL: "Fruit candy.jpg",
          quantity: "61.6 g",
          Price: "₹35"},

        {itemname: "Happydent Wave Sugarfree Mint Chewing Gum 18 Pcs",
          imageURL: "Chewing-Gum.jpg",
          quantity: "28.9 g",
          Price: "₹48"},

        {itemname: "Alpenliebe Juzt Jelly - Strawberry Flavour Jelly Candy",
          imageURL: "Juzt Jelly.jpg",
          quantity: "140 g",
          Price: "₹48"},

        {itemname: "Chupa Chups Bubble Gum Lollipop (Friends Pack)",
          imageURL: "Lollipop.jpg",
          quantity: "88 g",
          Price: "₹48"},


  ]), []);

   const Array= useMemo(() => ([
     {title: "Medicines :"},
     {itemname: "Paracetamol Tablets",
      imageURL: "Paracetamol.avif",
      quantity:"15 tablets",
      price:"₹25"},
  
      {itemname: "cough Syrup",
      imageURL: "cough Syrup.jpg",
      quantity:"100ml",
      Price:"₹253"},
  
      {itemname: "Hand Sanitizer",
      imageURL: "Sanitizer.webp",
      quantity:"500 ml",
      price:"₹250"},
  
      {itemname: "Vitamin C Tablets",
      imageURL: "vitamine C.jpg",
      quantity:"60 tablets(100 mg)",
      price:"₹200"},
  
      {itemname: "Digene Antacid Gel",
      imageURL: "DIGENE-GEL-SYRUP.webp",
      quantity:"200 ml",
      Price:"₹185"},
  
      {itemname: "ORS Electrolyte Sachets",
      imageURL: "ORS Power.webp",
      quantity:"10 sachets",
      Price:"₹209"},
  
      {title:"Personal Care :"},
      {itemname:"Dove Cream Beauty Bathing Bar",
       imageURL:"Dove.jpg",
       quantity:"100 g",
       price:"₹58"},
  
       {itemname:"Colgate Strong Teeth ToothPaste",
       imageURL:"Colgate.jpg",
       quantity:"150 g",
       price:"₹99"},
  
       {itemname:"Nivea Men Deodorant Roll On",
       imageURL:"Nivea.jpg",
       quantity:"50 ml",
       price:"₹156"},
  
       {itemname:"Pantene Hair Fall Control Shampoo",
       imageURL:"Shampoo.webp",
       quantity:"180 ml",
       price:"₹145"},
  
       {itemname:"Dettol Liquid Handwash Refill",
       imageURL:"Dettol Handwash.jpg",
       quantity:"750 ml",
       price:"₹109"},
  
       {itemname:"Whisper Ultra Clean Sanitary Pads",
       imageURL:"Sanitary Pads.jpg",
       quantity:"XL, 15 Pads",
       Price:"₹148"},
  
       {title:"Wellness & immunity :"},
       {itemname:"Dabur chyawanprash",
        imageURL:"Chyawanprash.jpg",
        quantity:"1 kg",
        Price:"₹374"},
  
        {itemname:"Zandu Kesari Jivan",
        imageURL:"Kesari Jivan.jpg",
        quantity:"450 g",
        price:"₹437"},
  
        {itemname:"Himalaya Ashvagandha Tablets",
        imageURL:"Ashvagandha.jpg",
        quantity:"60 tablets",
        Price:"₹200"},
  
        {itemname:"Kapiva Amla Juice",
        imageURL:"Amla Juice.jpg",
        quantity:"1 Litre",
        price:"₹248"},
  
        {itemname:"Organic India Tulsi Green Tea",
        imageURL:"Tulsi Green Tea.jpg", 
        quantity:"25 tea bags",
        Price:"₹194"},
  
        {itemname:"Baidhyanath Giloy Juice",
        imageURL:"Giloy Juice.jpg",
        quantity:"1 litre",
        price:"₹355"},
  
        
         {title:"Health Devices :"},
         {itemname:"Dr. Morepen Digital Thermometer",
          imageURL:"Digital Thermometer.webp",
          quantity:"1 unit",
          price:"₹159"},
  
          {itemname:"Omron Pressure Monitor",
          imageURL:"Pressure Monitor.jpg",
          quantity:"1 unit",
          price:"₹2590"},
  
          {itemname:"Dr Trust Finger Pulse Oximeter",
          imageURL:"oximeter.jpg",
          quantity:"1 unit",
          Price:"₹1599"},
  
          {itemname:"Accu-chek Active Glucometer Kit",
          imageURL:"Glucometer kit.jpg",
          quantity:"1 kit",
          Price:"₹1299"},
  
          {itemname:"Dettol Infrared Forehead Thermometer",
          imageURL:"Forehead Thermometer.webp",
          quantity:"1 unit",
          Price:"₹3499"},
  
          {itemname:"Omron Nebulizer Machine",
          imageURL:"Neulizer Machine.jpg",
          quantity:"1 unit",
          Price:"₹1273"},
  
          {title:"Baby & Mother Care :"},
          {itemname:"Pampers Baby Dry Diapers -L",
           imageURL:"Diapers.jpg",
           quantity:"60 pcs",
           price:"₹999"},
  
           {itemname:"Jhonson's Baby Lotion",
           imageURL:"Baby Lotion.jpg",
           quantity:"200 ml",
           Price:"₹200"},
  
           {itemname:"Himalaya Baby Powder",
           imageURL:"Himalaya Baby Powder.webp",
           quantity:"400 g",
           Price:"₹315"},
  
           {itemname:"mamaearth Stretch Marks Cream",
           imageURL:"Mamaearth.webp",
           quantity:"100 ml",
           Price:"₹335"},
  
           {itemname:"Sebamed Baby Shampoo",
           imageURL:"Sebamed Baby Shampoo.jpg",
           quantity:"150 ml",
           Price:"₹429"},
  
          {itemname:"Mother's Horlicks Health Drink",
           imageURL:"Mother's Horlicks.jpg",
           quantity:"400 g",
           Price:"₹700"},
  
           {title:"COVID Essentials :"},
           {itemname:"3-ply Disposable Face Mask",
            imageURL:"Surgical Mask.jpg",
            quantity:"50 pcs",
            Price:"₹249"},
  
            {itemname:"N95 Protective Face Mask",
            imageURL:"N95 Face mask.webp",
            quantity:"1 pc",
            Price:"₹40"},
  
  
            {itemname:"Dettol Antiseptic Liquid",
            imageURL:"Antiseptic.webp",
            quantity:"550 ml",
            Price:"₹214"},
  
  
           {itemname:"Savlon Surface Disinfectant Spray",
            imageURL:"Surface Disinfectant.jpg",
            quantity:"230 ml",
            Price:"₹180"},
  
            {itemname:"Hand Sanitizer - 70% Alcohol",
            imageURL:"hand-sanitizer.jpg",
            quantity:"1 unit",
            Price:"₹999"},
  
            {itemname:"Face Shield Transparent Visor",
            imageURL:"Transparent Face shield.jpg",
            quantity:"1 pc",
            Price:"₹1595"},
    
    ]), []);
  
    const mergedItemsArray = useMemo(() => [...itemsArray, ...Array], [itemsArray, Array]);




  
  const toggleCartStatus = (index, item) => {
    if(!isLoggedIn) {
      setShowLoginPopup(true);
      return;
    }
    const updatedStatus = [...itemStatus];
    const existingData = JSON.parse(localStorage.getItem("itemData")) || { cart: [] };
    const isAdded = updatedStatus[index]?.iscartAdded;

    const numericPrice = Number((item.price || item.Price || "₹0").replace(/[^\d]/g, ""));

    if (isAdded) {
      existingData.cart = existingData.cart.filter(i => i.itemname !== item.itemname);
      setcartcount(prev => prev - 1);
      setTotalPrice(prev => prev - numericPrice);
    } else {
      const newItem = { ...item, addedAt: new Date().toISOString(), type: 'cart' };
      existingData.cart.push(newItem);
      setcartcount(prev => prev + 1);
      setTotalPrice(prev => prev + numericPrice);
    }

    updatedStatus[index] = { iscartAdded: !isAdded };
    setItemStatus(updatedStatus);
    localStorage.setItem("itemData", JSON.stringify(existingData));
  };

  

  useEffect(() => {
    const navEntry = performance.getEntriesByType("navigation")[0];
    const stored = JSON.parse(localStorage.getItem("itemData")) || { cart: [] };

     const allItems = [...itemsArray, ...Array];
    const status = allItems.map(item => ({
      iscartAdded: stored.cart.some(m => m.itemname === item.itemname),
    }));

    setItemStatus(status);
    setcartcount(stored.cart.length);

    const total = stored.cart.reduce((sum, item) => {
      const price = Number((item.price || item.Price || "₹0").replace(/[^\d]/g, ""));
      return sum + price;
    }, 0);
    setTotalPrice(total);
    
    if (navEntry?.type === "reload" && !hasRedirected.current) {
      hasRedirected.current = true;
      const confirmReload = window.confirm(
        "Do you want to reload this page?\nIf you reload it, the cart will reset and you’ll go to Home."
      );

      if (confirmReload) {
        localStorage.removeItem("itemData");
        setcartcount(0);
        setTotalPrice(0);
        const resetStatus = itemsArray.map(() => ({ iscartAdded: false }));
        setItemStatus(resetStatus);
        navigate("/", { replace: true });
      }
    }
  }, [itemsArray, Array, navigate]);

  useEffect(() => {
    const handlePriceSync = (e) => {
      setTotalPrice(e.detail);
    };

    window.addEventListener("updateTotalPrice", handlePriceSync);
    return () => {
      window.removeEventListener("updateTotalPrice", handlePriceSync);
    };
  }, []);

  useEffect(() => {
    const email= localStorage.getItem("userEmail");
    const name = localStorage.getItem("userName");

    if(email && name) {
      setIsLoggedIn(true);
      setUserEmail(email);
      setUserName(name);
    }
  }, []);

  return (
  <>
    {loadingBackend ? (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h2>Waking up server... Please wait ⏳</h2>
      </div>
    ) : (
      <>
        {!isLoggedIn && showLoginPopup && (
          <LoginRequiredPopup onClose={() => setShowLoginPopup(false)} />
        )}

        <Navbar
          cartcount={cartcount}
          itemsArray={mergedItemsArray}
          totalPrice={totalPrice}
          isLoggedIn={isLoggedIn}
          userName={userName}
          userEmail={userEmail}
        />

        <Routes>
          <Route
            path="/"
            element={
              <Blinkit
                cartcount={cartcount}
                setcartcount={setcartcount}
                itemStatus={itemStatus}
                setItemStatus={setItemStatus}
                itemsArray={itemsArray}
                toggleCartStatus={toggleCartStatus}
                totalPrice={totalPrice}
                isLoggedIn={isLoggedIn}
                setShowLoginPopup={setShowLoginPopup}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                cartcount={cartcount}
                totalPrice={totalPrice}
                Cartcount={cartcount}
                setcartcount={setcartcount}
              />
            }
          />
          <Route
            path="/Login"
            element={
              <Login
                setIsLoggedIn={setIsLoggedIn}
                onLoginSuccess={() => {
                  setIsLoggedIn(true);
                  navigate("/");
                }}
              />
            }
          />
          <Route
            path="/shop"
            element={
              <Shop
                cartcount={cartcount}
                setcartcount={setcartcount}
                itemsArray={Array}
                itemStatus={itemStatus}
                setItemStatus={setItemStatus}
                toggleCartStatus={toggleCartStatus}
                totalPrice={totalPrice}
                isLoggedIn={isLoggedIn}
                setShowLoginPopup={setShowLoginPopup}
              />
            }
          />
          <Route path="/Register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/all-users" element={<AllUsers />} />
          <Route
            path="/search"
            element={
              <SearchResults
                itemsArray={mergedItemsArray}
                cartcount={cartcount}
                setcartcount={setcartcount}
                itemStatus={itemStatus}
                setItemStatus={setItemStatus}
                toggleCartStatus={toggleCartStatus}
                totalPrice={totalPrice}
                isLoggedIn={isLoggedIn}
                setShowLoginPopup={setShowLoginPopup}
              />
            }
          />
        </Routes>
      </>
    )}
  </>
);
};

export default App;

