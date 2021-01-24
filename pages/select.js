import { useContext } from 'react';
import Picker from 'emoji-picker-react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import KoodosLink from './components/KoodosLink';
import { AppContext } from './context/AppContext';

export default function Select() {
  const { queryEmoji } = useContext(AppContext);

  return (
    <>
      <ToastContainer 
        hideProgressBar
        autoClose={7000}
      />
      <Picker 
        onEmojiClick={(emoji) => queryEmoji(emoji.emoji)}
        disableSearchBar
        disableAutoFocus
        disableSkinTonePicker
      />
      <KoodosLink />
    </>
  );
}
