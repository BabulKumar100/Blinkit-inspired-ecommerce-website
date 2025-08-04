import './ItemsCard.css';

const ItemsCard = ({
  itemname,
  imageURL,
  quantity,
  price,
  iscartAdded,
  togglecar,
  hideButtons = false
}) => {

  function handleAddtoCarts() {
    if (typeof togglecar === "function") {
    togglecar(); 
  }
}

  return (
    <div className='items-container'>
      <div className='product-card'>
        <img src={imageURL} alt={itemname} />
        <div className='item-text'>{itemname}</div>
        <span className='quantity'>{quantity}</span>
        <div className='price-add-button'>
          <div className='price'>{price}</div>
          {!hideButtons && (
            <button onClick={handleAddtoCarts}>
              {iscartAdded ? "Remove" : "Add"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemsCard;
