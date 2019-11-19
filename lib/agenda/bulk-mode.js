'use strict';
const debug = require('debug')('agenda:bulkMode');

/**
 * Set the 
 * @name Agenda#bulkMode
 * @function
 * @param {boolean} bulk mode boolean
 * @returns {exports} agenda instance
 */
module.exports = function(b) {
  debug('Agenda.bulkMode(%b)', b);
  this._bulkMode = b;

  if ( this._bulkInsert.length != 0 ) debug('Agenda._bulkInsert is not zero.  Unprocessed queued jobs')
  this._bulkInsert = [];
  return this;
};
