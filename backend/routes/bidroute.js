const express = require('express')
const router = express.Router()


const upload = require('../middleware/upload')
const authenticate = require('../middleware/authenticate')
const BidController = require('../controllers/BidController')

//router.get('/', authenticate, EmployeeController.index)
//router.post('/show', EmployeeController.show)
////router.post('/store',upload.single('avatar'), EmployeeController.store)
//router.post('/update',EmployeeController.update)
//router.post('/delete',EmployeeController.destroy)

router.post('/store', BidController.store)
router.post('/saveuserbid', BidController.saveUserBid)
router.get('/posts', BidController.fetchPosts)
router.get('/posts/post/:id', BidController.fetchPost)
router.get('/bids/bidprice/:id', BidController.bidprice)
router.get('/bids/allbids', BidController.allbids)
router.delete('/deletepost/:id', BidController.deletepost)
router.put('/updatepost/:id', BidController.updatepost)
router.put('/update/:id', BidController.update)
module.exports = router