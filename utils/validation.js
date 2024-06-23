function isEmail(str) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(str);
}

function isURL(str) {
    try {
        new URL(str);
        return true;
    } catch (_) {
        return false;
    }
}

function isEmpty(value) {
    return value == null || !(Object.keys(value) || value).length;
}

module.exports = {
    isEmail,
    isURL,
    isEmpty
};