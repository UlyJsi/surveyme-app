const express = require("express"); // assign && "download"
const mongoose = require("mongoose"); // assign && "download"
const cookieSession = require("cookie-session"); // assign && "download"
const passport = require("passport"); // assign && "download"
const bodyParser = require("body-parser");
const keys = require("./config/keys"); // secure info
require("./models/user"); // "download"
require("./services/passport"); // "download"

mongoose.connect(keys.mongoURI); // setting URI from ./config/keys

const app = express(); //assign && ...

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app); // "... download"
require("./routes/billingRoutes")(app);

if (process.env.NODE_ENV === "production") {
  // Express will serve production assets (main.js, main.css)
  app.use(express.static("client/build"));
  // Express will serve up the index.html if it doesn't recognixe a route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000; // localhost: ...
app.listen(PORT); // app run
