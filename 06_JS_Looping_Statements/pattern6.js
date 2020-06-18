
/*
1 1 1 1 1 
2 2 2 2 
3 3 3 
4 4 
5 
*/

function getPatterFun6() {
    let x, y, n;
    n = 5;
    for( x = 1; x <= n; x++) {
        for(y = n; y >= x; y--) {
            document.write(`${x} `);
        }
        document.write('<br/>');
    }
    document.write('<button type="button" onclick="backFun()">Back</button>')
}

// function getPatterFun6() {
//     let noOfStars = 5;
//     let starRes = '';
//     for(let c = 1; c <= noOfStars; c++) {
//         for(let d = 5; d >= c; d--) {
//             starRes = starRes+ `${c} `;
//         }
//         starRes = starRes+ `\n`;
//     }
//     console.log(starRes);   
// }