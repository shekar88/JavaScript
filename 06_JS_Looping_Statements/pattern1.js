/* Conditional & Looping Statements */
// for loop
// Nested for loop

//Display patterns in browser
/*
way 2 
*
* *
* * *
* * * *
* * * * *
*/
// function getPatterFun1() {
//     let noOfStars = 5;
//     let starRes = '';
//     for(let c = 1; c <= noOfStars; c++) {
//         for(let d = 1; d <= c; d++) {
//             starRes = starRes+ `* `;
//         }
//         starRes = starRes+ `\n`;
//     }
//     console.log(starRes);   
// }

function getPatterFun1() {
    let x, y, n;
    n = 5;
    for( x = 1; x <= n; x++) {
        for(y = 1; y <= x; y++) {
            document.write('* ');
        }
        document.write('<br/>');
    }
    document.write('<button type="button" onclick="backFun()">Back</button>')
}
function backFun() {
    document.location='index.html';
}