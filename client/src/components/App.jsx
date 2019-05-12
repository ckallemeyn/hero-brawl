import React, { Component } from 'react';
import axios from 'axios';
import HeroTable from './HeroTable.jsx';
import NavBar from './NavBar.jsx';
import LoginForm from './LoginForm.jsx';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

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
      // need to do something with the username here...
    })
    .catch((error) => {
      console.error('unabale to post data', error);
    });
}

// initial get request with username
componentDidMount() {
  let username = 'ckallemeyn';
  let app = this;
  axios.get(`http://localhost:4000/hero/${username}`)
    .then(({ data }) => {
      console.log('SUCCESS received data on client', data);
      app.setState({
        heroList: data
      });
    })
    .catch((error) => {
      console.error('unable to read data from db onload', error);
    });
}

  render() {
    const { query, heroList } = this.state;
    return (
      <Router>
        <div>
          <NavBar />
          <br/>
          {/* <LoginForm />
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
          </form> */}
           {/* <div>
            <HeroTable data={heroList} />
          </div> */}
          <Route exact path="/" component={LoginForm} />
          <Route path="/lineup" render={() => <HeroTable  data={heroList}/>} />
          {/* <Route path="/battle" component={null} /> */}
        </div>
      </Router>
    )
  }
}

export default App;

