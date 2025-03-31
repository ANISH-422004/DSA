var StockSpanner = function () {
    this.stack = []; // Stack to store [price, span]
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
    let span = 1; // Default span for each stock

    while (this.stack.length > 0 && this.stack[this.stack.length - 1][0] <= price) {
        span += this.stack.pop()[1]; // Accumulate spans properly
    }

    // Push the current price along with its computed span
    this.stack.push([price, span]);

    return span;
};
