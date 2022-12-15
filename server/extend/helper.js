'use strict';

const crypto = require('crypto');
const uuidv4 = require('uuid/v4');

module.exports = {
  toInt(str) {
    if (typeof str === 'number') return str;
    if (!str) return str;
    return parseInt(str, 10) || 0;
  },
  md5(str) {
    const hash = crypto.createHash('md5');
    hash.update(str);
    return hash.digest('hex');
  },
  uuid() {
    return uuidv4();
  },
  formatJSON(item, key) {
    item.setDataValue(key, JSON.parse(item.getDataValue(key)));
    return item;
  },
};
