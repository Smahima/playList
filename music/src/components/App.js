import React, { Component } from 'react';
import '../styles/App.css';
import NavBar from '../components/NavBar';
import PlayListForm from '../components/PlayListForm';
import PlayList from '../components/PlayList';



class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <PlayListForm/>
        <PlayList/>

        {this.props.children}
      </div>
    );
  }
}

export default App;
