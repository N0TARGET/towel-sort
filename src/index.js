module.exports = function towelSort (matrix) {
    if (matrix === null || matrix === undefined || matrix.length === 0) return [];
    let res = [];
    for (let i = 0; i < matrix.length; i++) {
        let currentArray = matrix[i];
        if (i % 2 !== 0) currentArray = currentArray.reverse();
        res = res.concat(currentArray);
    }
    return res;
};
