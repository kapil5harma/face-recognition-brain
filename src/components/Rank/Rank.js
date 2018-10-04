import React from 'react';

const Rank = props => {
  const { name, entries } = props;

  return (
    <div className="">
      {`${name}, your current entry count is...`}
      <div className="white f1 ">{entries}</div>
    </div>
  );
};

export default Rank;
