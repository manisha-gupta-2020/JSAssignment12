// STEP 1
/*
function Cat(){ } 
const Dog = function() { }
*/


// STEP 2
/*
 const cat1 = new Cat()
Dog.name = 'Burt'
*/

// STEP 3
/* 
function Animal(){
    this.displayMsg = function(){console.log("The Animal has been created")}
}
const a1 = new Animal()
a1.displayMsg() 
*/


// STEP 4
/*
function Animal(animal){
    this.displayMsg = function(){console.log(`The Animal ${animal} has been created`)}
}
const a1 = new Animal('horse')
a1.displayMsg()
*/


// STEP 5
/*
function Animal(type,breed,color,height,length){
    this.type = type
    this.breed = breed
    this.color = color
    this.height = height
    this.length = length
}
const a1 = new Animal('dog','MaltiPoo','white',27,22)
*/



// STEP 6
/*
for (x in a1){
    console.log(x)
*/

// STEP 7
/* 
function Animal(type,breed,color,height,length){
    this.type = type
    this.breed = breed
    this.color = color
    this.height = height
    this.length = length
    this.speak = function(){
        return (this.type =='dog'? `The ${this.color} dog is barking` : `The ${this.color} cat is meowing!`)
    }
}
const a1 = new Animal('dog','MaltiPoo','white',27,22)
console.log(a1.speak())
*/


// STEP 8
/*
function Animal(type,breed,color,height,length){
    let _type = type
    let _breed = breed
    let _color = color
    let _height = height
    let _length = length
    let checkType = function(){
        return (_type =='dog'? 'dog' : 'cat')}
    this.speak = function(){ return checkType() }
    
}
const a1 = new Animal('dog','MaltiPoo','white',27,22)
console.log(a1.speak())

*/

// STEP 9
/* *********  9  **********  Create your own String method called findWords that inherits from the native String Object. This method should find all instances of a specific word within a provided paragraph of text. It should then alert out to the user the number of time that word was found in the paragraph. Remember, you’ll need to add your method to the String object’s prototype.*/
/*
String.prototype.findWords = function(para,findWord){
    para = para.toLowerCase()
    const paraArr = para.split(' ')
    let count = 0;
    for (let i=0; i<paraArr.length; i++){
      if (paraArr[i] == findWord){count++}
    }
    return count
}
let test2 = new String()
let paragraph = 'big black bug bit a big black dog on his big black nose', sWord = 'big'
let count = test2.findWords(paragraph,sWord)
console.log(`The word ` + sWord + ' was found ' + count + ' times in the paragragh.')
*/