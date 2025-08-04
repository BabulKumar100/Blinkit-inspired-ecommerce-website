import React from 'react';
import Footer from './Footer';
import ItemsCard from "./ItemsCard";
import Banner from "./Banner";
import {useNavigate} from 'react-router-dom';

const Blinkit = ({
  cartcount,
  setcartcount,
  itemStatus,
  setItemStatus,
  itemsArray = [],
  toggleCartStatus,
  isLoggedIn,
  setShowLoginPopup
}) => {

  const navigate = useNavigate();

  return (
    <>
    <Banner isLoggedIn={isLoggedIn} setShowLoginPopup={setShowLoginPopup} navigate={navigate}/>

      <div className='itemList'>
  {(() => {
    const sections = [];
    let currentSection = { title: '', items: [] };

    itemsArray.forEach((item, index) => {
      if (item.title) {
        if (currentSection.items.length > 0) {
          sections.push(currentSection);
        }

        currentSection = { title: item.title, items: [] };
        
      } else {
        currentSection.items.push({ ...item, index });
      }
    });

    if (currentSection.items.length > 0) {
    sections.push(currentSection);
  }

   

     return sections.map((section, secIndex) => (
      <div key={secIndex} className='section-wrapper'>
        <h2 className='section-title'>{section.title}</h2>
        <div className='section-grid'>
          {section.items.map(item => {
            const status = itemStatus?.[item.index] || { iscartAdded: false };
            return (
              <ItemsCard
                key={item.index}
                itemname={item.itemname}
                imageURL={item.imageURL}
                quantity={item.quantity}
                price={item.Price}
                cartcount={cartcount}
                setcartcount={setcartcount}
                iscartAdded={status.iscartAdded}
                togglecar={() => toggleCartStatus(item.index, item)}

              />
            );
          })}
        </div>
      </div>
    ));
  })()}
</div>
      <Footer />
    </>
  );
};

export default Blinkit; 

