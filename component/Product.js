

import React, { useState } from 'react';
import Mixpanel from '../utils/mixpanel';

function Product() {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    Mixpanel.track('Button Clicked', { location: 'Product' });
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    Mixpanel.track('Button Clicked', { location: 'Product' });
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div>
      <h1>Product Page</h1>
      <h2>Checking The Connection</h2>
      <p>Test with button Quantity</p>
      
      <p>Quantity: {quantity}</p>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
      <button>Add to Cart</button>
    </div>
  );
}

export default Product;
