// module.exports = {
//   client: 'pg',
//   version: '7.2',
//   connection: {
//     connectionString: process.env.DATABASE_URL,
//     ssl: { rejectUnauthorized: false },
//   },
//   migrations: {
//     tableName: 'knex_migrations'
//   }
// };

module.exports = {
  client: 'pg',
  version: '7.2',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'ryry',
    database : 'japanese_verbs_api'
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};