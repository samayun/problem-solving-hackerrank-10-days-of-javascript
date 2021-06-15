function getSecondLargest(nums) {
    // Complete the function
    let sortedArray = nums.sort((a, b) => a - b);
    let unique_sorted_array = sortedArray.filter((element, index, array) => index === array.indexOf(element));
    return unique_sorted_array[unique_sorted_array.length - 2];
}