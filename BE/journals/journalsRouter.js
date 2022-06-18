const router = require('express').Router()

const JournalsDB = require('./journalsModel')

const { authenticate } = require('../auth/authenticate')

router.get('/all', authenticate, (req, res) => {
  JournalsDB.find()
    .then(entries => {
      res.status(200).json(entries)
    })
    .catch(error => {
      res.status(500).json({ error: 'Uh oh, you done messed up A-A-ron!' })
    })
})

router.get('/mine', authenticate, (req, res) => {
  const id = req.decoded.subject
  JournalsDB.findById(id)
    .then(entries => {
      res.status(200).json(entries)
    })
    .catch(error => {
      res.status(500).json(error)
    })
})

router.get('/:id', authenticate, (req, res) => {
  const { id } = req.params
  JournalsDB.returnEntry(id)
    .then(entry => {
      if (entry) {
        res.status(200).json(entry)
      } else {
        res.status(404).json({ message: 'Entry not found' })
      }
    })
    .catch(error => {
      res.status(400).json({ message: 'not ok', error })
    })
})

router.post('/add', authenticate, validateJournal, (req, res) => {
  const user_id = req.decoded.subject
  const combined = { user_id, ...journal }
  JournalsDB.insert(combined)
    .then(entry => {
      res.status(201).json(entry)
    })
    .catch(error => {
      res.status(500).json(error)
    })
})

router.delete('/:id', authenticate, async (req, res) => {
  const { id } = req.params
  JournalsDB.remove(id)
    .then(removed => {
      if (removed > 0) {
        res.status(200).json({ message: 'Removed journal entry.' })
      } else {
        res.status(404).json({ message: 'Journal entry not found' })
      }
    })
    .catch(error => {
      res.status(500).json(error)
    })
})

router.put('/:id', authenticate, (req, res) => {
  const { id } = req.params
  const changes = req.body
  JournalsDB.update(id, changes)
    .then(updated => {
      if (updated) {
        res.status(200).json({ message: `Updated ${id}.`, updated })
      } else {
        res.status(404).json({ message: 'Journal not found.' })
      }
    })
    .catch(error => {
      res.status(500).json(error)
    })
})

function validateJournal(req, res, next) {
  const { entry } = req.body
  if (Object.keys(req.body).length < 4) {
    res.status(400).json({ message: 'Missing journal data.' })
  } else {
    journal = req.body
    next()
  }
}

module.exports = router
