import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
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
      selectedCurator: 'TadaSlide70',
      selectedCuratorEmoji: '🤡🥔🤠',
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

    this.router = props.router;
  }

  contextHandleSubmit = (values) => {
    global.analytics.track('added song', {
      values,
    })
    this.router.push('/select');
  } 

  notify = () => toast(
    <a href="https://suggest.koodos.com/YVpEy1">
      <h3 style={{color: 'white'}}>There are no songs for that emoji</h3>
      <h3 style={{color: 'rgb(71, 238, 208)', 'marginBottom': '0'}}>tap here to add one</h3> 
      <h3 style={{marginBottom: '0'}}>👁👅👁</h3>
    </a>
  );

  setVideoKey = (newKey, direction, callback = () => {} ) => {
    axios.get(`/api/node/${newKey}`)
      .then(res => {
        console.log(res.data.curator);
        console.log(res.data.curator_emoji);
        this.setState({
          selectedEmoji: res.data.emoji,
          selectedSongKey: newKey,
          selectedTitle: res.data.title,
          selectedChannel: res.data.channel,
          selectedCurator: res.data.curator,
          selectedCuratorEmoji: res.data.curator_emoji,
          northKey: res.data.N[0],
          southKey: res.data.S[0],
          eastKey: res.data.E[0],
          westKey: res.data.W[0],
          north: res.data.N[1],
          south: res.data.S[1],
          east: res.data.E[1],
          west: res.data.W[1],
        }, callback());
      });

    this.setState({
      playerTransitionType: `player-${direction}`},
      () => {
        setTimeout(() => this.setState({playerTransitionType: null}), 500); 
      }
    );

    global.analytics.track('navigation', {
      direction,
      selectedEmoji: this.state.selectedEmoji,
      selectedTitle: this.state.selectedTitle,
      selectedChannel: this.state.selectedChannel,
    });
  }

  queryEmoji = (emoji) => {
    global.analytics.track('selected emoji', {
      emoji,
    });
    axios.get(`/api/emoji/${emoji}`)
      .then(res => {
        if (res.data.length === 0) {
          this.notify();
        } else {
          this.setVideoKey(res.data, null);
          this.router.push('/listen');
        }
      })
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
      selectedCuratorEmoji,
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
        selectedCuratorEmoji,
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
