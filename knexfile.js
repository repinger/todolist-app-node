require('dotenv').config()
// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  production: {
    client: 'pg',
    connection: `postgres://${process.env.DB_USERNAME_PROD}:${process.env.DB_PASSWORD_PROD}@${process.env.DB_HOST_PROD}/${process.env.DB_NAME_PROD}?ssl=true`,
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
      host: process.env.DB_HOST_DEV,
      database: process.env.DB_NAME_DEV,
      user:     process.env.DB_USERNAME_DEV,
      password: process.env.DB_PASSWORD_DEV
    },
    migrations: {
      directory: './src/databases/migrations'
    },
    seeds: {
      directory: './src/databases/seeds'
    }
  },
};