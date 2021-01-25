import React, { useContext } from "react";
import dynamic from 'next/dynamic';
import { ToastContainer } from "react-toastify";
import KoodosLink from "./components/KoodosLink";
import { AppContext } from "./context/AppContext";
import "react-toastify/dist/ReactToastify.css";

const Picker = dynamic(
  () => import("emoji-picker-react"),
  { ssr: false }
);

export default function Select() {
  const { queryEmoji } = useContext(AppContext);

  const helper = (e, emoji) => {
    queryEmoji(emoji);
  }

  return (
    <>
      <ToastContainer hideProgressBar autoClose={7000} position="top-center" />
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
