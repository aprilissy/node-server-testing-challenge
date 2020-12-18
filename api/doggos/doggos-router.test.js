const request = require('supertest');
const server = require('../server');
const db = require('../../data/dbConfig');

const Peanuts = { name: 'Peanuts', is_good_doggo: 1};

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
  describe('[POST] /api/doggos', () => {
    it('responds with 201 code', async () => {
      const res = await request(server).post('/api/doggos').send(Peanuts);
      expect(res.status).toBe(201);
    });
    it('returns new doggo', async () => {
      const res = await request(server).post('/api/doggos').send(Peanuts);
      expect(res.body.id).toBe(1);
      expect(res.body.name).toBe('Peanuts');
    });
  });
  describe('[DELETE] /api/doggos', () => {
    it('responds with deleted doggo', async () => {
      await db('doggos').insert(Peanuts);
      const res = await request(server).delete('/api/doggos/1');  
      console.log('res.body',res.body.message.name);
      console.log('Peanuts',Peanuts);
      
      expect(res.body.message.name).toBe('Peanuts');
    }); 
    it('responds with 404 code when id is invalid', async () => {
      const res = await request(server).delete('/api/doggos/1');
      expect(res.status).toBe(404);
    });
  });
});
