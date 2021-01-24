import Container from './components/Container';
import Player from './components/Player';
import SongInfo from './components/SongInfo';
import PlayerControls from './components/PlayerControls';

export default function Grid() {
  return (
    <Container>
      <Player />
      <SongInfo />
      <PlayerControls />
    </Container>
  );
}