// di index.js
var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]
 
// Tulis code untuk memanggil function readBooks di sini
 readBooks(10000,books[0], (timereadbooks) =>{
     readBooks(timereadbooks,  books[1], (timereadbooks) =>{
         readBooks(timereadbooks,  books[2], (timereadbooks) =>{
             readBooks(timereadbooks,  books[3], (timereadbooks) =>{
                 console.log(timereadbooks)
             });
         });
     });
 });
