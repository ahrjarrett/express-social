const express = require('express')

const user = require('./models/user')

const router = express.Router()

// sets useful variables for my templates
router.use((req, res, next) => {
  res.locals.currentUser = req.user
  res.locals.errors = req.flash('error')
  res.locals.infos = req.flash('info')
  next()
})

/* queries the users collection,
 * returning the newest users first */
router.get('/', (req, res, next) => {
  User.find()
  .sort({ createdAt: 'descending' })
  .exec((err, users) => {
    if(err) return next(err)
    res.render('index', { users: users })
  })
})

module.exports = router
