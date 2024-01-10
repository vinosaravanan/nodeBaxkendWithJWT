const express = require('express');
const router = express.Router();
const {
       PostContact,
       GetAllContact,
       getContactByid,
       updateContact,
       deleteContact
     } = require('./contactConroll');
const validateToken = require('./middleware/validatejwt');


router.use(validateToken);     
router.route('/').get(GetAllContact).post(PostContact);
router.route('/:id').get(getContactByid).put(updateContact).delete(deleteContact);


module.exports = router;