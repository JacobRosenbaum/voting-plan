const router = require("express").Router();
const emailMailRoutes = require("./emailMail.js");
const mailRoutes = require("./mailUser.js");
const mailFriend1Routes = require("./mailFriend1.js");
const mailFriend2Routes = require("./mailFriend2.js");
const earlyFriend1Routes = require("./earlyFriend1.js");
const earlyFriend2Routes = require("./earlyFriend2.js");
const electionFriend1Routes = require("./electionFriend1.js");
const electionFriend2Routes = require("./electionFriend2.js");
const earlyRoutes = require ("./earlyUser.js");
const emailEarlyRoutes = require ("./emailEarly");
const electionRoutes = require ("./electionUser");
const emailElectionRoutes = require ("./emailElection");

// Vote by mail routes
router.use("/email_mail", emailMailRoutes);
router.use("/mail_user", mailRoutes);

// Mail Friends Routes
router.use("/mail_friend1", mailFriend1Routes);
router.use("/mail_friend2", mailFriend2Routes);

// Vote in Person Early Routes
router.use("/early_user", earlyRoutes);
router.use("/email_early", emailEarlyRoutes);

// Early Friends Routes
router.use("/early_friend1", earlyFriend1Routes);
router.use("/early_friend2", earlyFriend2Routes);

// Vote on Election day Routes
router.use("/election_user", electionRoutes);
router.use("/email_election", emailElectionRoutes);

// Election Friends Routes
router.use("/election_friend1", electionFriend1Routes);
router.use("/election_friend2", electionFriend2Routes);

module.exports = router;