
exports.seed = function(knex) {
  return knex('doggos').truncate()
    .then(function () {
      return knex('doggos').insert([
        {name: 'Amaya', is_good_doggo: true},
        {name: 'Gio', is_good_doggo: true},
        {name: 'River', is_good_doggo: true},
        {name: 'Shiro', is_good_doggo: true},
        {name: 'Monkey', is_good_doggo: true},
        {name: 'Paco', is_good_doggo: true}
      ]);
    });
};
