import React from 'react';

import './collection-item.component.styles.scss';

const collectionItem = ({ id, name, price, imageUrl }) => (
  <div className="collection-item" key={id}>
    <div
      className="image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="collection-footer">
      <span className="name">{name} </span>
      <span className="price">{price}</span>
    </div>
  </div>
);

export default collectionItem;
