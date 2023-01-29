const express = require('express')
const { readContacts, addcontact, deleteContact, updateContact, readUser } = require('../Controllers/Contact')

const contactRouter= express.Router()

contactRouter.get('/readcontacts',readContacts)
contactRouter.post('/addContact', addcontact)
contactRouter.delete('/deleteContact/:id',deleteContact)
contactRouter.put('/updateContact/:id', updateContact)
contactRouter.get('/readContact/:id',readUser)



module.exports = contactRouter