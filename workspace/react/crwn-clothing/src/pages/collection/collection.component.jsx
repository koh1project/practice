import React from 'react';

// import CollectionItem from '../../components/collection-item';

import './collection.styles.scss';

const CollectionPage = ({ match }) => (
  <div className="category">
    <h2>CATEGORY PAGE {match.params.collectionId}</h2>
  </div>
);

export default CollectionPage;
