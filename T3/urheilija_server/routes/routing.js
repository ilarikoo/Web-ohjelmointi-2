const express = require("express");

const urheilijaControllers = require("../controllers/urheilijaControllers");

const router = express.Router();

router
  .route("/")
  .get(urheilijaControllers.getAll)
  .post(urheilijaControllers.createNew);

router
  .route("/:id")
  .get(urheilijaControllers.getById)
  .put(urheilijaControllers.updateById)
  .delete(urheilijaControllers.deleteById);

module.exports = router;
