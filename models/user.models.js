const { faker } = require("@faker-js/faker");

class User {
  constructor() {
    this._id = faker.datatype.uuid(),
    this.nombre = faker.name.firstName(),
    this.apellido =faker.name.lastName(),
    this.email = faker.internet.email(),
    this.password = faker.internet.password(),
    this.telefono = faker.phone.number()
  }
};

const users = [];


module.exports = { User, users };