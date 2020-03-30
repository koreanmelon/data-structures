export declare class HashSet {
    private static maxLoadFactor;
    private itemCount;
    private buckets;
    private get loadFactor();
    /**
     * Returns a hash for a given OBJ.
     * @param obj
     */
    private hashCode;
    /**
     * Resizes this hashset.
     */
    private resize;
    /**
     * Pushes ITEM into this hashset.
     * @param item
     */
    push(item: any): void;
    /**
     * Checks if ITEM is included in this hashset.
     * @param item
     */
    includes(item: any): any;
}
