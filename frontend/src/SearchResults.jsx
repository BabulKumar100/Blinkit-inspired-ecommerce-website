import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ItemsCard from './ItemsCard';
import './SearchResults.css'; 

const SearchResults = ({ itemsArray, cartcount, setcartcount, itemStatus, toggleCartStatus}) => {
  const location = useLocation();
  const [results, setResults] = useState([]);

  const query = new URLSearchParams(location.search).get('query');


  useEffect(() => {
    if (query && itemsArray) {
      const filtered = itemsArray.filter(item =>
        (item?.itemname || "").toLowerCase().includes((query || "").toLowerCase())
      );
      setResults(filtered);
    }
  }, [query, itemsArray]);

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Search Results for "{query}"</h2>
      {results.length === 0 ? (
        <p>No items found.</p>
      ) : (
        <div className="cards-container">
          {results.map((item, index) => {
            const indexInArray = itemsArray.findIndex(i => i.itemname === item.itemname);
            const isAdded = itemStatus?.[indexInArray]?.iscartAdded;

            return (
              <ItemsCard
                key={indexInArray}
                itemname={item.itemname}
                imageURL={item.imageURL}
                quantity={item.quantity}
                price={item.Price }
                iscartAdded={isAdded}
                setcartcount={setcartcount}
                cartcount={cartcount}
                togglecar={() => toggleCartStatus(indexInArray, item)}

              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchResults; 
