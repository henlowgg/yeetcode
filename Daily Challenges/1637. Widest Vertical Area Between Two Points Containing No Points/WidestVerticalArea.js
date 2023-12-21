/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
    points.sort((a, b) => a[0] - b[0]); // Sort by x-coordinates

    let maxWidth = 0;
    for (let i = 1; i < points.length; i++) {
        maxWidth = Math.max(maxWidth, points[i][0] - points[i - 1][0]);
    }

    return maxWidth;
};