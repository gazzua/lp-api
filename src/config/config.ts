let config = {
  auth: {},
  db: {
    development: {},
    production: {},
  },
};

const dbConfigBase = {
    database: 'marmoym_db_1',
    host: "marmoym-db-instance-1.czyrishcmerw.ap-northeast-2.rds.amazonaws.com",
    password: "marmoym1234",
    port: 5432,
    type: "postgres",
    username: "marmoym",
  };
  
export default {
  app: {
    port: 4001,
  },
  cors: {
    whitelist: [
      'http://localhost',
      'http://127.0.0.1',
    ],
  },
  db: {
    db1: {
      development: {
        ...dbConfigBase,
      },
      production: {
        ...dbConfigBase,
      },
      ...(config.db['db1'] ? config.db['db1'] : {}),
    },
  },
};
