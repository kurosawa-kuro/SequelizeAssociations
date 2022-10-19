'use strict';

const { faker } = require('@faker-js/faker');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('userDetails', [
      {
        userId: 1,
        mobileNum: faker.phone.number(),
        address: faker.address.street()
      }, {
        userId: 2,
        mobileNum: faker.phone.number(),
        address: faker.address.street()
      }, {
        userId: 3,
        mobileNum: faker.phone.number(),
        address: faker.address.street()
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
