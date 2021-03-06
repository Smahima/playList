import React, { Component } from 'react';
import PlayListItem from './PlayListItem';

class PlayList extends Component {
  constructor (props){
    super(props);

    this.fetchData = this.fetchData.bind(this)

    this.state = {
      songs: [],
    };
  }
  fetchData = (e) => {
      e.preventDefault();
      fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
        return results.json();
      }).then(data => {
        this.setState({songs: data});
      })
    }
    componentDidMount () {
      fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
            return results.json();
          }).then(data => {
            this.setState({songs: data});
            console.log("melody", this.state.songs);
          })
        }

    render() {
   return (
     <div>
       <button className="btn" onClick={this.fetchData}>Add My Tune!</button>
       <PlayListItem array={this.state.songs}/>
     </div>
   );
 }
}




export default PlayList;
