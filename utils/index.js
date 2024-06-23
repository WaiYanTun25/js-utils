const { isNode, isBrowser } = require('./env');
const stringUtils = require('./string');
const arrayUtils = require('./array');
const dateUtils = require('./date');
const httpUtils = require('./http');
const cryptoUtils = require('./crypto');
const logger = require('./logger');
const performanceUtils = require('./performance');
const validationUtils = require('./validation');
const mathUtils = require('./math');

module.exports = {
    // Environment
    isNode,
    isBrowser,

    // String utilities
    ...stringUtils,

    // Array utilities
    ...arrayUtils,

    // Date utilities
    ...dateUtils,

    // HTTP utilities
    ...httpUtils,

    // Crypto utilities
    ...cryptoUtils,

    // Logging utility
    logger,

    // Performance utilities
    ...performanceUtils,

    // Validation utilities
    ...validationUtils,

    // Math utilities
    ...mathUtils
};