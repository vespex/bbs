'use strict';

const { Service } = require('egg');

class TopicService extends Service {
  async find(uid) {
    const { ctx } = this;
    await ctx.model.Topic.findByPk(uid);
  }
  async list(params) {
    const { ctx } = this;
    await ctx.model.Topic.findAndCountAll(params);
  }
  async create(params) {
    const { ctx } = this;
    await ctx.model.Topic.create(params);
  }
  async update(uid, params) {
    const { ctx } = this;
    const data = await ctx.model.Topic.findByPk(uid);
    if (!data) {
      return null;
    }
    await data.update(params);
  }
}

module.exports = TopicService;
