import React from 'react';

const Row = ({ left, right, leftSize, rightSize }) => {
  const leftConSize = leftSize !== undefined ? `col-${leftSize}` : 'col';
  const rightConSize = rightSize !== undefined ? `col-${rightSize}` : 'col';
  return (
    <div className="container">
      <div className="row">
        <div className={leftConSize}>{left}</div>
        <div className={rightConSize}>{right}</div>
      </div>
    </div>
  );
};

export default Row;
