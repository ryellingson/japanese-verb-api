module.exports = {
  client: 'pg',
  version: '7.2',
  connection: {
    host : process.env.DATABASE_URL,
    user : 'postgres',
    password : 'postgres',
    database : 'japaneseapi'
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
