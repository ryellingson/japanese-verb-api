module.exports = {
  client: 'pg',
  version: '7.2',
  connection: {
    host : "127.0.0.1",
    user : 'postgres',
    password : 'postgres',
    database : 'japaneseapi'
  },
  migrations: {
    tableName: 'knex_migrations'
  },
  production: {
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    }
  }
};
