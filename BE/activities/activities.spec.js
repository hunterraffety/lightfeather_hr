const db = require('./activitiesModel')
const server = require('../api/server')

const supertest = require('supertest')

describe('db', () => {
  it("is db in development? let's find out~", () => {
    expect(process.env.DB_ENV).toBe('development')
  })
  it('server things', () => {
    return supertest(server)
      .get('/api/users')
      .then(res => {
        expect(res.status).toBe(200)
      })
  })
})
