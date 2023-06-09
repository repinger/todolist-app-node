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
  }
};