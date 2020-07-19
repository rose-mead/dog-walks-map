
exports.up = function(knex) {
    return knex.schema.createTable('walks', function(table) {
        table.increments('id').primary()
        table.string('name')
        table.string('location')
        table.string('coordinates')
        table.string('time')
        table.string('difficulty')
        table.string('description', 1000)
        table.string('distance')
        table.boolean('off_leash')
      })
};

exports.down = function(knex) {
    return knex.schema.dropTable('walks')
  
};

