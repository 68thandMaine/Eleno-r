import React from 'react';
import SavePicture from './SavePicture';
export default function SearchResults() {

  const wrapperStyles = {
    border: 'solid 1px black',
    display: 'block'
  };

  return (
    <div style={wrapperStyles}>
            SearchResults Works
      <SavePicture />
    </div>
  );
}