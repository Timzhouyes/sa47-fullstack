console.log("hello world");

var x=1;
console.log(typeof(x));
x="Fuckoff";
console.log(typeof(x));
console.log(x);

function make1(x,y){
    console.log(x);
}

make1(x+ 1);

function make2(x,y,z){
    make1(x+1);
    console.log(typeof(x));
    if (x== null){
        console.log("x is null");
    }
    console.log(z);
}

make2(null,null,100);

function make3(fn1){
    console.log(fn1);
    fn1();
}


function fn1(){
    console.log("hello world");
}

make3(fn1);

str1="Apple";
console.log(str1);
str2='An'+str1;
console.log(str2);

var x=100;
function make5(){
    let x=10;
    console.log('x inside ${x}');//!!!!!!!!!!!!!!!!!!!!!!!!!!!

}

make5();

var fruit=['Apple','pineApple',1];

var fruit1=['Apple','pineApple',1];
fruit.sort();
console.log(fruit);

fruit.concat(fruit);
console.log(fruit.concat(fruit));

var person ={
    firstname:'zhou',
    age:12,
    'my house':'very large',
    postalcode:566344
}

console.log(person.age);
console.log(person['age'])
console.log(person["my house"])
person.age=40;
console.log(person.age)
delete person.postalcode;
console.log(person.postalcode)
//It dealys the function
setTimeout(() => {
    x
}, 1000);

function x(){
    console.log(5151515)
}



// setInterval(() => {
//    console.log(2+2) 
// }, 3000);

// function throwError(){
//     throw ne
// }

//Index is the restricted variable for JS
fruit.forEach((result,index)=>{
    console.log("result"+result)
    console.log("index"+index)
})

var months=["Jan","Feb","mar"]
console.log(months)
months.splice(2,3,"July")

function Person2(firstname,lastname,age,gender){
    this.firstname=firstname;
    this.lastname=lastname;
    this.age=age;
    this.gender=gender

}

var p2=new Person2("zhou","haiming",12,'M');
console.log(p2.age);

