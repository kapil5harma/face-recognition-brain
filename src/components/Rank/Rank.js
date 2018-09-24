import React from 'react';

const Rank = props => {
  const { name, entries } = props;

  return (
    <div className="">
      {`${name} , your current rank is...`}
      <div className="white f1 ">{entries}</div>

      {/* <div className="white f3">{'Kapil, your current rank is...'}</div>
      <div className="white f1">{'#1'}</div> */}
    </div>
  );
};

export default Rank;
