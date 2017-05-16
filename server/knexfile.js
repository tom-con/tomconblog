module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: process.env.DATABASE_URL || 'tomconblog',
    }
  },
  "production": {
    "client": "pg",
    "connection": process.env.DATABASE_URL
  }
};
