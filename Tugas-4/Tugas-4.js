//Soal No.1

var x = 2;
console.log("LOOPING PERTAMA");
while (x <= 20){
  console.log(x + " - " + " I love coding")
    x +=2;
}


var x = 20;
console.log("LOOPING KEDUA");
while (x >= 2){
  console.log(x + " - " + " I will become a frontend developer")
    x -=2;
}



//Soal No.2

for (var x=1; x<=20; x++) {
  if (x % 2 === 0) {
          console.log(x + " Berkualitas");   
  }
  else if ((x % 3 == 0 &&  x % 2 == 1)) {
          console.log(x + " I Love Coding");   
  }
  else {
          console.log(x + " Santai");
  }
}



//Soal No.3

var x = "#"
while(x.length <=7 ){
console.log(x);
x = x + "#";
}



//Soal No.4

var kalimat = "saya sangat senang belajar javascript";
var ar = kalimat.split(" ");
console.log( ar ); 



//Soal No.5

var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
var x = daftarBuah.sort();
for (i = 0; i < x.length; i++){
  console.log(x[i]);
}
