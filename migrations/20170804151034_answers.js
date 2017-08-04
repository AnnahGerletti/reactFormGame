
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('options', (table) => {
    table.increments('id')
    table.string('text')
    table.integer('question_id')
  })
};

exports.down = function(knex, Promise) {

};
