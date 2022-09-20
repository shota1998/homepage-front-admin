import React from 'react';

function Error(props) {
  console.log("Component :  Error")

  return (
    <>
      <div>Error occured.</div>
      <div>{props.component_name}</div>
    </>
  );
}

export default Error;
