const express = require("express");

// initialize express app
const app = express();

// create timestamp object
const timeStamp = (dateObj) => {
  const regex = /^[0-9]{4}-[0-9]{2}-[0-9]{2}/;
  var isVaildDate = regex.test(dateObj);
  if (isVaildDate) {
    var date = new Date(dateObj);
    var unixTime = date.getTime();
    var utcDate = date.toUTCString();
    return { unix: unixTime, utc: utcDate };
  } else {
    return { error: "Invalid Date" };
  }
};

app.get("/api/timestamp/:date_string", (req, res) => {
  var date = req.params.date_string;
  var jsonData = timeStamp(date);
  res.json(jsonData);
});

// listen to port
app.listen(3000, () => {
  console.log("Server started on PORT:3000");
});
