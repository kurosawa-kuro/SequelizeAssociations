'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users_groups', [
      {
        userId: 1,
        groupId: 1
      }, {
        userId: 1,
        groupId: 2
      }, {
        userId: 1,
        groupId: 3
      }, {
        userId: 2,
        groupId: 1
      }, {
        userId: 2,
        groupId: 1
      }, {
        userId: 3,
        groupId: 1
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
