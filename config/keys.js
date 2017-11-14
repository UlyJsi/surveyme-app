// keys.js - logic to decide which credentials to return

if (process.env.NODE_ENV == "production") {
    // return keys of production
    module.exports = require("./prod");
} else {
    // return keys of development
    module.exports = require("./dev");
}