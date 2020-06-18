//Access complete Document
console.log(document);              //getting complete html page

//Access head Tag
console.log(document.head);         //getting head tag

//Access title Tag
console.log(document.title);        //getting title tag
//Change the title 
// document.title = 'UI JS';

//Access body Tag
console.log(document.body);         //getting body complete tag

//Access nav Tag
console.log(document.nav);          //undefined
console.log(document.body.nav);     //undefined
/*
we cant access directly like this, because in complete page nav will appere muliple times.
the document, head, title and body will appere only once in complete page.
*/

let navTag = document.querySelector('nav');
console.log(navTag);

//Access anchor Tag inside the nav Tag
let anchorInNavTag = document.querySelector('nav a');
console.log(anchorInNavTag);

//Access anchor Tag data inside the nav Tag 
let innerTxt = anchorInNavTag.innerText;
console.log(innerTxt);
//OR
let dataAnchorTag = document.querySelector('nav a').innerText;
console.log(dataAnchorTag);

//Change the Data or innerText
anchorInNavTag.innerText = 'Chandra';

//How to change the Styles using JS
let h1Tag = document.querySelector('#msg');
console.log(h1Tag);

h1Tag.innerText = 'Good Morning Chandu';
h1Tag.style.backgroundColor = 'limegreen';
h1Tag.style.color  = 'white';   
h1Tag.style.textAlign = 'center';
h1Tag.style.padding = '15px';
h1Tag.style.fontSize = '43px';
h1Tag.style.boxShadow = '0 0 10px black';

