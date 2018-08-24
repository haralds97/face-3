import React, { Component } from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation.js';
import Logo from './Components/Logo/Logo.js';
import Rank from './Components/Rank/Rank.js';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm.js';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition.js';
import Tachyons from 'tachyons';
import Clarifai from 'clarifai';
import Particles from 'react-particles-js';


const app = new Clarifai.App({
 apiKey: '66c26976e675482eaa843e8fc6b634ca'
});


class App extends Component {
  constructor() {
  	super();
  	this.state = {
  		input: '',
  		imageUrl: ''
  	}
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  }

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL, 
      this.state.input)
    .then(
      function(response) {
        console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
      },
      function(err) {
        // there was an error
      }
    );
  }


  render() {
    return (
      <div className="App">
        <Particles className="particles"/>
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm 
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}

        />
        <FaceRecognition 
          imageUrl={this.state.imageUrl}
        />
      </div>
    );
  }
}

export default App;
