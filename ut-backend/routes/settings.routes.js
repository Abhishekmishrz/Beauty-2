const express = require("express");
const router = express.Router();
const {
  getSettings,
  updateSettings,
  getPublicSettings,
} = require("../controller/settings.controller");
const { isAuth, isAdmin } = require("../config/auth");

// Public routes
router.get("/public", getPublicSettings);

// Admin routes
router.get("/", isAuth, isAdmin, getSettings);
router.put("/", isAuth, isAdmin, updateSettings);

module.exports = router;