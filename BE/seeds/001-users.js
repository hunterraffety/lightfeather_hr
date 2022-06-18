exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          firstName: 'test1',
          lastName: 'test2',
          email: 'test@test.com',
          phoneNumber: '1234567890',
          supervisor: 'test10',
        },
        {
          firstName: 'test3',
          lastName: 'test4',
          email: 'test2@test.com',
          phoneNumber: '1234567890',
          supervisor: 'test10',
        },
        {
          firstName: 'test5',
          lastName: 'test6',
          email: 'test3@test.com',
          phoneNumber: '1234567890',
          supervisor: 'test10',
        },
      ])
    })
}
