require('dotenv').config()
// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  production: {
    client: 'pg',
    connection: `postgres://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}`,
    ssl: true,
    migrations: {
      directory: './src/databases/migrations'
    },
    seeds: {
      directory: './src/databases/seeds'
    }
  },
  development: {
    client: 'mysql',
    connection: {
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      user:     process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD
    },
    migrations: {
      directory: './src/databases/migrations'
    },
    seeds: {
      directory: './src/databases/seeds'
    }
  },
};