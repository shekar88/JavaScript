/*
5 4 3 2 1 
5 4 3 2 
5 4 3 
5 4 
5
*/

function getPatterFun7() {
    let x, y, n;
    n = 5;
    for( x = 1; x <= n; x++) {
        for(y = n; y >= x; y--) {
            document.write(`${y} `);
        }
        document.write('<br/>');
    }
    document.write('<button type="button" onclick="backFun()">Back</button>')
}

// function getPatterFun7() {
//     let noOfStars = 5;
//     let starRes = '';
//     for(let c = 1; c <= noOfStars; c++) {
//         for(let d = 5; d >= c; d--) {
//             starRes = starRes+ `${d} `;
//         }
//         starRes = starRes+ `\n`;
//     }
//     console.log(starRes);   
// }