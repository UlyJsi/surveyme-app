const passport = require("passport"); // assign && "download"

// google authentication

module.exports = (app) => { // -> in
    app.get( // GET
        "/auth/google", // url
        passport.authenticate("google", { 
            scope: ["profile", "email"] // info to "select"
        })
    );

    app.get("/auth/google/callback", passport.authenticate("google")); // <- out

// facebook authentication
    
    app.get(
        "/surveyme-dev/auth/facebook",
        passport.authenticate("facebook", {
            scope: ["id", "profile"]
        })
    );
    
    app.get("/surveyme-dev/auth/facebook/callback", passport.authenticate("facebook")); // <- out

    app.get("/api/logout", (req, res) => { // display in browser -> test
        req.logout(); 
        res.send(req.user);// empty window
    });

    app.get("/api/current_user", (req, res) => { // display in browser -> test
        res.send(req.user);
    });
};    
