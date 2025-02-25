class RandomizedSet {
    constructor() {
        this.data = []; // Stores the values
        this.indexMap = new Map(); // Stores {val: index} for O(1) lookup
    }

    insert(val) {
        if (this.indexMap.has(val)) return false; // Value already exists
        this.data.push(val); // Add to the array
        this.indexMap.set(val, this.data.length - 1); // Store index in map
        return true;
    }

    remove(val) {
        if (!this.indexMap.has(val)) return false; // Value not found

        let index = this.indexMap.get(val); // Get index of value
        let lastVal = this.data[this.data.length - 1]; // Get last value

        // Swap current value with last value
        this.data[index] = lastVal;
        this.indexMap.set(lastVal, index); // Update last value's index

        // Remove last element
        this.data.pop();
        this.indexMap.delete(val); // Remove from map
        return true;
    }

    getRandom() {
        let randomIndex = Math.floor(Math.random() * this.data.length);
        return this.data[randomIndex]; // Return a random element
    }
}
