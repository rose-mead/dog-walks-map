
exports.up = function(knex) {
  return knex.schema.table('walks', function(table) {
      table.boolean('off_leash')
  })
};

exports.down = function(knex) {
    return knex.schema.table('walks', function(table) {
        table.dropColumn('off_leash')
    })
}
