/*
         * 
        * * 
       * * * 
      * * * * 
     * * * * * 
    * * * * * * 
   * * * * * * * 
  * * * * * * * * 
 * * * * * * * * * 
* * * * * * * * * * 
*/

// function getPatterFun9() {
//     let x, y, n;
//     n = 5;
//     for( x = 1; x <= n; x++) {
//         for(y = n; y >= x; y--) {
//             document.write(`${y} `);
//         }
//         document.write('<br/>');
//     }
//     document.write('<button type="button" onclick="backFun()">Back</button>')
// }

let a, b, n, str;
str = '';
n =10;
for(a = 1; a <= n; a++) {
    for(b = 1; b <= n; b++) {
        if(a+b > n) {
            str = str+`* `;
        }
        else {
            str = str+' ';
        }
    }
    str = str+ `\n`;
}
console.log(str);
