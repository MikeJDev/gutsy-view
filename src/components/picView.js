import React from 'react';

const RenderPicture = (props) => {
  return (
    <div style={picView}>
    <img src={props.url} style={imageStyle}></img>
    </div>
  )
}

const picView = {
  width: '600px',
  height: '450px',
  border: '2px solid black',
}
const imageStyle = {
  width: '600px',
  height: '450px'
}

export default RenderPicture
