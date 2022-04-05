const express = require("express");
const router = express.Router();
const passport = require("passport");

router.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
  require("./createRecipe")
);

router.get(
  "/saved",
  passport.authenticate("jwt", { session: false }),
  require("./getSavedRecipes")
);

router.get("/feed", require("./getFeedRecipes"));

router.post(
  "/like",
  passport.authenticate("jwt", { session: false }),
  require("./likeRecipe")
);

router.delete(
  "/like",
  passport.authenticate("jwt", { session: false }),
  require("./unlikeRecipe")
);

router.get(
  "/recipe",
  passport.authenticate("jwt", { session: false }),
  require("./getRecipe")
);

router.post(
  "/comment",
  passport.authenticate("jwt", { session: false }),
  require("./postComment")
);

module.exports = router;
