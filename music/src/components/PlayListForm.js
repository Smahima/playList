import React, { Component } from 'react';

class PlayListForm extends Component {
  constructor (props){
    super(props);

this.handleAddToList = this.handleAddToList.bind(this);
this.handleUserName = this.handleUserName.bind(this);
this.handleSongNotes = this.handleSongNotes.bind(this);
this.handleArtist = this.handleArtis.bind(this);
this.handleSongTitle = this.handleSongTitle.bind(this);

    this.state = {
      userName: "",
      songNotes: "",
      songArtist: "",
      songTitle: "",
    };
  }
      handleName(e) {
      this.setState({userName: e.target.value});
    }
    handleTitle(e) {
      this.setState({songTitle: e.target.value});
    }
    handleArtist(e) {
      this.setState({songArtist: e.target.value});
    }
    handleNotes(e) {
      this.setState({songNotes: e.target.value});
    }
    addToList = (e) => {
        e.preventDefault();
        this.setState({userName: e.target.value, songTitle: e.target.value, songArtist: e.target.value, songNotes: e.target.value});
        let listItem = JSON.stringify(this.state);

        fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
          method: "POST",
          body: listItem,
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
      }
      ).then(response => {
        console.log(response, "Ciao");

      }).catch(err => {
        console.log(err, "boo!");
      });
      this.setState({userName: '', songNotes: '', songArtist: '', songTitle:''});
    }

}



export default PlayListForm;
