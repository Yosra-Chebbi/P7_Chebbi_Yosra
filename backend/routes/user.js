const express = require("express");
const router = express.Router();

const userCtrl = require("../controllers/user");
const auth = require("../middleware/auth");

router.post("/signup", userCtrl.signup);
router.post("/login", userCtrl.login);
router.get("/user", auth, userCtrl.getAllUsers);
router.get("/user/:id", auth, userCtrl.getOneUser);
router.put("/user/:id", auth, userCtrl.modifyUser);
router.delete("/user/:id", auth, userCtrl.deleteUser);

module.exports = router;
