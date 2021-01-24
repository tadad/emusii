import React, { useContext } from "react";
import Picker from "emoji-picker-react";
import { ToastContainer } from "react-toastify";
import { useRouter } from 'next/router';
import KoodosLink from "./components/KoodosLink";
import { AppContext } from "./context/AppContext";
import "react-toastify/dist/ReactToastify.css";


export default function Select() {
  const { queryEmoji } = useContext(AppContext);
  const router = useRouter()

  const helper = (e, emoji) => {
    queryEmoji(emoji);
    router.push("/listen");
  }

  return (
    <>
      <ToastContainer hideProgressBar autoClose={7000} />
      <Picker
        onEmojiClick={(e, emoji) => helper(e, emoji.emoji)}
        disableSearchBar
        disableAutoFocus
        disableSkinTonePicker
      />
      <KoodosLink />
    </>
  );
}
