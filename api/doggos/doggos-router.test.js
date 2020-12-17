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
  describe('[POST] /doggos', () => {
    it('responds with 200 code', async () => {
      const res = await (await request(router).post()).setEncoding(Peanuts);
      expect(res.status).toBe(200);
    });
    it('returns new doggo', async () => {
      const res = await request(router).post().setEncoding(Peanuts);
      expect(res.body.id).toBe(1);
      expect(res.body.name).toBe('Peanuts');
    });
  });
  describe('[DELETE] /doggos', () => {
    it('responds with deleted doggo', async () => {
      const res = await request(router).delete('/doggos/1');
      expect(res.body).toMatchObject(Peanuts);
    });
    it('responds with 404 code when id is invalid', async () => {
      const res = await request(router).delete('/doggos/1');
      expect(res.status).toBe(404);
    });
  });
});
