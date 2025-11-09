const { NotImplementedError } = require('../lib');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const objectDns = {};
  domains.forEach((item) => {
    const arrStr = item.split(".").reverse();
    let dns = "";
    arrStr.forEach((str) => {
      dns += `.${str}`;
      objectDns[dns] ? objectDns[dns]++ : (objectDns[dns] = 1);
    });
  });

  return objectDns;
}

module.exports = {
  getDNSStats
};
