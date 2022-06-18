const router = require('express').Router()

const ActivitiesDB = require('./activitiesModel')

const { authenticate } = require('../auth/authenticate')

router.get('/all', authenticate, (req, res) => {
  const activities = ActivitiesDB.find()
    .then(activities => {
      res.status(200).json(activities)
    })
    .catch(error => {
      res.status(400).json(error)
    })
})

router.post('/add', authenticate, validateActivity, (req, res) => {
  const user_id = req.decoded.subject
  const combined = { user_id, ...journal }
  ActivitiesDB.insert(combined)
    .then(entry => {
      res.status(201).json(entry)
    })
    .catch(error => {
      res.status(500).json(error)
    })
})

router.get('/:id', authenticate, (req, res) => {
  const { id } = req.params
  ActivitiesDB.findById(id)
    .then(activity => {
      if (activity) {
        res.status(200).json(activity)
      } else {
        res.status(404).json({ message: 'No activity with that ID.' })
      }
    })
    .catch(error => {
      res.status(500).json(error)
    })
})

router.get('/mine', authenticate, (req, res) => {
  const id = req.decoded.subject
  ActivitiesDB.findById(id)
    .then(activities => {
      res.status(200).json(activities)
    })
    .catch(error => {
      res.status(500).json(error)
    })
})

router.delete('/:id', authenticate, async (req, res) => {
  const { id } = req.params
  ActivitiesDB.remove(id)
    .then(removed => {
      if (removed > 0) {
        res.status(200).json({ message: 'Removed activity.' })
      } else {
        res.status(404).json({ message: 'Activity not found' })
      }
    })
    .catch(error => {
      res.status(500).json(error)
    })
})

router.put('/:id', authenticate, (req, res) => {
  const { id } = req.params
  const changes = req.body
  ActivitiesDB.update(id, changes)
    .then(updated => {
      if (updated) {
        res.status(200).json({ message: `Updated ${id}.`, updated })
      } else {
        res.status(404).json({ message: 'Activity not found.' })
      }
    })
    .catch(error => {
      res.status(500).json(error)
    })
})

function validateActivity(req, res, next) {
  const { entry } = req.body
  if (Object.keys(req.body).length < 3) {
    res.status(400).json({ message: 'Missing journal data.' })
  } else {
    journal = req.body
    next()
  }
}

module.exports = router
