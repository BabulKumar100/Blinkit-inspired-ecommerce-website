import React, { useMemo} from 'react'
import ItemsCard from './ItemsCard';
import './Shop.css';



const Shop = ({setcartcount,cartcount,itemStatus,toggleCartStatus}) => {
  const Array= useMemo(() => ([
   {title: "Medicines :"},
   {itemname: "Paracetamol Tablets",
    imageURL: "Paracetamol.avif",
    quantity:"15 tablets",
    Price:"₹25"},

    {itemname: "cough Syrup",
    imageURL: "cough Syrup.jpg",
    quantity:"100ml",
    Price:"₹253"},

    {itemname: "Hand Sanitizer",
    imageURL: "Sanitizer.webp",
    quantity:"500 ml",
    Price:"₹250"},

    {itemname: "Vitamin C Tablets",
    imageURL: "vitamine C.jpg",
    quantity:"60 tablets(100 mg)",
    Price:"₹200"},

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
     Price:"₹58"},

     {itemname:"Colgate Strong Teeth ToothPaste",
     imageURL:"Colgate.jpg",
     quantity:"150 g",
     Price:"₹99"},

     {itemname:"Nivea Men Deodorant Roll On",
     imageURL:"Nivea.jpg",
     quantity:"50 ml",
     Price:"₹156"},

     {itemname:"Pantene Hair Fall Control Shampoo",
     imageURL:"Shampoo.webp",
     quantity:"180 ml",
     Price:"₹145"},

     {itemname:"Dettol Liquid Handwash Refill",
     imageURL:"Dettol Handwash.jpg",
     quantity:"750 ml",
     Price:"₹109"},

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
      Price:"₹437"},

      {itemname:"Himalaya Ashvagandha Tablets",
      imageURL:"Ashvagandha.jpg",
      quantity:"60 tablets",
      Price:"₹200"},

      {itemname:"Kapiva Amla Juice",
      imageURL:"Amla Juice.jpg",
      quantity:"1 Litre",
      Price:"₹248"},

      {itemname:"Organic India Tulsi Green Tea",
      imageURL:"Tulsi Green Tea.jpg", 
      quantity:"25 tea bags",
      Price:"₹194"},

      {itemname:"Baidhyanath Giloy Juice",
      imageURL:"Giloy Juice.jpg",
      quantity:"1 litre",
      Price:"₹355"},

      
       {title:"Health Devices :"},
       {itemname:"Dr. Morepen Digital Thermometer",
        imageURL:"Digital Thermometer.webp",
        quantity:"1 unit",
        Price:"₹159"},

        {itemname:"Omron Pressure Monitor",
        imageURL:"Pressure Monitor.jpg",
        quantity:"1 unit",
        Price:"₹2590"},

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
         Price:"₹999"},

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


  return (
     <div className="Card">
  {(() => {
    const sections = [];
    let currentSection = { title: '', items: [] };

    Array.forEach((item, index) => {
      if (item.title) {
        if (currentSection.items.length > 0) {
          sections.push(currentSection);
        }
        currentSection = { title: item.title, items: [] };
      } else {
        currentSection.items.push({ ...item, index });
      }
    });

    
    return sections.map((section, sectionIndex) => (
      <div key={sectionIndex}>
        <h2>{section.title}</h2>
        <div className="section-grid">
          {section.items.map((item) => (
            <ItemsCard
              key={item.index}
              itemname={item.itemname}
              imageURL={item.imageURL}
              quantity={item.quantity}
               price={item.Price}
              iscartAdded={itemStatus[item.index]?.iscartAdded || false}
              togglecar={() => toggleCartStatus(item.index, item)}
            />
          ))}
        </div>
      </div>
    ));
  })()}
</div>
  )
}
export default Shop;
