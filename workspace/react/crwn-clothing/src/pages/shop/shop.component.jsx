import React from 'react';

import SHOP_DATA from './shop.data';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    console.log(collections);
    return (
      <div>
        SHOP PAGE
        {/* {collections} */}
      </div>
    );
  }
}

export default ShopPage;
