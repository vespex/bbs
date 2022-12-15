'use strict';

const { Controller } = require('egg');

class UserController extends Controller {
  async index() {
    const { ctx } = this;
    const list = await ctx.service.user.list();
    ctx.body = list || [];
  }
  async show() {
    const { ctx } = this;
    ctx.body = await ctx.service.user.find(ctx.params.id);
  }
  async create() {
    const { ctx } = this;
    const { name, nickname, avator, mobile, username, password, age, sex, type } = ctx.request.body;
    const uid = ctx.helper.uuid();

    try {
      await ctx.service.user.create({ name, nickname, avator, mobile, username, password: ctx.helper.md5(password), age, sex, type, uid });
    } catch (err) {
      ctx.code = 400;
      ctx.body = err.message;
    }
  }
}
module.exports = UserController;
