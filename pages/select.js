import Picker from 'emoji-picker-react';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function Select() {
  return (
    <>
      <ToastContainer 
        hideProgressBar
        autoClose={7000}
      />
      <Picker 
        // onEmojiClick={(e, emoji) => onEmojiClick(e, emoji)}
        disableSearchBar
        disableAutoFocus
        disableSkinTonePicker
      />
    </>
  );
}
