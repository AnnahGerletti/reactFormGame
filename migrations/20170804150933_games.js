
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('games', (table) => {
    table.increments('id')
    table.string('category')

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('games')
};
