import React, { Component } from 'react';

class PlayListItem extends Component {

    render(){

      let songs = this.props.array.map( (song, index) => {

        return (
          <div className="list" className="border" key={index}>
            <div>User: {song.userName}</div> <br></br>
            <div>Artist/Band: {song.songArtist}</div> <br></br>
            <div>Title: {song.songTitle}</div> <br></br>
            <div>Notes: {song.songNotes}</div> <br></br>
          </div>
        );
      });
      return (
        <div>
          {songs}
        </div>
      )

  }
  }


export default PlayListItem;
