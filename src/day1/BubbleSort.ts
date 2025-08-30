export default function bubble_sort(arr: number[]): void {
    // we set length into length-1 - i
    // because every time i+1 the last element will be sorted
    // so we want to remove them every time
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let swap = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = swap;
            }
        }
    }
}
