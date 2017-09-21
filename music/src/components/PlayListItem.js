import React, { Component } from 'react';

class PlayListItem extends Component {
  render (){
    let array = this.props.songs;
    let songs = this.array.map ((song, index) => {
      <div>{index}</div>
    })
    return (
      <div>{songs}</div>
    );
  }
}



export default PlayListItem;
