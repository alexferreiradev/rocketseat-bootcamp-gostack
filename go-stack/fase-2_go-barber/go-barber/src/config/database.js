module.exports = {
  development: {
    dialect: 'postgres',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    port: process.env.DB_PORT || 5432,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    protocol: process.env.DB_PROTOCOL || 'postgres',
    define: {
        timestamp: true,
        underscored: true,
        underscoredAll: true,
    }
  },
  production: {
    dialect: 'postgres',
    protocol: 'postgres',
    use_env_variable: 'DATABASE_URL',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    }
  }
};