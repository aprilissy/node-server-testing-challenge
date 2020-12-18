const db = require('../../data/dbConfig');

module.exports = {
  remove,
  create,
  getByID
};

function remove(id) {
  return db('doggos').where({ id }).del();
}

function create(doggo) {
  return db('doggos').insert(doggo)
    .then(([id]) => {
      return db('doggos').where({ id }).first();
    });
}

function getByID(id) {
  return db('doggos').where({ id }).first();
}
