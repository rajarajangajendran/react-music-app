import logo from './logo.svg';
import './App.css';

import Playlist from "./Playlist/Playlist";
import SearchBar from "./SearchBar/SearchBar";
import SearchResults from "./SearchResult/SearchResult";
import Spotify from "./util/Spotify";

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       SearchResults: [],
       playlistName: "New Playlist",
       playlistTracks: []
    };

    this.search = this.search.bind(this);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.removeTrackSearch = this.removeTrackSearch.bind(this);
    this.doThese = this.doThese.bind(this);
  }

  search(term) {
    Spotify.search(term).then(searchResults => {
      this.setState({searchResults: searchResults});
    })
  }

  addTrack(track){
    let tracks = this.state.playlistTracks;
    if(tracks.find(savedTracks => savedTracks.id === track.id)){
      return;
    }
    tracks.push(track);
    this.setState({playlistTracks: track});
  }

  removeTrack(track){
    let tracks = this.state.playlistTracks;
  }

}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
