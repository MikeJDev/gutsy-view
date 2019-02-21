import React from 'react';
import ReactDOM from 'react-dom';
import RenderPicture from './components/picView.js';
import TitleView from './components/titleView.js';
import axios from 'axios'

const server = process.env.AXIOS_LOCATION || 'http://ec2-3-17-152-133.us-east-2.compute.amazonaws.com';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 10,
      title: '',
      category: '',
      description: '',
      price: ''
    }
  }

  getData() {
    const id = this.state.id - 10
    axios.get(`${server}/databaseRetrievalOnLoad`)
      .then((response) => {
        console.log('response:', response)
        let trip = response.data
        this.setState({
          id: trip[id],
          title: trip[id].title,
          image_URL: trip[id].image_URL,
          category: trip[id].category,
          description: trip[id].description,
          price: trip[id].price
        })
      })
      .catch((err) => {
        console.log('error', err)
      })
  }

  componentDidMount() {
    window.addEventListener('changeID', (event) => {
      this.setState({id: event.detail});
    }, false);
    this.getData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.id !== this.state.id) {
      console.log('didUpdate here', this.state.id)
      this.getData()
    }
  }

  render() {
    return (
      <div className='main' style={mainView}>
        <div style={midView}>
          <div style={picTitleView}>
            <RenderPicture url={this.state.image_URL}/> 
            <TitleView title={this.state.title} description={this.state.description} price={this.state.price}/>
          </div>
        </div>
      </div>
    )
  }
}

const midView = {
  margin: 'auto',
}
  const picTitleView = {
    display: 'flex',
    flexDirection: 'row'
  }
  const mainView = {
    border: '2.5px solid black',
    borderHeight: '5px',
    padding: '20px',
    align: 'center'
  }

ReactDOM.render(<App/>, document.getElementById('app'));
