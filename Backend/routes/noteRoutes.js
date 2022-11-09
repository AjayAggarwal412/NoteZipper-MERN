const express = require("express");
const {
  getNotes,
  getNoteByID,
  updateNote,
  deleteNote,
} = require("../controllers/notesController");
const { protect } = require("../middlewares/authMiddleware");
const { createNote } = require("../controllers/notesController");
const router = express.Router();

router.route("/").get(protect, getNotes);
router.route("/create").post(protect, createNote);
router
  .route("/:id")
  .get(getNoteByID)
  .put(protect, updateNote)
  .delete(protect, deleteNote);

module.exports = router;
