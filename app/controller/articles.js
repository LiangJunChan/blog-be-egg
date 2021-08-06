'use strict';

const Controller = require('egg').Controller;
const fs = require('fs');
const marked = require('marked');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);
const rootPath = `${__dirname}/..`;

class ArticlesController extends Controller {
  async list() {
    const data = await readFile(`${rootPath}/view/articles/authbuild.md`);
    const htmlStr = marked(data.toString());
    const ctx = this.ctx;
    await ctx.render('template/template.tpl', { content: htmlStr });
  }
  async detail() {
    const { ctx } = this;
    const { name } = ctx.params;
    const htmlStr = await ctx.service.articles.detail(name);
    await ctx.render('template/template.tpl', { content: htmlStr });
  }
}

module.exports = ArticlesController;
