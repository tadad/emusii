import emojis from "../emojis.json";

export default function handler(req, res) {
  const { emoji } = req.query;

  if ( emojis[emoji] ) {
    res.statusCode = 200;

    const all_songs = emojis[emoji]
    const random = Math.floor(Math.random() * all_songs.length)
    res.json(all_songs[random]);
  } else {
    res.statusCode = 200;
    res.json("");
  }
};
