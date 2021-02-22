// You should implement your task here.

module.exports = function towelSort (matrix) {
let result = [];
let matrixReverse = [];
let resultMatrix = [];
if (matrix === undefined)
{
    return[];
}
else if (matrix.length === 0)
{
    for (let i =0; i < matrix.length; i++)
    {
    result.push(i);

    }
    return result;
}
else if (matrix.length === 2)
{
matrixReverse = matrix[1].reverse();
resultMatrix = matrix[0].concat(matrixReverse);
return resultMatrix;
}
else if (matrix.length === 3)
{
    matrixReverse = matrix[1].reverse();
    
    resultMatrix = matrix[0].concat(matrixReverse).concat(matrix[2]);
    return resultMatrix;
}
else if (matrix.length === 4)
{
matrixReverse = matrix[1].reverse();
matrixReverse2 = matrix[3].reverse();
resultMatrix = matrix[0].concat(matrixReverse).concat(matrix[2]).concat(matrixReverse2);
return resultMatrix;

}
}

