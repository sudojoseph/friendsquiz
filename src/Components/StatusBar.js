import React from 'react';

const StatusBar = ({status}) => {

  let barStyle = {
    width: `${status}%`
  }

  return(
    <div className="status-bar">
      <span style={barStyle}></span>
    </div>
  );
}

export default StatusBar;
