/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function(img) {
  let m = img.length;
  let n = img[0].length;
  
  let smoothImg = new Array(m).fill(0).map(() => new Array(n).fill(0));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
        let sum = 0;
        let count = 0;

        for (let x = i - 1; x <= i + 1; x++) {
            for (let y = j - 1; y <= j + 1; y++) {
                if (0 <= x && x < m && 0 <= y && y < n) {
                    sum += img[x][y];
                    count += 1;
                }
            }
        }
        smoothImg[i][j] = Math.floor(sum/count);
    }
  }
  return smoothImg;
};