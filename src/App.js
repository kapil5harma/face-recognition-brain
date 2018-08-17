import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import clarifaiApiKey from './config/clarifai';

const app = new Clarifai.App({
  apiKey: clarifaiApiKey
});

const particleOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};

class App extends Component {
  state = {
    input: ''
  };

  onInputChange = event => {
    console.log('event: ', event);
    console.log('event.target: ', event.target);
    console.log('event.target.value: ', event.target.value);
  };

  onButtonSubmit = () => {
    console.log('Detect button clicked!');
    app.models
      .predict(
        'a403429f2ddf4b49b307e318f00e528b',
        'https://samples.clarifai.com/face-det.jpg'
      )
      .then(
        function(response) {
          console.log('response: ', response);
          // do something with response
        },
        function(err) {
          console.log('err: ', err);
          // there was an error
        }
      );
  };

  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particleOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        {/* <FaceRecognition /> */}
      </div>
    );
  }
}

export default App;
