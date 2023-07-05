'use strict';

/**
 * sold-product service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sold-product.sold-product');
