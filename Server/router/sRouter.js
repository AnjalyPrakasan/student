const express = require('express')
const router = express.Router()

//import ctrl page
const { addStudent, fetchData, deleteData, editData, updateData } = require('../control/sCtrl')

router.route('/adddata').post(addStudent)
router.route('/fetchdata').get(fetchData)
router.route('/deletedata/:id').delete(deleteData)
router.route('/editdata/:id').get(editData)
router.route('/updatedata').post(updateData)


module.exports = router