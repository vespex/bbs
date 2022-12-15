'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    const { INTEGER, DATE, STRING, UUID } = Sequelize;
    await queryInterface.createTable('users', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      uid: UUID,
      name: STRING(30),
      nickname: STRING(30),
      avator: STRING(100),
      username: STRING(30),
      password: STRING(36),
      mobile: STRING(36),
      type: INTEGER,
      age: INTEGER,
      sex: INTEGER, // 0: 女 1: 男 2: 未知
      created_at: DATE,
      updated_at: DATE,
    });
  },

  down: async queryInterface => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    await queryInterface.dropTable('users');
  },
};
