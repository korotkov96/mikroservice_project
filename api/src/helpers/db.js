// По манаулу устанвоки БД ( прочиать и понять)
const mongoose = require("mongoose");
const { db } = require("../configuration");

module.exports.connectDb = () => {
  mongoose.connect(db, { useNewUrlParser: true });
  return mongoose.connection;
};
