/* --------------
        *
       **
      ***
     ****
    *****
   ******
  *******
 ********
*********
----------------*/
// Error
// function getPatterFun8() {
//     let x, y, n, str;
//     str = '';
//     n = 5;
//     for( x = 1; x <= n; x++) {
//         for(y = 1; y <= n; y++) {
//             if(x + y > n) {
//                 // str = str.concat('*');      //with concat function
//                  str = str + '* ';              //with concat operator
//             }
//             else {
//                 // str = str.concat(' ');       //with concat function
//                 str = str + ' ';             //with concat operator
//             }
//         }
//         document.write(`${str}`);
//         document.write('<br/>');
//     }

//     document.write('<button type="button" onclick="backFun()">Back</button>')
// }


function getPatterFun8() {
    let a, b, n, str;
    str = '';
    n =5;
    for(a = 1; a <= n; a++) {
        for(b = 1; b <= n; b++) {
            if(a+b > n) {
                // str = str.concat('*');      //with concat function
                str = str + '*';              //with concat operator
            }
            else {
                // str = str.concat(' ');       //with concat function
                str = str + ' ';             //with concat operator
            }
        }
        // str = str.concat('\n');      //with concat function
        str = str + '\n';                //with concat operator
    }
    console.log(str);

}