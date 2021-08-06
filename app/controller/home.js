'use strict';

const Controller = require('egg').Controller;
const { createHash } = require('crypto');
const request = require('request');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const token = createHash('sha256').update(Math.random().toString()).digest('hex');
    ctx.cookies.set('A-token', token, { maxAge: 1000 * 3600 });
    request(`http://localhost:9900/build?token=${token}`, function(err, response, body) {
      if (!err) {
        console.log(body);
      }
    });
    ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
