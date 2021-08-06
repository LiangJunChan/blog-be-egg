'use strict';

const Controller = require('egg').Controller;

class LeetcodeController extends Controller {
  async list() {
    const { ctx } = this;
    const { type } = ctx.query;
    const list = await ctx.service.leetcode.list(type);
    ctx.body = list;
  }
  async detail() {
    const { ctx } = this;
    const { type, id } = ctx.query;
    const htmlStr = await ctx.service.leetcode.detail(type, id);
    await ctx.render('template/template.tpl', { content: htmlStr });
  }
}

module.exports = LeetcodeController;
