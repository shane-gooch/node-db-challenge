const db = require("../data/db-config.js");

module.exports = {
  get,
  getById
};

function get() {
  return db("projects");
}

function getById(id) {
  return db("projeccts").where({ id });
}
