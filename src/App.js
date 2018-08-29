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
import SignIn from './Components/SignIn/SignIn.js';


const app = new Clarifai.App({
  apiKey: '66c26976e675482eaa843e8fc6b634ca'
})

class App extends Component {
  constructor() {
  	super();
  	this.state = {
  		input: '',
  		imageUrl: '',
      box: {},
      route: 'SignIn'
    }
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  }

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL, 
      this.state.input
    )
    .then(response => this.displayFaceBox(this.calculateFacePosition(response)))
    .catch(err => console.log(err));
  }
    

  calculateFacePosition = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,  
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    this.setState({ box: box })
  }

  onRouteChange = (route) => {
    this.setState({ route: route });
  }


  render() {
    return (
      <div className="App">
        <Particles className="particles"/>
        <Navigation onRouteChange={this.onRouteChange}/>
        {
          this.state.route === 'SignIn' 
          ? <SignIn onRouteChange={this.onRouteChange}/>
          : 
          <div>
            <Logo />
            <Rank />
            <ImageLinkForm 
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
            />
            <FaceRecognition 
              imageUrl={this.state.imageUrl}
              box={this.state.box}
            />
          </div>
        }
      </div>
    );
  }
}

export default App;
