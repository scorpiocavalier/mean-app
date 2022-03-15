import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  const posts = [
    {
      title: "First Post",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt maiores illum, architecto debitis vitae perspiciatis accusamus commodi porro et! Harum?",
    },
  ];
  res.status(200).json(posts);
});

export { router as postRoutes };
