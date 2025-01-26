function largest_container(heights: number[]): number {
    let max_water = 0
    let left = 0, right = heights.length - 1
    while (left < right) {
        // Calculate the water contained between the current pair of 
        // lines.
        let water = Math.min(heights[left], heights[right]) * (right - left)
        max_water = Math.max(max_water, water)
        // Move the pointers inward, always moving the pointer at the 
        // shorter line. If both lines have the same height, move both 
        // pointers inward.
        if (heights[left] < heights[right]) 
            left++
        else if (heights[left] > heights[right])
            right--     
        else 
            left++, right--
    }
    return max_water
}

module.exports = { largest_container }
