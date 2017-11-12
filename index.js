const express = require("express"); // assign && "download"
const mongoose = require("mongoose"); // assign && "download"
const cookieSession = require("cookie-session"); // assign && "download"
const passport = require("passport"); // assign && "download"
const keys = require("./config/keys"); // secure info
require("./models/user"); // "download"
require("./services/passport"); // "download"

mongoose.connect(keys.mongoURI); // setting URI from ./config/keys

const app = express(); //assign && ...

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app); // "... download"

const PORT = process.env.PORT || 5000; // localhost: ...
app.listen(PORT); // app run
