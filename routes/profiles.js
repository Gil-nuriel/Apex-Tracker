const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

router.get("/:platform/:gamertag", async function(req, res) {
  try {
    const headers = { "TRN-Api-Key": process.env.TRACKER_API_KEY };

    const response = await fetch(
      `${process.env.TRACKER_API_URL}/profile/${req.params.platform}/${req.params.gamertag}`,
      { headers }
    );

    const data = await response.json();

    if (data.errors) {
      return res.status(404).json({ message: "Player does not exist" });
    }

    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json("server Error"); //not sure why we need it (to handle somekind of error)
  }
});

module.exports = router;
