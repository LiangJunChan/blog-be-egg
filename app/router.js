'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/news', controller.news.list);
  router.get('/articles', controller.articles.list);
  router.get('/articles/:name', controller.articles.detail);
  // router.get('/leetcode/:type/:id', controller.leetcode.list);
  router.get('/leetcode/list', controller.leetcode.list);
  router.get('/leetcode/detail', controller.leetcode.detail);
};
