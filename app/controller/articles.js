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
    // fs.readFile(`${rootPath}/view/articles/authbuild.md`, 'utf8', (err, markContent) => {
    //   if (err) {
    //     throw err;
    //   } else {
    //     const htmlStr = marked(markContent.toString());
    //     content = htmlStr;
    //   }
    // });
    const ctx = this.ctx;
    await ctx.render('articles/template.tpl', { content: htmlStr });
  }
}

module.exports = ArticlesController;
