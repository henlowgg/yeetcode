/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
    let moves = {
        'N': [0, 1],
        'S': [0, -1],
        'E': [-1, 0],
        'W': [1, 0]
    };

    let visited = new Set();
    visited.add("0,0");
    let x = 0;
    let y = 0;

    for (let c of path) {
        let curr = moves[c];
        let dx = curr[0];
        let dy = curr[1];

        x += dx;
        y += dy;

        let hash = `${x},${y}`;

        if (visited.has(hash)) {
            return true;
        }
        visited.add(hash);
    }
    return false;
};

/* 
- Create a map moves to map the characters 'N', 'E', 'S', 'W' to their respective coordinate changes.
- Initialize a set `visited` to store the visited locations. Add the starting location (0,0) to the set.
- Traverse the path character by character:
    - Update the current position based on the move.
    - Create a pair of the current position.
    - Check if hte pair is already in the `visited` set. If yes, return true as the path crosses itself.
    - Otherwise, add the pair to the visited set.
- If the traversal completes without finding any crossing, return `false`.

Complexity:

- Time: O(n) - Where we iterate through the path once.
- Space: O(n) - Where we use a set to store visited locations, in the worst case, all locations are unique.
*/