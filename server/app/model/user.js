'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE, UUID } = app.Sequelize;

  const User = app.model.define('user', {
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
  }, { createdAt: 'created_at', updatedAt: 'updated_at' });

  return User;
};
