const isSafe = (x, y, n, m, mat, visited) => {
    return x >= 0 && x < n && y >= 0 && y < m && mat[x][y] === 1 && visited[x][y] === 0;
};

const solution = (x, y, ans, output, mat, visited, n, m) => {
    // If destination is reached, store the path
    if (x === n - 1 && y === m - 1) {
        ans.push(output);
        return;
    }

    visited[x][y] = 1; // Mark as visited

    // Moving in all 4 possible directions: Down, Left, Right, Up
    if (isSafe(x + 1, y, n, m, mat, visited)) solution(x + 1, y, ans, output + 'D', mat, visited, n, m);
    if (isSafe(x, y - 1, n, m, mat, visited)) solution(x, y - 1, ans, output + 'L', mat, visited, n, m);
    if (isSafe(x, y + 1, n, m, mat, visited)) solution(x, y + 1, ans, output + 'R', mat, visited, n, m);
    if (isSafe(x - 1, y, n, m, mat, visited)) solution(x - 1, y, ans, output + 'U', mat, visited, n, m);

    visited[x][y] = 0; // Backtrack
};

export const findPath = (mat) => {
    let n = mat.length;       // Number of rows
    let m = mat[0].length;    // Number of columns
    let ans = [];
    mat[0][0]=1;
    mat[n-1][m-1]=1;

    // If start or destination is blocked, return empty result
    if (mat[0][0] === 0 || mat[n - 1][m - 1] === 0) {
        console.log("Start or destination is blocked!");
        return [];
    }

    let visited = Array(n).fill().map(() => Array(m).fill(0));
    solution(0, 0, ans, "", mat, visited, n, m); // Start from (0,0)
    mat[0][0]=0;
    mat[n-1][m-1]=0;
    return ans;
};
