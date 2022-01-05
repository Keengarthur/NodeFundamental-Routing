const express = require('express')
const {getTask,postTask,getTaskWithId,updateTask,deleteTask} = require('./../controllers/controller')
const router = express.Router()

router.route('/').get(getTask).post(postTask)
router.route('/:id').get(getTaskWithId).patch(updateTask).delete(deleteTask)

module.exports = router