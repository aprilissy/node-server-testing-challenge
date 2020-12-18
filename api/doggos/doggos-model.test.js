const Doggos = require('./doggos-model');
const db = require('../../data/dbConfig');

const Peanuts = { name: 'Peanuts', is_good_doggo: true };

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

describe('Doggos Model', () => {
  describe('Model export: remove', () => {
    it('returns the removed doggo', async () => {

    });
    it('responds with an error message when doggo id is invalid', async () => {

    });
  });
  describe('Model export: create', () => {
    it('returns the newly created doggo', async () => {

    });
    it('responds with an error message when new doggo is not supplied', async () => {

    });
  });
});
