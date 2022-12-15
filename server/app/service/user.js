'use strict';

const { Service } = require('egg');

class UserService extends Service {
  async find(uid) {
    const { ctx } = this;
    await ctx.model.User.findByPk(uid);
  }
  async list(params) {
    const { ctx } = this;
    await ctx.model.User.findAndCountAll(params);
  }
}

module.exports = UserService;
