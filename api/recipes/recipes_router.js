const router = require("express").Router();

router.get("/", (req, res) => {
  res.json("foo");
});

module.exports = router;
