function measureExecutionTime(fn) {
    const start = process.hrtime();
    fn();
    const end = process.hrtime(start);
    const executionTime = (end[0] * 1e9 + end[1]) / 1e6; // Convert to milliseconds
    return executionTime;
}

module.exports = {
    measureExecutionTime
};