module.exports = function solveEquation(equation) {
    let strOfEquation = equation.replace(/ /g, "");
    let arrOfEquation = strOfEquation.split("*x");
    arrOfEquation[1] = arrOfEquation[1].substring(2);

    for (let i = 0; i < arrOfEquation.length; i++) {
        arrOfEquation[i] = Number(arrOfEquation[i]);
    }

    let discriminant = Math.pow(arrOfEquation[1],2) - 4 * arrOfEquation[0] * arrOfEquation[2];

    let root1 = Math.round((-(arrOfEquation[1]) + Math.sqrt(discriminant)) / (2 * arrOfEquation[0]));
    let root2 = Math.round((-(arrOfEquation[1]) - Math.sqrt(discriminant)) / (2 * arrOfEquation[0]));

    if (root1 < root2) {
        return [root1, root2];
    } else {
        return [root2, root1];
    }

}
