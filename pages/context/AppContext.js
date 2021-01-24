import React from 'react';
import PropTypes from 'prop-types';
// import axios from 'axios';
import { toast } from 'react-toastify';

export const AppContext = React.createContext();

class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonTapped: false,
      selectedSongKey: 'X-uJtV8ScYk',
      selectedEmoji: '🔙',
      selectedTitle: 'Stray Kids "Back Door" M/V',
      selectedChannel: 'JYP Entertainment',
      selectedCurator: 'TadaSlide70 🤡🥔🤠',
      north: '🤒',
      south: '🥪',
      east: '😭',
      west: '🎇',
      northKey: '6pF3HCuFHvY',
      southKey: 'bXcSLI58-h',
      eastKey: 'bXcSLI58-h',
      westKey: 'yqem6k_3pZ8',
      playerTransitionType: '',
    }
  }

  setButtonTapped = (val) => {
    this.setState({buttonTapped: val});
  }

  contextHandleSubmit = (values, callback) => {
    axios.post('/api/user_submissions/', values);
    callback();
  }

  notify = () => toast(
    <Link to="/add" style={{'textDecoration': 'none'}}>
      <h3 style={{'color': 'white'}}>No song for that emoji 😢</h3>
      <h3 style={{'color': 'rgb(71, 238, 208)', 'marginBottom': '0'}}>click here to add one</h3>
      <h3 style={{'marginBottom': '0'}}>👁👅👁</h3>
    </Link>
  );

  setVideoKey = (newKey, direction) => {
    // const { history } = this.props;
    // axios.get(`/api/node/${newKey}`)
    //   .then(res => {
    //     this.setState({
    //       selectedSongKey: res.data.song_id,
    //       selectedTitle: res.data.title,
    //       selectedChannel: res.data.channel,
    //       selectedCurator: res.data.curator,
    //       northKey: res.data.N,
    //       southKey: res.data.S,
    //       eastKey: res.data.E,
    //       westKey: res.data.W,
    //       north: res.data.N_em,
    //       south: res.data.S_em,
    //       east: res.data.E_em,
    //       west: res.data.W_em,
    //     });
    //     axios.get(`/api/emoji/${res.data._emoji}`) // eslint-disable-line
    //       .then(newEmoji => {
    //         this.setState({selectedEmoji: newEmoji.data.title})
    //       });
    //   });

    this.setState({
      playerTransitionType: `player-${direction}`},
      () => {
        setTimeout(() => this.setState({playerTransitionType: null}), 500); 
      }
    );
    // history.push(`/listen/${newKey}`); // don't want to deal with deep linking for now
  }

  queryEmoji = (emoji) => {
    // const { history } = this.props;
    // axios.get(`/api/emoji/?title=${emoji}`)
    //   .then(res => {
    //     if (res.data.length === 0) {
    //       this.notify();
    //     } else {
    //       const emojiId = res.data[0].id;

    //       axios.get(`/api/node/?_emoji=${emojiId}`)
    //         .then(res2 => {
    //           const song = res2.data[0];
    //           this.setState({
    //             selectedSongKey: song.song_id,
    //             selectedTitle: song.title,
    //             selectedChannel: song.channel,
    //             selectedCurator: song.curator,
    //             selectedEmoji: emoji,
    //             northKey: song.N,
    //             southKey: song.S,
    //             eastKey: song.E,
    //             westKey: song.W,
    //             north: song.N_em,
    //             south: song.S_em,
    //             east: song.E_em,
    //             west: song.W_em,
    //           });
    //           history.push('/listen/');
    //         })
    //     }
    //   })
  }

  render() {
    const { children } = this.props;
    const {
      buttonTapped,
      selectedSongKey,
      selectedEmoji,
      selectedTitle,
      selectedChannel,
      selectedCurator,
      north,
      south,
      east,
      west,
      northKey,
      southKey,
      eastKey,
      westKey,
      playerTransitionType,
    } = this.state;

    return (
      <AppContext.Provider value={{
        buttonTapped,
        selectedSongKey,
        selectedEmoji,
        selectedTitle,
        selectedChannel,
        selectedCurator,
        north,
        south,
        east,
        west,
        northKey,
        southKey,
        eastKey,
        westKey,
        playerTransitionType,
        setButtonTapped: this.setButtonTapped,
        setVideoKey: this.setVideoKey,
        queryEmoji: this.queryEmoji,
        notify: this.notify,
        contextHandleSubmit: this.contextHandleSubmit,
      }}
      >
        {children}
      </AppContext.Provider>
    );
  }
}

AppProvider.propTypes = {
  children: PropTypes.element.isRequired,
  // object is not allowed as a proptype for eslint...
  history: PropTypes.object.isRequired, // eslint-disable-line
};

export default AppProvider;
