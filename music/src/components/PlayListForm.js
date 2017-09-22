import React, { Component } from 'react';


class PlayListForm extends Component {
  constructor (props){
    super(props);

this.addToList = this.addToList.bind(this);
this.handleUserName = this.handleUserName.bind(this);
this.handleSongNotes = this.handleSongNotes.bind(this);
this.handleArtist = this.handleArtist.bind(this);
this.handleSongTitle = this.handleSongTitle.bind(this);

    this.state = {
      userName: "",
      songNotes: "",
      songArtist: "",
      songTitle: "",
    };
  }
      handleUserName(e) {
      this.setState({userName: e.target.value});
    }
    handleSongTitle(e) {
      this.setState({songTitle: e.target.value});
    }
    handleArtist(e) {
      this.setState({songArtist: e.target.value});
    }
    handleSongNotes(e) {
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
    render (){
      return (
      <div className="main">
        <form onSubmit={this.addToList}>

          <div className="form-group row">
            <label  className="col-m-2 col-form-label">User Name</label>
              <div className="col-sm-10">
              <input onChange={this.handleUserName} type="text" className="form-control" value={this.state.userName} placeholder="Enter User Name"/>
            </div>
          </div>

          <div className="form-group row">
            <label  className="col-m-2 col-form-label">Artist</label>
              <div className="col-sm-10">
              <input onChange={this.handleArtist} type="text" className="form-control" value={this.state.Artist} placeholder="Search by Artist"/>
            </div>
          </div>

          <div className="form-group row">
            <label  className="col-sm-2 col-form-label">Title</label>
              <div className="col-sm-10">
              <input onChange={this.handleSongTitle} type="text" className="form-control" value={this.state.songTitle} placeholder="Search by Title"/>
            </div>
          </div>

          <div className="form-group row">
            <label  className="col-sm-6 col-form-label">Notes about the Song</label>
              <div className="col-sm-10">
              <textarea onChange={this.handleSongNotes} type="text" rows="4" className="form-control" value={this.state.songNotes} />
            </div>

            <div className="form-group">
              <input className="btn btn-primary" type="submit" value="Submit"/>
            </div>

          </div>

        </form>

    </div>
      );
    }
}


export default PlayListForm;
