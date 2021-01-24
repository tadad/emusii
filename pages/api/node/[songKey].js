// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import grid from "../grid.json";

export default function handler(req, res) {
  const { songKey } = req.query;
  res.statusCode = 200;
  res.json(grid[songKey]);
};
