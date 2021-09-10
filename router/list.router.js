const router = require("express").Router();
const axios = require('axios')


router.get("/tickets", async (req, res) => {
  try {
    const response = await axios.get(
      "https://6f7smj4fdc.execute-api.us-east-1.amazonaws.com/default/techJobMission"
    );

    return res.status(200).json(response.data);
  } catch (err) {
    console.log(err.response);
    return res.status( 404 ).json({ msg: "List not found" })
  }
});

module.exports = router;
