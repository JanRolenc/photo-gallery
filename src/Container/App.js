import React, { Component } from 'react';
import SignIn from '../Components/SignIn/SignIn';
import Name from '../Components/Name/Name';
import Navigation from '../Components/Navigation/Navigation';
import Filterinput from '../Components/Filterinput/Filterinput';
import About from '../Components/About/About';
import Scroll from '../Components/Scroll/Scroll';
import Cards from '../Components/Cards/Cards';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      route: 'signin',
      isSignedIn: false,
      isAbout: false,
      filterinput: '',
      cards: [],
      inputPassword: ''
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(photos => this.setState({ cards: photos }));
  }
  onSearchChange = (event) => {
    this.setState({ filterinput: event.target.value })
  }
  onPasswordChange = (event) => {
    this.setState({ inputPassword: event.target.value })
    // console.log(this.state.inputPassword);
  }
  onConfirmClick = () => {
    fetch('https://boiling-dawn-61906.herokuapp.com/confirm', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        input: this.state.inputPassword
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data === 'error loggin in') {
          window.alert('The password is incorrect')
        } else if (data === 'the password is not filled in') {
          window.alert('The password must be filled in')
        } else {
          window.alert('The passwort is correct, wait a sec...')
          this.setState({ isSignedIn: true });
          this.setState({ route: 'home' });

        }
      })
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({ isSignedIn: false })
    } else if (route === 'home') {
      this.setState({ isSignedIn: true })
    } else if (route === 'about') {
      this.setState({ isAbout: true })
      this.setState({ isSignedIn: false })
    }
    this.setState({ route: route });
  }
  render() {
    const filteredCards = this.state.cards.filter(item => {
      return item.title.toLowerCase().includes(this.state.filterinput.toLowerCase());
    });
    return (
      this.state.route === 'signin'
        ?
        <div className="app">
          <Name className='center' />
          <SignIn
            passwordChange={this.onPasswordChange}
            confirmClick={this.onConfirmClick}
          />
        </div>
        : (
          this.state.route === 'home'
            ?
            <div>
              <Navigation
                isSignedIn={this.state.isSignedIn}
                isAbout={this.state.isAbout}
                routeChange={this.onRouteChange}
              />
              <Filterinput searchChange={this.onSearchChange} />
              <Scroll>
                <Cards cards={filteredCards} />
              </Scroll>
            </div>
            : (
              this.state.route === 'about'
                ?
                <div>
                  <Navigation
                    isSignedIn={this.state.isSignedIn}
                    isAbout={this.state.isAbout}
                    routeChange={this.onRouteChange}
                  />
                  <About />
                </div>
                :
                <div className="app">
                  <Name className='center' />
                  <SignIn
                    passwordChange={this.onPasswordChange}
                    confirmClick={this.onConfirmClick}
                  />
                </div>
            )
        )


    );
  }
}

export default App;
