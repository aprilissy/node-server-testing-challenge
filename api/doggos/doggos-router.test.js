const request = require('supertest');
const router = require('./doggos-router');
const db = require('../../data/dbConfig');

const Peanuts = { name: 'Peanuts', is_good_doggo: true};

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});
beforeEach(async () => {
  await db('doggos').truncate();
});
afterAll(async () => {
  await db.destroy();
});

describe('endpoints', () => {
  describe('[POST] /doggos', async () => {
    it('responds with 200 code', async () => {

    });
    it('returns new doggo', async () => {

    });
  });
  describe('[DELETE] /doggos', async () => {
    it('responds with deleted doggo', async () => {

    });
    it('responds with 400 code when id is invalid', async () => {

    });
  });
});
