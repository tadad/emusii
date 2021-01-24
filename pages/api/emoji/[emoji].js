import emojis from "../emojis.json";

export default function handler(req, res) {
  const { emoji } = req.query;

  if ( emojis[emoji] ) {
    res.statusCode = 200;
    res.json(emojis[emoji][0]);
  } else {
    res.statusCode = 200;
    res.json("");
  }
};
