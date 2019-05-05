import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      query: '',
      heroList: [],
      removeHero: false,
    }
    this.fetchData = this.fetchData.bind(this);
    this.grabHeroData = this.grabHeroData.bind(this);
  }

fetchData(e) {
  e.preventDefault();
  const { name, value } = e.target;
  this.setState({
    [name]: value
  });
}

grabHeroData(e) {
  e.preventDefault();
  const { username, query, heroList } = this.state;
  let app = this;
  console.log('here is the username', username)
  axios.post('http://localhost:4000/hero', { query, username })
    .then((response) => {
      console.log('Retrieved hero data', response);
      app.setState({
        heroList: heroList.concat(response.data)
      });
    })
    .catch((error) => {
      console.error('unabale to post data', error);
    });
}


componentDidMount() {
// add initial GET request for Hero data from database
}

  render() {
    const { query, heroList } = this.state;
    return (
      <div>
        <h1>Hero Brawl</h1>
        <br/>
        <form onSubmit={this.grabHeroData}>
          <label>
            Username:
            <input type="text" name="username" onChange={this.fetchData}/>
          </label>
          <br/>
          <label>
            Search:
            <input type="text" name="query" placeholder="find a superhero" onChange={this.fetchData}/>
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

