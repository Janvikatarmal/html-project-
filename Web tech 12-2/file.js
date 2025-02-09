// let boy ='anonymous'
// console.log(boy);

// let girl ='Janvi';
// console.log(girl);
// //this below printing statements prints the output on console window o/p    
// console.log('Welcome to JS ')

// document.write("Hello")
// document.write("Hello")
// document.write("Hello" +"<br>")
// document.write("Hello")
// document.write("Hello")

// let value =  prompt("Enter your Number")
// console.log(value);
// confirm("Are You Sure!")
// alert("Submitted Successfully")

// let arr = [10,20,30,40]
// console.log(arr);

// console.table(arr)

// //var variable

// var name
// name='joker'
// console.log(name)

// var name = 'swetty'
// console.log(name)

// var name = ('jokari')
// console.log(name)


// //let variable
// let age = 22
// console.log(age)

// age = 23
// console.log(age)

// //const variable
// const place = 'Nagpur'
// console.log(place)

// var name = 'rocky';
// console.log(name);

// let name1 = 'sweety'
// console.log(name1)
// console.log(place2)


// console.log(window)
// var place2 = 'mumbai';

// {
//     let place = 'pune';
//     console.log(place);
//     var place2 = 'bengaluru'
// }

// console.log(place2);
// console.log(place);

// let name = 'rocky';
// let fullName = 'Janhavi Bharat Katarmal';
// console.log( name )
// console.log(typeof name )
// console.log(fullName)
// console.log(typeof fullName)
// let age = 38;
// let age2 = 23.23;
// let contact = 9172991993;
// console.log(age)

// console.log(age2)

// let boolean = true;

// let place ;




// let block = null;

// let product1 = parseInt(prompt("Enter the product price"))
// let product2 = parseInt(prompt("Enter the product price"))
// let product3 = parseInt(prompt("Enter the product price"))
// let product4 = parseInt(prompt("Enter the product price"))
// let product5 = parseInt(prompt("Enter the product price"))
// let total = product1 + product2 + product3 + product4 + product5

// if(total >= 5000){
//     let disc = total-total*0.15;
//     console.log("You have purchased the prducts of Amount" + total + "So congrats you got the flat 15% discount and your payable amount is " + disc)

// }

// else{
//     console.log("Buy some more products");
// }
// let bikePrice = 12;
// let autoPrice = 17;
// let carPrice = 25;

// let rewardPoints = 0;

// let yourChoice = prompt("Enter your preferred mode of transportation : ");
//  document.write("1. Bike: 12 Rs/km");
//  document.write("2. Auto: 17 Rs/km");
//  document.write("3. Car: 25 Rs/km "+ "<br>");
// let distance = prompt("Enter the distance you want to travel");
// if (yourChoice == "1") {
//     document.write("You have chosen the bike, and the price for 10 km is " + bikePrice * distance + " Rs");
// } else if (yourChoice == "2") {
// document.write("You have chosen Auto, and the fare for 10 km distance is " + autoPrice * distance + " Rs");
// } else if (yourChoice == "3") {
//     document.write("You have chosen Car, and the fare for distance is " + carPrice * distance + " Rs");


//     let carDistancePrice = carPrice * distance;

 
//     if (distance >= 10 && carDistancePrice >= 250) {
//         rewardPoints = carPrice*1000;
//         document.write("Congratulations! You have earned " + rewardPoints + " reward points.");
//     }
// } else {                 
//     document.write("You have choosed wrong preference");
// }

// let trainers = ['Digvijay','tushar','avinash','rohit','abhishiekh','harsha']

// let newTeam = trainers.splice(3,0,"Lord_Girish");
// console.log(newTeam);

// console.log(trainers);
// let TeamJava = trainers.slice(2,4);
// let TeamPython = trainers.slice(0,2);
// let TeamTesting = trainers.slice(4,6);
// console.log(TeamJava);
// console.log(TeamPython);
// console.log(TeamTesting);


// let cricketers = ["virat","rohit","mahi","sachin"]
// console.log(cricketers.indexOf('rohit'));
// console.log(cricketers.includes('janvi'));

// let mens = ['rohit','venky','prajval'];
// let girls = ['priya','geetanjali','rutuja'];
// let  otherGirls = ['janvi','sinni']

// let students = mens.concat(girls,otherGirls);

// console.log(students.sort());
// console.log(students.reverse());


// let values  = [10,20,30,57,67,35]
// console.log(values)

// let newArray = values.filter(Even)
// console.log(newArray)

// function Even(num){
//     return num % 2==0
// }
// let values2 = [10 ,40,50,63,41]
// let newValues = values2.filter((n)=>{
//     return n% 2 ==0
// })
// console.log(newValues)

// let names = ['dnyannu','jaanu','sinni','pajju','janvi']
// console.log(names)

// let newNames = names.filter((n)=>{
//     return (n.includes('j'))
// })
// console.log(newNames);


// let values1 = [10,20,30,40]
// let add = values1.map((n)=>{
//     return n*10
// })
// console.log(values1);
// console.log(add);

// let arr = [10,20,30,40,1,2,3,4]
// console.log(arr)

// let reduceValue = arr.reduce((a,b)=>{
//     return a*b
    
// } ,200)
// console.log(reduceValue)


// let Bike = {
//     name : "Triumph",
//     model : "Speed Triple",
//     price : 300000
// }
// console.log(Bike)

// let person ={
//     name:'jaanu',
//     sal:600000,
//     address :{
//         pincode : 440024,
//         city :'Nagpur',
//         state : 'Maharashtra'
//     }
// }
// console.log(person);
// console.log(person.name);
// console.log(person.sal);
// console.log(person.address.place);
// console.log(person.address);

// let ename = prompt("Enter employee name :")
// let eid = prompt("Enter employee id : ")

// let employee1 ={
//     Ename : ename ,
//     Eid : eid ,
//     Age : Symbol('16')
// }

// let ename1 = prompt("Enter second employee name :")
// let eid1 = prompt("Enter second employee id : ")

// let employee2 ={
//     Ename1 : ename1 ,
//     Eid1 : eid1 ,
//     Age1 : Symbol('16')
// }
// console.log(employee1);
// console.log(employee2);
// console.log(employee1.Age == employee2.Age);



// let person = new Object()
// person.ename = 'janvi'
// person.eid=1502
// person.sal = 50000
// console.log(person);

// let cars = ['Mercedes','audi','ertiga']
// console.log(cars);


// let person1 = {
//     name : 'janvi',
//     age1 : 18,
//     place : 'My Heart'
// }
// console.log(person1);
// person1.place = 'on earth'

// delete person1.name

// console.log(person1);

// function Employee(ename,eid ,sal,dept){
//     console.log(ename+" " +eid+" "+sal+" "+dept);
//     this.ename = ename
//      this.eid= eid
//      this.sal = sal
//      this.dept = dept   
// }
// let E1 = new Employee('Janvi',111,50000,'Java Full Stack')
// let E2 = new Employee('Prajval',112,50000,'Java Full Stack')
// console.log(E1);
// console.log(E2);


// let person = {
//     name :'janvi',
//     place : 'Nagpur',
//     hobbies : ['Reading Books ','Travelling','Coding','Cooking'],
//     isMarried : false,
//     address:{
        
//         city : 'Nagpur',
//         Street :'MSEB Colony',
//         State : 'Maharashtra'
// }    

// }
// console.log(person);
// console.log(person.place);
// console.log(person.hobbies);
// console.log(Object.keys(person));
// console.log(Object.values(person));
//  console.log(Object.entries(person));

//  console.log(Object.seal(person));
//  console.log(Object.isSealed(person));
//  person.isMarried = true 5 
//  delete person.address
//  console.log(person);
// console.log(Object.isFrozen(person));
// //  person.name= "prajval"
//  console.log(person);
 
 
//  let person ={
//     name :'Janvi',
//     surname :'Katarmal',
//     fullName :function () {
//         console.log(this.name +" "+this.surname);
//     }  
//     }

 
//  person.fullName();

//  function fullName1(name,surname){
//     console.log(name +" "+surname);  
//  }
//  fullName1('Avinash','Reddy');
 


// let person1={
//     name : 'Harshvardhan',
//     surname :'G R',
//     age:24

// }
// let person2 ={
//     name :'Collin',
//     surname :'Goves'
// }

// let person ={
//     name :'Avinash',
//     surname : 'Reddy',
//     fullName : function(age ,salary,hobby,contact){
//         console.log(this.name +" " +this.surname + " his age is "+ age +" and their salary is "+ salary +" and their hobbies are " + hobby +" , and their contact is"+ contact);
        
//     }
// }
// person.fullName(30,100,['coding','riding'],9876543210);
// person.fullName.call(person1,21,200,['travelling','coding'],7863479890);
// person.fullName.call(person2,27,300,['reading books','singng'],945678999);

// let subject  = "JavaScript"
// console.log(subject);
// let extract = subject.substring(4)
// console.log(extract);

// let extract2 = subject.substring(0,4)
// console.log(extract2);

// let place = '    pune'
// console.log(place);

// let trim = place.trim()
// console.log(trim);

// let sentence = 'java is a good programming  language and very good to understand i a am very good in java '
// console.log(sentence );
// let rep = sentence.replace("good","great")
// console.log(rep);

// let rep2 = sentence.replaceAll("good","great")
// console.log(rep2);

// let place2 = 'bengaluru'
// console.log(place2);
// console.log(place2.charAt(6));

// let msg = "I Love Cat's ❤️🐾"
// console.log(msg);
// let res = msg.repeat(180);
// document.write(res);


// let name1 = "Janvi  "
// let name2 = 'Katarmal'
// console.log(name1.concat(name2));

// let sub = "HTML"
// console.log(sub.split(""));


// let name3 = 'Janvi'
// let add = name3.padStart(10,"Miss.");
// console.log(add);


// let res1 = add.padEnd(11," K")
// console.log(res1);


// let today = new Date();
// console.log(today);
// console.log(today.getMonth());
// console.log(today.getDate());
// console.log(today.getDay());
// console.log(today.getFullYear());
// console.log(today.getHours());
// console.log(today.getSeconds());
// console.log(today.getMilliseconds());


// let date1 = new Date("2024-11-15")
// let date2 = new Date("2024-01-01")
// console.log(date1);
// console.log(date2);



// let diff = date1.getDate()- date2.getDate();
// console.log(diff);

// let res3 = (date1 - date2)/(1000*(3600*24))
// console.log(res3);

 

//getElementsById
// let head = document.getElementById("head")
// console.log(head);
// //getElementsByclassname
// let btn = document.getElementsByClassName("btn")
// console.log(btn);

// let bday = document.querySelector("#sir")
// console.log(bday);

// let hbd = document.querySelector(".hbd")
// console.log(hbd);


// let com = document.querySelectorAll(".ceo")
// // console.log(com);

// let bike = document.querySelector("#bike")
// console.log(bike);

// bike.innerHTML="splendor110"

// bike.textContent="Xtreme 125"

// let head = document.createElement("h1")
// head.innerHTML="Bike"
// document.body.appendChild(head)
// console.log(head);

// let head2 = document.createElement("h2")
// head2.innerHTML="Bullet"
// document.body.appendChild(head2)
// console.log(head2);

// let bike = document.querySelector("#bike")
// console.log(bike);
// bike.style.color="plum";
// bike.style.padding ="20px"
// bike.style.backgroundColor="black"
// bike.style.width="200px"
// bike.style.borderRadius="20px 0 20px 0"
// bike.style.boxShadow="0 0 5px 5px plum"
// bike.style.textShadow = "0 1px 2px red"


// let anchor = document.createElement("a")
// document.body.appendChild(anchor)
// anchor.innerHTML ="janvi katarmal"
// console.log(anchor)
// anchor.setAttribute("href","#")

// let  image = document.createElement("img")
// document.body.appendChild(image)
// console.log(image);

// image.setAttribute("src","data:image/jpeg;base64,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")
// image.setAttribute("alt","Janvi")
// image.setAttribute("height","200px")

// image.style.boxShadow="0 0 2px 2px red"
// image.style.borderRadius="50%"
// image.setAttribute("class","chakkar")


// function msg (){
//     console.log("janvi");
//     console.log("Java Developer");
    
    
// }

// function img (){
//     let image = document.createElement("img")
//     image.src="images/ty.png"
//     image.alt="Janvi"
//     document.body.appendChild(image);
//          console.log(image);
//         }
// function img() {
//     document.body.innerHTML += '<img src="images/ty.png" alt="Janvi">';
//     console.log('<img src="images/ty.png" alt="Janvi">');
// }

// let btn =  document.createElement("button")
// document.body.appendChild(btn)

// let btnContent = document.createTextNode("click here for msg")
// btn.appendChild(btnContent)


// btn.addEventListener("click",()=>{
//     let h1 = document.createElement("h1")
//     document.body.appendChild(h1)
//     let h1Content = document.createTextNode("Happy Sunday😶‍🌫️")
//     h1.appendChild(h1Content)

//     h1.addEventListener("mouseover",()=>{
//         h1.remove()
//     })

// })

// let form = document.getElementById("form")

// form.addEventListener("input",event =>{
//     event.preventDefault();

//     let user =  document.getElementById("username").value;
//     console.log(user);
//     let password = document.getElementById("password").value
//      let person = {
//         name:user,
//         password:password
//      }
//     console.log(person);
    
// })
// let colorChange = document.getElementById("changeColor")
// console.log(changeColor);
// colorChange.addEventListener("change", () => {
//     document.body.style.backgroundColor=colorChange.value;

// });

// let Prom = new Promise((resolve,reject)=>{
//     let day='sunday'
//     if(day =='sunday'){
//         resolve();

//     }
//     else{
//         reject();
//     }
// });
// Prom.then(()=>{
//     console.log("full day class");
    
// });
// Prom.catch(()=>{
//     console.log("Half Day Class");
    
// });

// function getMsg(id){
//     setTimeout(()=>{
//         console.log("Employee Id" + id);
        
//     },2000);
// }
// getMsg(123);
// getMsg(234);
// getMsg(345);

// setTimeout(()=>{
//     console.log("Hello");
// },2000);

// function getMsg(id,nextId){
//     setTimeout(()=>{
//         console.log("Employee Id" + id);
//         if(nextId){
//             nextId();
//         }
//     },5000);
// }
// getMsg(123,()=>{
//     getMsg(234,()=>{
//         getMsg(345,()=>{
//             console.log("All Done");
//             });
//         });
//     });

// function getMsg(name){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log("Name is "+ name);
//             res()
            
//         },2000);
//     });
// }

// async function allMsg(){
//     await getMsg("Sweety")
//     await getMsg("janvi")
//     await getMsg("prajval")
// }
// allMsg();

//  let data = "https://cat-fact.herokuapp.com/facts"
//  console.log(data);

//  let res = fetch(data)
// console.log(res);

// let btn = document.querySelector("#btn")
// let content = document.querySelector("#content")
// console.log(btn);
// console.log(content);

let Btn = document.querySelector("#btn")
let content = document.querySelector("#content")
let data1 = "https://api.thecatapi.com/v1/breeds"
Btn.addEventListener("click",getBreeds)
async function getBreeds(){
    let res = await fetch(data1)
    console.log(res);
    let data2 = await res.json();
     console.log(data2);
     content.innerHTML = data2[5].name; 
}
getBreeds();





   
        
    
    


 