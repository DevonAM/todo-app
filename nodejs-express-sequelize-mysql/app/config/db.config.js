module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "!1$4@2#3",
  DB: "todoapp",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
