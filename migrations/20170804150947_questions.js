
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('questions', (table) => {
    table.increments('id')
    table.integer('correct')
    table.integer('game_id')
    table.string('text')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('questions')
};
