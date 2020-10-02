//Soal No.1

function halo(kata = "Halo Sanbers!") {
    return kata
  }
   
  console.log(halo())



  //Soal No.2

   
function kalikan(num1, num2){
    return num1 * num2;
  }
  
  var num1 = 12
  var num2 = 4
  
  
  var hasilKali = kalikan(num1, num2)
  console.log(hasilKali)
  


  //Soal No.3

  function introduce(name, age, address, hobby){
    return "Nama saya " + name + ", umur saya " + age + " tahun, " + "alamat saya di " + address + ", dan saya punya hobby yaitu " + hobby;
  }
  
  
  var name = "John"
  var age = 30
  var address = "Jalan belum jadi"
  var hobby = "Gaming"
   
  var perkenalan = introduce(name, age, address, hobby)
  console.log(perkenalan)



  //Soal No.4

  var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992]

  var obj = {
    nama : arrayDaftarPeserta [0],
    jenis_kelamin : arrayDaftarPeserta[1],
    hobi : arrayDaftarPeserta [2],
    TL : arrayDaftarPeserta[3],
  };
  
  console.log(obj)



  //Soal No.5

  var Buah =[{nama: "strawberry", 
            warna: "merah", 
            "ada bijinya": "ada", 
            harga : 9000 },
            
            {nama: "jeruk", 
            warna: "oranye", 
            "ada bijin}ya": "ada",
            harga : 8000 },
            
            {nama: "Semangka", 
            warna: "Hijau & Merah", 
            "ada bijinya": "ada",
            harga : 10000 },
            
            {nama: "Pisang", 
            warna: "Kuning", 
            "ada bijinya": "Tidak",
            harga : 5000 }]

console.log(Buah[0]);
  


  //Soal No.6

  var datafilm = [];
  function tambahfilm(nama, durasi, genre, tahun){
    datafilm.push({nama: nama ,durasi: durasi , genre: genre, tahun: tahun}); 

    return datafilm;
  }
    tambahfilm("The Magnificent Seven","2 Jam 13 Mnt","thriller action","2016")
  console.log(datafilm);
