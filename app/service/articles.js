'use strict';

const Service = require('egg').Service;
const fs = require('fs');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);
const marked = require('marked');
const viewPath = `${__dirname}/../view`;

class ArticlesService extends Service {
  async detail(name) {
    const fileList = fs.readdirSync(`${viewPath}/articles`);
    const file = fileList.find(item => item.substring(0, item.indexOf('.')) === name);
    const data = await readFile(`${viewPath}/articles/${file}`);
    const htmlStr = marked(data.toString());
    return htmlStr;
  }
}

module.exports = ArticlesService;
