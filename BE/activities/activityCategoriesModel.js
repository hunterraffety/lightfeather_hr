const db = require('../database/dbConfig')

module.exports = {
  insert,
  find,
  findBy,
  findById,
  update,
  remove,
}

function insert(user) {
  //
}

function find() {
  return db('activity_categories')
}

function findBy(filter) {
  //
}

function findById(id) {
  //
}

function update(id, changes) {
  //
}

function remove(id) {
  //
}
