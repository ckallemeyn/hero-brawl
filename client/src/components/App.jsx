import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      heroList: [],
      removeHero: false,
    }
    this.fetchHero = this.fetchHero.bind(this);
    this.grabHeroData = this.grabHeroData.bind(this);
  }

fetchHero(e) {
// make an AJAX req to server
// get data back from server
// update the state with hero name and stats
}

grabHeroData() {

}

componentDidMount() {

}

  render() {
    const { query, heroList } = this.state;
    return (
      <div>
        <h1>Hero Brawl</h1>
        <br/>
        <form action="">
          <label>
            Find a Hero!
            <input type="text" value={query} onChange={}/>
          </label>
        </form>
      </div>
    )
  }
}

export default App;

