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
  e.preventDefault();
  const {name, value} = e.target;
  this.setState({
    [name]: value
  });
}

grabHeroData(e) {
  e.preventDefault();
  const { query, heroList } = this.state;
  let app = this;
  axios.post('http://localhost:4000/hero', { query })
    .then((response) => {
      console.log('Retrieved hero data', response);
      // const hero = [].concat(response.data);
      app.setState({
        heroList: heroList.concat(response.data)
      });
    })
    .catch((error) => {
      console.error('unabale to post data', error);
    });
}


componentDidMount() {

}

  render() {
    const { query, heroList } = this.state;
    return (
      <div>
        <h1>Hero Brawl</h1>
        <br/>
        <form action="" onSubmit={this.grabHeroData}>
          <label>
            Find a Hero!
            <input type="text" name="query" onChange={this.fetchHero}/>
          </label>
          <input type="submit" value="submit"/>
        </form>
        <ul className="heroList">
          {(heroList.length > 0) ? heroList.map((hero, idx)=> {
            return <li key={idx}>{hero.name}</li>
          }) : null}
        </ul>
      </div>
    )
  }
}

export default App;

