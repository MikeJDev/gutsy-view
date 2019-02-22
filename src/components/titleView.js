import React from 'react'

const TitleView = (props) => {
  return (
    <div>
      <div style={titleView}>
        <h2>{props.title}</h2>
        <h4>Description:</h4>
        <p>{props.description}</p>
          <div style={textSize}>
            Price: ${props.price}
          </div> 
        <div>
      </div><br/>
      <button id="book" style={button}>Book Now</button>
      </div>
      <div style={{marginLeft: '5px'}}>
        <ul>
          <li>Tickets sent via email</li>
          <li>Returns and exchanges accepted</li>
          <li>Exceptions may apply.</li>
        </ul>
      </div>
    </div>
  )
}

const titleView = {
  marginLeft: '10px',
  width: '600px',
  height: '350px',
  padding: '10px'
}
const textSize = {
  fontSize: '25px'
}
const button = {
  margin: 'px',
  backgroundColor: '#242121',
  borderColor: 'white',
  borderRadius: '5px',
  color: 'white',
  fontSize: 24,
  fontWeight: 'bold',
  overflow: 'hidden',
  padding: 5,
  width: '400px',
  outline: 'none',
  cursor: 'pointer'
}

export default TitleView
