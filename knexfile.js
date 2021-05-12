module.exports = {
  client: 'pg',
  version: '7.2',
  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
