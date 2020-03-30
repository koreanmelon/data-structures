import util from "util";

export class HashSet {

    private static maxLoadFactor = 5;

    private itemCount = 0;
    private buckets = new Array(4);
    private get loadFactor () { return this.itemCount / this.buckets.length };

    /**
     * Returns a hash for a given OBJ.
     * @param obj 
     */
    private hashCode(obj: Object) {
        return obj.toString().length;
    }

    /**
     * Resizes this hashset.
     */
    private resize() {
        let resizedBuckets = new Array(this.buckets.length * 2);
        for (let bucket of this.buckets) {
            if (bucket) {
                for (let item of bucket) {
                    if (resizedBuckets[this.hashCode(item)]) {
                        resizedBuckets[this.hashCode(item)].push(item);
                    } else {
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
    push(item: any) {
        this.itemCount += 1;
        if (this.loadFactor >= HashSet.maxLoadFactor || this.hashCode(item) >= this.buckets.length) { this.resize() };
        if (this.buckets[this.hashCode(item)]) {
            this.buckets[this.hashCode(item)].push(item);
        } else {
            this.buckets[this.hashCode(item)] = [item];
        }
    }

    /**
     * Checks if ITEM is included in this hashset.
     * @param item 
     */
    includes(item: any) {
        return this.buckets[this.hashCode(item)] ? this.buckets[this.hashCode(item)].includes(item) : false;
    }

}
