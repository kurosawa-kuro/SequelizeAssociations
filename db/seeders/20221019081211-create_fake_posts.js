'use strict';

const { faker } = require('@faker-js/faker');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('posts', [
      {
        userId: 1,
        title: faker.name.jobTitle(),
      }, {
        userId: 1,
        title: faker.name.jobTitle(),
      }, {
        userId: 1,
        title: faker.name.jobTitle(),
      }, {
        userId: 2,
        title: faker.name.jobTitle(),
      }, {
        userId: 3,
        title: faker.name.jobTitle(),
      }, {
        userId: 3,
        title: faker.name.jobTitle(),
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
