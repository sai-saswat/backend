const express = require("express");
const router = express.Router();
const {
    getContacts,
    getContactsById,
    createContacts,
    updateContact,
    deleteContact } = require("../controllers/contactController");
const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken);
router.route("/").get(getContacts).post(createContacts);

router.route("/:id").get(getContactsById).put(updateContact).delete(deleteContact);


module.exports = router;