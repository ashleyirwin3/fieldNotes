
exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({
          email: 'test@test.com',
          password: '123456'
        })
      ])
  });
};
