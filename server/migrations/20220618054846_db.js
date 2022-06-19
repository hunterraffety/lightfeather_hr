/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('users', tbl => {
    tbl.increments()
    tbl.string('firstName', 255).notNullable()
    tbl.string('lastName', 255).notNullable()
    tbl.string('email', 255).notNullable()
    tbl.string('phoneNumber', 255).notNullable()
    tbl.string('supervisor', 255).notNullable()
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists('users')
}
