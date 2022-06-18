const server = require('./server')
const supertest = require('supertest')

describe('server', () => {
  it('should return Status Code 200', () => {
    return supertest(server).get('/').expect(200)
  })
  it('server things', () => {
    return supertest(server)
      .get('/api/users')
      .then(res => {
        expect(res.status).toBe(200)
      })
  })
})
it('JSON', () => {
  return supertest(server)
    .get('/api/activities')
    .then(res => {
      expect(res.status).toBe(401)
    })
})
