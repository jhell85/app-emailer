const passport = require("passport");

module.exports = (app) => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  app.get("/auth/google/callback", passport.authenticate("google"));

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.send(req.user);
  });

  app.get("/api/current_user", (req, res) => {
    console.log("blah blah /api/current_user", req.user);
    if (!req.user) {
      console.log("no user present");
      res.send({ user: null });
    }
    res.send(req.user);
  });
};
