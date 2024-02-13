const asyncHandler = require("express-async-handler")

const Contact = require("../models/contactModels");

//@desc Get all contacts
//@route GET /api/contacts
//@access private
const getContacts = asyncHandler(async (request, response) => {
    const contact = await Contact.find({ user_id: request.user_id });
    response.status(200).json({ contact });
});

//@desc Create contact
//@route POST /api/contacts
//@access private
const createContacts = asyncHandler(async (request, response) => {
    const { name, email, phone } = request.body;
    if (!name || !email || !phone) {
        response.status(400);
        throw new Error("All fields are mandatory!");
    }
    const contact = await Contact.create({
        name, email, phone, user_id: request.user.id
    });
    response.status(201).json({
        message: "create contacts"
    })
});

//@desc Get all contacts
//@route GET /api/contacts
// @access private
const getContactsById = asyncHandler(async (request, response) => {
    const contact = await Contact.findById(request.params.id);
    if (!contact) {
        response.status(404);
        throw new Error("Contact not found!");
    }
    response.status(200).json(contact)
});

//@desc update contact
//@route PUT /api/contacts
//@access private
const updateContact = asyncHandler(async (request, response) => {
    const { name, email, phone } = request.body;
    if (!name && !email && !phone) {
        response.status(400);
        throw new Error("Add field to be updated");
    }
    const contact = await Contact.findById(request.params.id);
    if (!contact) {
        response.status(404);
        throw new Error("Contact not found!");
    }


    if (contact.user_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error("User don't have permission to update other user contacts");
    }

    const upadateContact = await Contact.findByIdAndUpdate(
        request.params.id,
        request.body,
        {
            new: true
        }
    );
    response.status(200).json(upadateContact);
});


//@desc delete contacts
//@route DELETE /api/contacts
//@access private
const deleteContact = asyncHandler(async (request, response) => {
    const contact = await Contact.findById(request.params.id);
    if (!contact) {
        response.status(404);
        throw new Error("Contact not found!");
    }

    if (contact.user_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error("User don't have permission to update other user contacts");
    }
    await Contact.deleteOne({ _id: request.params.id });
    await Contact.rem
    console.log("sddvc")
    response.status(200).json(contact)
});

module.exports = {
    getContacts,
    getContactsById,
    createContacts,
    updateContact,
    deleteContact
};