const { isNode } = require('./env');

function log(message, level = 'info') {
    if (isNode()) {
        console.log(`[${level.toUpperCase()}] ${message}`);
    } else {
        console[level](message);
    }
}

module.exports = {
    log
};