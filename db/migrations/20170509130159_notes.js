
exports.up = (knex, Promise) => {
  return knex.schema.createTable('notes', (table) => {
    table.increments();
    table.string('siteLocality').notNullable();
    table.integer('fieldNo').notNullable();
    table.string('date').notNullable();
    table.string('wp').notNullable();
    table.string('startTime').notNullable();
    table.string('stopTime').notNullable();
    table.string('surveyors').notNullable();
    table.string('coordinates').notNullable();
    table.string('underwaterVis').notNullable();
    table.string('widthMin').notNullable();
    table.string('widthMax').notNullable();
    table.string('widthAvg').notNullable();
    table.string('depthMin')
    table.string('depthMax').notNullable();
    table.string('depthAvg').notNullable();
    table.string('channelRipStr').notNullable();
    table.string('sBankErosion').notNullable();
    table.string('notableFeats');
    table.string('weather').notNullable();
    table.string('sand');
    table.string('gravel');
    table.string('cobble');
    table.string('boulder');
    table.string('bedrock');
    table.string('detritus');
    table.string('notes');
  })
  .createTable('users', (table) => {
    table.increments();
    table.string('email').notNullable();
    table.string('password').notNullable();
  })

};

exports.down = (knex, Promise) =>
  knex.schema
  .dropTable('notes')
  .dropTable('users');
