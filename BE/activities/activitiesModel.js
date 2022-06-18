const db = require('../database/dbConfig')

module.exports = {
  insert,
  find,
  findBy,
  findById,
  update,
  returnActivity,
  remove,
}

async function insert(activity) {
  const [id] = await db('activities').insert(activity)
  return returnActivity(id)
}

function find() {
  return db('activities')
}

function findBy(filter) {
  return db('activities').where(filter)
}

function findById(id) {
  return db('activities')
    .where({ id })
    .first()
    .then(activity => {
      if (activity) {
        const average_rating = Math.round(
          (activity.activity_energy +
            activity.activity_enjoyment +
            activity.activity_engagement) /
            3
        )
        return { ...activity, average_rating }
      } else {
        return null
      }
    })
}

function returnActivity(id) {
  return db('activities').where({ id }).first()
}

function update(id, changes) {
  return db('activities').where({ id }).update(changes)
}

function remove(id) {
  return db('activities').where({ id }).del()
}
