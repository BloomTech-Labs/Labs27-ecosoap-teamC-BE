var dotenv = require('dotenv');
dotenv.config({ path: '../.env' });

module.exports = {
  // development: {
  //   client: 'pg',
  //   connection: process.env.DATABASE_URL,
  //   migrations: { directory: '../data/migrations' },
  //   seeds: { directory: '../data/seeds' },
  //   pool: {
  //     min: 2,
  //     max: 10,
  //   },
  // },
  development: {
<<<<<<< HEAD
    client: "pg",
=======
    client: 'pg',
>>>>>>> cafe1710b2dff03857cdd279ebd971881d127eeb
    useNullAsDefault: true,
    connection: {
      host: process.env.POSTGRESS_DEV_HOST,
      port: process.env.POSTGRESS_DEV_PORT,
      user: process.env.POSTGRESS_DEV_USER,
      password: process.env.POSTGRESS_DEV_PASSWORD,
<<<<<<< HEAD
      database: process.env.POSTGRESS_DEV_DATABASE
    },
    migrations: {
      directory: "../data/migrations"
    },
    seeds: {
      directory: "../data/seeds"
    }
=======
      database: process.env.POSTGRESS_DEV_DATABASE,
    },
    migrations: { directory: '../data/migrations' },
    seeds: { directory: '../data/seeds' },
>>>>>>> cafe1710b2dff03857cdd279ebd971881d127eeb
  },

  test: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: { directory: '../data/migrations' },
    seeds: { directory: '../data/seeds' },
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: { directory: '../data/migrations' },
    seeds: { directory: '../data/seeds' },
  },
};
