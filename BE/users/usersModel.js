const db = require('../database/dbConfig')

module.exports = {
  insert,
  find,
  findBy,
  findById,
}

async function insert(user) {
  let [id] = await db('users').insert(user)
  return findById(id)
}

function find() {
  return db('users').select('firstName', 'id')
}

function findBy(filter) {
  return db('users').where(filter)
}

function findById(id) {
  return db('users')
    .where({ id })
    .first()
    .select('firstName', 'lastName', 'email', 'phoneNumber', 'supervisor', 'id')
}
