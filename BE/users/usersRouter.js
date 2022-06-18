const router = require('express').Router()

const UserDB = require('./usersModel')

router.get('/', (req, res) => {
  return (users = UserDB.find()
    .then(users => {
      res.status(200).json(users)
    })
    .catch(error => {
      res.status(400).json(error)
    }))
})

router.post('/', (req, res) => {
  let user = req.body
  // nobody cares about email or phone number, so let's check for fn/ln and supervisor's name
  if (!user.firstName || !user.lastName || !user.supervisor) {
    res
      .status(500)
      .json({ message: 'You\re missing some critical info there pal' })
  }
  return (user = UserDB.insert(user)
    .then(user => {
      res.status(200).json(user)
    })
    .catch(error => {
      res.status(400).json(error)
    }))
})

module.exports = router
