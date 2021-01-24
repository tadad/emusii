import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { toast } from 'react-toastify';
import Link from 'next/link';

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

  contextHandleSubmit = (values, callback) => {
    // axios.post('/api/user_submissions/', values);
    callback();
  }

  notify = (emoji) => toast(
    <Link href="/add" style={{textDecoration: 'none'}}>
      <>
        <h3 style={{color: 'white'}}>There are no songs for {emoji}</h3>
        <h3 style={{color: 'rgb(71, 238, 208)', 'marginBottom': '0'}}>click here to add one</h3>
        <h3 style={{marginBottom: '0'}}>👁👅👁</h3>
      </>
    </Link>
    
  );

  setVideoKey = (newKey, direction) => {
    axios.get(`/api/node/${newKey}`)
      .then(res => {
        this.setState({
          selectedEmoji: res.data.emoji,
          selectedSongKey: newKey,
          selectedTitle: res.data.title,
          selectedChannel: res.data.channel,
          selectedCurator: res.data.curator,
          northKey: res.data.N[0],
          southKey: res.data.S[0],
          eastKey: res.data.E[0],
          westKey: res.data.W[0],
          north: res.data.N[1],
          south: res.data.S[1],
          east: res.data.E[1],
          west: res.data.W[1],
        });
      });

    this.setState({
      playerTransitionType: `player-${direction}`},
      () => {
        setTimeout(() => this.setState({playerTransitionType: null}), 500); 
      }
    );
  }

  queryEmoji = (emoji) => {
    this.notify(emoji);
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
};

export default AppProvider;
