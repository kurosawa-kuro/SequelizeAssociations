'use strict';

const { faker } = require('@faker-js/faker');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('groups', [
      {
        groupName: faker.name.jobTitle()
      }, {
        groupName: faker.name.jobTitle()
      }, {
        groupName: faker.name.jobTitle()
      }, {
        groupName: faker.name.jobTitle()
      }, {
        groupName: faker.name.jobTitle()
      }, {
        groupName: faker.name.jobTitle()
      },
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
