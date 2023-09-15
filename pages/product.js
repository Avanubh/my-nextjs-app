

import React from 'react';
import Product from '../component/Product';
import Mixpanel from '../utils/mixpanel';

function ProductPage() {
    // Track a page view event when the component mounts
    React.useEffect(() => {
        Mixpanel.track('Product Page View');
    }, []);

  return (
    <div>
      <Product />
    </div>
  );
}

export default ProductPage;
