import React from 'react'


const TitleView = (props) => {
  
  const addToCart = (item) => () => {
    const event = new CustomEvent('addToCart', { detail: item });
    console.log('this is dispatch', detail.item)
    window.dispatchEvent(event);
  }
  return (
    <div>
      <div style={titleView}>
        <h2>{props.title}</h2>
        <h4>Description:</h4>
        <div style={fontFamily}>
        <p>{props.description}</p>
        </div>
          <div style={textSize}>
            Price: ${props.price}
          </div> 
        <div>
      </div><br/>
      <button id="book" style={button} onClick={addToCart(props.id)}>Book Now</button>
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
const fontFamily = {
  fontFamily: 'Roboto'
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
