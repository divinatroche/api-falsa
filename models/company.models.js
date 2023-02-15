const { faker } = require("@faker-js/faker");

class Company {
  constructor() {
    this._id = faker.database.mongodbObjectId();
    this.name = faker.company.name();
    this.address =
      faker.address.streetAddress() +
      ", " +
      faker.address.cityName() +
      ", " +
      faker.address.state() +
      ", " +
      faker.address.zipCode() +
      ", " +
      faker.address.country();
  }
};

const companies = [];

module.exports = { Company, companies };
