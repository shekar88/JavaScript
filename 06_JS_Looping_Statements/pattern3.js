/*
1
22
333
4444
55555

*/

function getPatterFun3() {
    let x, y, n;
    n = 5;
    for( x = 1; x <= n; x++) {
        for(y = 1; y <= x; y++) {
            document.write(`${x} `);
        }
        document.write('<br/>');
    }
    document.write('<button type="button" onclick="backFun()">Back</button>')
}
function backFun() {
    document.location='index.html';
}

// function getPatterFun3() {
//     let noOfStars = 5;
//     let starRes = '';
//     for(let c = 1; c <= noOfStars; c++) {
//         for(let d = 1; d <= c; d++) {
//             starRes = starRes+ `${c} `;
//         }
//         starRes = starRes+ `\n`;
//     }
//     console.log(starRes);   
// }