/* 
1
12
123
1234
12345

*/

function getPatterFun2() {
    let x, y, n;
    n = 5;
    for( x = 1; x <= n; x++) {
        for(y = 1; y <= x; y++) {
            document.write(`${y} `);
        }
        document.write('<br/>');
    }
    document.write('<button type="button" onclick="backFun()">Back</button>')
}
function backFun() {
    document.location='index.html';
}

// function getPatterFun2() {
//     let noOfStars = 5;
//     let starRes = '';
//     for(let c = 1; c <= noOfStars; c++) {
//         for(let d = 1; d <= c; d++) {
//             starRes = starRes+ `${d} `;
//         }
//         starRes = starRes+ `\n`;
//     }
//     console.log(starRes);   
// }