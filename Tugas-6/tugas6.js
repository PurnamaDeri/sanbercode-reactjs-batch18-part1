//Soal No.1
//Luas Lingkaran
const luas = (r)=>{
    let hasil = 22/7 * r * r;
    return hasil;
  }
  console.log(luas(7))
  
  //Keliling Lingkaran
  const keliling = (r)=>{
    let hasil = 2 * 22/7 * r;
    return hasil;
  }
  console.log(keliling(7))



//Soal No.2

let kalimat = ""
kalimat = () =>{
let hasil = `${kata1} ${kata2} ${kata3} ${kata4} ${kata5}`
return hasil;
}

const kata1 = 'saya'
const kata2 = 'adalah'
const kata3 = 'seorang'
const kata4 = 'frontend'
const kata5 = 'developer'

console.log(kalimat())
 


//Soal No.3

const newFunction = function literal(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName,
      fullName: function(){
        console.log(firstName + " " + lastName)
      }
    }
  }
   
  //Driver Code 
  newFunction("William", "Imoh").fullName() 



//Soal No.4

const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
  };
  
  const {firstName,lastName,destination,occupation,spell} = newObject
  
  console.log(firstName, lastName, destination, occupation)



  //Soal No.5

const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]

let combine = [west, east]
console.log(combine)