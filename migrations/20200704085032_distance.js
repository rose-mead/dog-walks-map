
exports.up = function(knex) {
    return knex.schema.table('walks', function(table) {
        table.boolean('distance')
    })
  };
  
  exports.down = function(knex) {
      return knex.schema.table('walks', function(table) {
          table.dropColumn('distance')
      })
  }
  