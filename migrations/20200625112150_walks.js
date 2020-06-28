
exports.up = function(knex) {
    return knex.schema.createTable('walks', function(table) {
        table.increments('id').primary()
        table.string('name')
        table.string('location')
        table.string('co-ordinates')
        table.string('time')
        table.string('difficulty')
        table.string('description')
      })
};

exports.down = function(knex) {
    return knex.schema.dropTable('walks')
  
};

