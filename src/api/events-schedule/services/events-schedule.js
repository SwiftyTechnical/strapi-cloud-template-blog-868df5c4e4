'use strict';

/**
 * events-schedule service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::events-schedule.events-schedule');
