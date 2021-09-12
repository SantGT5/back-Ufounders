
const express = require("express");
const app = express();
const PORT = 4000;

// const cors = require("cors");
// app.use(cors({ origin: "process.env.REACT_APP_URL" }));

const TicketList = require( "./router/list.router" )
app.use( "/", TicketList )


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });