const env = process.env;

const config = {
  db: { /* do not put password or any sensitive info here, done only for demo */
    host: env.DB_HOST || 'db-host',
    port: env.DB_PORT || '5432',
    user: env.DB_USER || 'db-user',
    password: env.DB_PASSWORD || 'db-password',
    database: env.DB_NAME || 'db-name',
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};

module.exports = config;
