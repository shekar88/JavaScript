/*
12345
1234
123
12
1

*/

function getPatterFun4() {
    let x, y, n;
    n = 5;
    for( x = n; x >= 1; x--) {
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

// function getPatterFun4() {
//     let noOfStars = 5;
//     let starRes = '';
//     for(let c = noOfStars; c >= 1; c--) {
//         for(let d = 1; d <= c; d++) {
//             starRes = starRes+ `${d} `;
//         }
//         starRes = starRes+ `\n`;
//     }
//     console.log(starRes);   
// }

/*
12345
1234
123
12
1

*/