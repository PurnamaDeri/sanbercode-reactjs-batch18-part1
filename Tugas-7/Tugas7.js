//Soal No.1

//Release 0
class Animal {
    constructor(name){
      this.animalname  = name;
      this.legs = 5;
      this.cold_blooded = false;
    }
    get name(){
      return this.animalname ;
    }
    set name(x){
      this.animalname = x;
    }
  }
  
  var sheep = new Animal("shaun");
  
  console.log(sheep.name) // "shaun"
  console.log(sheep.legs) // 4
  console.log(sheep.cold_blooded) // false
  
  //Release 1
  class Ape extends Animal{
  constructor(name){
      super(name);
      this.legs = 2;
      this.cold_blooded = false;
    }
  yell(){
   return 'Auooo';
    }
  }

  var sungokong = new Ape("kera sakti")
  sungokong.yell()
  console.log(sungokong);
  
  class Frog extends Animal{
  constructor(name){
      super(name)
      this.legs = 2;
      this.cold_blooded = true;
    }
  jump(){
    return 'hop hop';
    }
  }
  
  var kodok = new Frog("buduk")
  kodok.jump() // "hop hop" 
  console.log(kodok);



  //Soal No.2

class Clock{
    constructor({template}){
      this._template = template
      this.timer
    }
  render(){
    let date = new Date();
  
    let hours = date.getHours();
    if(hours < 10)hours = '0' + hours;
  
    let mins = date.getMinutes();
    if(mins < 10) mins = '0' + mins;
  
    let secs = date.getSeconds();
    if(secs < 10)secs= '0' + secs;
  
    let output = this._template
    .replace('h', hours)
    .replace('m', mins)
    .replace('s', secs)

  console.log(output)
}
  stop(){
    clearInterval(this.timer)
  }
  start(){
    this.render()
    this.timer= setInterval(()=>this.render(),1000)
    }
  }

  var clock = new Clock({template: 'h:m:s'});
  clock.start();  