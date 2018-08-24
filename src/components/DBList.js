import React from 'react';

const DBList = (props) => {
  return (
    <div>
      <p>{props.item}</p>
      <p>{props.tagline}</p>
    </div>
  );
};

export default DBList;