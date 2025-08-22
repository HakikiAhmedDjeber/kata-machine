export default function bs_list(haystack: number[], needle: number): boolean {
    let low: number = 0;
    let high: number = haystack.length;
    do {
        const m = Math.floor(low + (high - low) / 2);
        const mVal = haystack[m];
        if (mVal === needle) return true;
        else if (needle > mVal) low = m + 1;
        else high = m;
    } while (low < high);
    return false;
}
