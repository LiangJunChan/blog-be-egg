'use strict';

const Service = require('egg').Service;
const fs = require('fs');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);
const marked = require('marked');
const viewPath = `${__dirname}/../view`;

class LeetcodeService extends Service {
  async list(type) {
    const result = [];
    const fileList = fs.readdirSync(`${viewPath}/${type}`);
    fileList.forEach(v => {
      const obj = {};
      obj.name = v.substring(0, v.indexOf('.'));
      obj.id = Number(v.substring(0, v.indexOf('-')));
      obj.des = v.substring(v.indexOf('-') + 1, v.indexOf('.'));
      obj.content = obj.name;
      result.push(obj);
    });
    return result;
  }
  async detail(type, id) {
    const fileList = fs.readdirSync(`${viewPath}/${type}`);
    const file = fileList.find(item => Number(item.substring(0, item.indexOf('-'))) === Number(id));
    const data = await readFile(`${viewPath}/${type}/${file}`);
    const htmlStr = marked(data.toString());
    return htmlStr;
  }
}

module.exports = LeetcodeService;
