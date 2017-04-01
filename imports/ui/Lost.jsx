//import dependancies
import React, { Component } from 'react';
//create component
export default class Lost extends Component {
  render() {
    return (

      <article className="comic">
				<h2>404  - you've made a monsterous error</h2>
        <div className="panel">
          <p className="text top-left">404  - you've made a monsterous error</p>
          <p className="text bottom-right">...you probably want to return to your monsters</p>
        </div>
        <div className="panel">
          <p className="text top-left">follow the monsters</p>
          <p className="text bottom-right">...to get home</p>
        </div>
        <div className="panel">
          <p className="speech">click me</p>
        </div>
          <div className="panel"></div>
          <div className="panel"></div>
          <div className="panel"></div>
          <div className="panel"></div>
          <div className="panel"></div>
          <div className="panel">
            <p className="text bottom-right">THE END</p>
          </div>
  			</article>
    );
  }
}
