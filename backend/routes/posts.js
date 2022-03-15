import express from "express";

const router = express.Router();

const posts = [
  {
    title: "First Post",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt maiores illum, architecto debitis vitae perspiciatis accusamus commodi porro et! Harum?",
  },
];

router.get("/", (req, res) => {
  res.status(200).json(posts);
});

router.post("/", (req, res) => {
  const post = req.body;
  posts.push(post);
  res.status(201);
});

export { router as postRoutes };
