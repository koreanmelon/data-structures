"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HashSet {
    constructor() {
        this.itemCount = 0;
        this.buckets = new Array(4);
    }
    get loadFactor() { return this.itemCount / this.buckets.length; }
    ;
    /**
     * Returns a hash for a given OBJ.
     * @param obj
     */
    hashCode(obj) {
        return obj.toString().length;
    }
    /**
     * Resizes this hashset.
     */
    resize() {
        let resizedBuckets = new Array(this.buckets.length * 2);
        for (let bucket of this.buckets) {
            if (bucket) {
                for (let item of bucket) {
                    if (resizedBuckets[this.hashCode(item)]) {
                        resizedBuckets[this.hashCode(item)].push(item);
                    }
                    else {
                        resizedBuckets[this.hashCode(item)] = [item];
                    }
                }
            }
        }
        this.buckets = resizedBuckets;
    }
    /**
     * Pushes ITEM into this hashset.
     * @param item
     */
    push(item) {
        this.itemCount += 1;
        if (this.loadFactor >= HashSet.maxLoadFactor || this.hashCode(item) >= this.buckets.length) {
            this.resize();
        }
        ;
        if (this.buckets[this.hashCode(item)]) {
            this.buckets[this.hashCode(item)].push(item);
        }
        else {
            this.buckets[this.hashCode(item)] = [item];
        }
    }
    /**
     * Checks if ITEM is included in this hashset.
     * @param item
     */
    includes(item) {
        return this.buckets[this.hashCode(item)] ? this.buckets[this.hashCode(item)].includes(item) : false;
    }
}
exports.HashSet = HashSet;
HashSet.maxLoadFactor = 5;
