import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import HeroTable from './HeroTable.jsx';
import NavBar from './NavBar.jsx';
import SignUpForm from './SignUpForm.jsx';
import Battle from './Battle.jsx';
import SignInForm from './SignInForm.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      battleSearch: '',
      heroName: '',
      battleList:[],
      heroList: [],
      removeHero: false,
    }
    this.fetchData = this.fetchData.bind(this);
    this.postHeroData = this.postHeroData.bind(this);
    this.collectHero = this.collectHero.bind(this);
    this.signInUser = this.signInUser.bind(this);
  }

fetchData(e) {
  e.preventDefault();
  const { name, value } = e.target;
  this.setState({
    [name]: value
  });
}

collectHero(e) {
  e.preventDefault();
  const app = this;
  const { battleSearch, battleList } = this.state;
  if (battleSearch === '') {
    return alert('not a valid hero name please try again');
  }
  if (battleList.length === 2) {
    return alert('Cannot add another hero to battle');
  }
  axios.get(`http://localhost:4000/stats/${battleSearch}`)
    .then((response) => {
      const { data } = response;
      this.setState({
        battleSearch: '',
        battleList: app.state.battleList.concat(data)
      });
    })
    .catch((error) => {
      console.error('unable to retrive data', error);
    });
}

signInUser() {
  const { username, password } = this.state;
  if (username.length < 2 || password.length < 2) {
    return alert('username is too short, please try again.');
  }
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


postHeroData(e) {
  e.preventDefault();
  const { username, heroName } = this.state;
  let app = this;
  console.log('here is the username', username)
  axios.post('http://localhost:4000/hero', { heroName, username })
    .then((response) => {
      console.log('Retrieved hero data', response);
      app.signInUser();
    })
    .catch((error) => {
      console.error('unabale to post data', error);
    });
}

// initial get request with username
componentDidMount() {
  // let username = 'ckallemeyn';
  // let app = this;
  // axios.get(`http://localhost:4000/hero/${username}`)
  //   .then(({ data }) => {
  //     console.log('SUCCESS received data on client', data);
  //     app.setState({
  //       heroList: data
  //     });
  //   })
  //   .catch((error) => {
  //     console.error('unable to read data from db onload', error);
  //   });
}

  render() {
    const { query, heroList, battleSearch, battleList } = this.state;
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={SignUpForm} />
          <Route path="/signin"
            render={() => (
            <SignInForm
              fetchData={this.fetchData}
              signInUser={this.signInUser}
            />)}
          />
          <Route
            path="/lineup"
            render={() => (
            <HeroTable
              data={heroList}
              fetchData={this.fetchData}
              postHeroData={this.postHeroData}
            />)}
          />
          <Route
            path="/battle"
            render={() => (
            <Battle
              battleList={battleList}
              battleSearch={battleSearch}
              collectHero={this.collectHero}
              fetchData={this.fetchData}
            />)}
          />
        </div>
      </Router>
    )
  }
}

export default App;

