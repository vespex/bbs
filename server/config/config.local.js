'use strict';

const { development } = require('../database/config.json');

module.exports = appInfo => {
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1670999051748_9807';

  // add your config here
  config.middleware = [];

  // change to your own sequelize configurations
  config.sequelize = development;

  config.security = {
    domainWhiteList: [ 'http://192.168.20.52:10086' ],
  };

  return config;
};
