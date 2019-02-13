import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="Board">
        {/* 12h */}
        <div className="First-player-pos">
          <div>
            12h
          </div>
          <button>
            Reveal
          </button>
          <div>
            <img/>
            <img/>
            <img/>
          </div>
        </div>

        {/* 3h + 9h */}
        <div className="Fourth-player-pos">
          9h
            <button>
            Reveal
            </button>
            <img className="Vertical-center-image"/>
        </div>
        <div className="Second-player-pos">
         <img className="Vertical-center-image"/>
          <button>
            Reveal
            </button>
          3h
          </div>

        {/* 6h */}
        <div className="Third-player-pos">
          <div>
            <img/>
          </div>          
          <button>
            Reveal
          </button>
          <div>
            6h
          </div>
        </div>
      </div>
    );
  }
}

export default App;
