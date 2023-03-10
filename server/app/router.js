'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  console.log(controller.user);
  router.get('/', controller.home.index);
  router.resources('/api/user', controller.user);
};
