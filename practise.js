

////   DISPLAY IN WINDOW    \\\\



window.alert("Hello Javascript"); 
alert("helo javascript")
alert('25')
document.write("hellow javascript")
console.log("25")
document.write("hellow world </br>");
document.write("hello javascript")


////   TYPE OF    \\\\



typeof("bangla");








///   USES OF  prompt(), toUPPERCASE, slice   \\\



var firstName=prompt();
var lastName=prompt();
var fullName=firstName +lastName;
var upperCase;
var slice;
var totalLength=fullName.length;

upperCase= fullName.toUpperCase();
slice=fullName.slice(1,2);

document.write(fullName);
document.write(upperCase); 
document.write(slice);
document.write(totalLength);






////     USES OF if, else if, else       \\\\\



// Finding Even Odd.....

var num,number, even, odd;
num=parseFloat(prompt("Enter A number:"));
number=num; 
document.write("you Entered the number:"number,"<br>");
if(number%2==0){
document.write("number is Even");
}
else{
document.write("Number Is Odd.");
}





//Positive and Negative Number

var num, number;
num=parseFloat(prompt("Please Enter A Number:"));
number=num;
document.write("You Enterd the Number Is:",number,"<br>");
if(number>0){
    document.write("This is positive Number");
}
else if (num<0){
    document.write("this is negative number");
}
else{
    document.write("this is not positive not negative");
}




////   MAKING SMALL CALCULATION TAKIN VALUE FROM USER   \\\\



var num1,num2,sum,sub,mult,divi1,divi2;
num1=prompt("Enter Your First Number:");
num2=prompt("Enter Your Second Number:");

num1=parseInt(num1,10);
num2=parseInt(num2,10);

sum=num1+num2;
sub=num1-num2;
mult=num1*num2;
divi1=num1/num2;
divi2=num2/num1;

document.write("Sum is:"+sum);
document.write("sub is:"+sub);
document.write("Multiplication is:"+mult);
document.write("Division 1 is:"+divi1);
document.write("division 2 is:"+divi2);




//Finding Large Number...........


var num1, num2, num3;
num1=parseFloat(prompt("Enter Your Fast Number:"));
num2=parseFloat(prompt("Enter Your Second Number:"));
num3=parseFloat(prompt("Enter Your Third Number:"));

document.write("You Entered Number-1 : ",num1," <br>Number-2 : ",num2," <br>And Number-3 : ",num3);
if(num1>num2 && num1>num3){
    document.write("<br>Here number 1 is the largest number");
    
}
else if(num2>num1 && num2>num3){
    document.write("<br>Here number 2 is the largest Number")
}
else{
    document.write("<br>Here number 3 is the largest Number")
}








// Digit abrevation (0-9) with if, else if, else........


var num;
num=parseFloat(prompt("Enter A Digit:"))
if(num==0){
    document.write("Zero");
}
else if(num==1){
    document.write("One");
}
if(num==2){
    document.write("Two");
}
else if(num==3){
    document.write("Three");
}
else if(num==4){
    document.write("Four");
}
else if(num==5){
    document.write("Five");
}
else if(num==6){
    document.write("Six");
}
else if(num==7){
    document.write("Seven");
}
else if(num==8){
    document.write("Eight");
}
else if(num==9){
    document.write("Nine");
}
else{
    document.write("Not a digit");
}







// Find Vowel or Consonent using    if, else if, else..........



var letter;
letter=prompt("Pleasr Enter A letter");
letter=letter.toLowerCase();
if(letter=="a" || letter=="e" || letter=="i"|| letter=="o" || letter=="u"){
    document.write("Its Vowel");
}
else{
    document.write("Its Consonent");
}







/////       SWITCH CASE EXAMPLE      \\\\\\\


// Digit abrevation (0-9) with Switch,case


var num;
num=parseFloat(prompt("Enter a digit:"));
switch (num) {
    case 0 :
       document.write("Zeor");
        break;
        case 1 :
            document.write("One");
            break;
            case 2 :
                document.write("Two");
                break;
                case 3 :
                    document.write("Three");
                    break;
                    case 4 :
                        document.write("Four");
                        break;
                        case 5 :
                            document.write("Five");
                            break;
                            case 6 :
                                document.write("Six");
                                break;
                                case 7 :
                                    document.write("Seven");
                                    break;
                                    case 8 :
                                        document.write("Eight");
                                        break;
                                        case 9 :
                                            document.write("Nine");
                                            break;
                                            default:
                                                document.write("Not A digit");
}






///////    FOR LOOP      \\\\\\\\\




// FINDING lower to upper and revurse ALSO even and odd .......


var n;
for(n=1; n<100; n=n+2){
    document.write("",n);
}


//ANOTHER

var n;
for(n=10; n>=1; n=n-1){
    document.write("",n);
}






/// Adding 1 to 5 by for looop BY  user input.........

var start,end,n,sum=0 ;
start=parseFloat(prompt("Enter Starting number:"));
end=parseFloat(prompt("Enter Ending number:"));
    for(n=start; n<=end; n=n+1){
        sum=sum+n;
    }
    document.write(sum);






////          Whilw loop       \\\\\\\\\\




//Adding 1 to 10..........


var n,sum;
sum = 0;
n = 1;
while(n <= 10){
    n = n+1;
    sum=sum+n;
}
//document.write("",n);
document.write(sum);





//Adding 1 to 100 Even number ONLY......

var n,sum
n=2;
sum=0;

while(n <=100){
    n=n+2;
    sum=sum+n;
}
document.write(sum);





//for loop......

var n;
for(n=1; n<=10;n++){
    document.write(" ",n);

}




//while loop

var n;
n=1;
while( n<=10){
    n++;
    document.write(" ",n);
}




///      do while loop     \\\\\\\\


var n;
n=0;
do{
    n++;
    document.write(" ",n);
}
while(n<=10);







//////         PRINT  1 to 100 then brek in 10 or continue      \\\\\\\



 //BREAK....

var n;
for (n=1; n<=100; n++){
    if(n==10){
        break;
    }
    document.write(" ",n);

}




//CONTINUE....


var n;
for (n=1; n<=100; n++){
    if(n==10){
        continue;
    }
    document.write(" ",n);

}

/// ANOTHER....

var n;
for (n=1; n<=100; n++){
    if(n%10==0 ){
        continue;
    }
    document.write(" ",n);

}






/////     TARNARY Operation       \\\\\\\\\


var n;
n=parseFloat(prompt("Enter A number"));
if(n>0){
    document.write("Positive",n);
}
else if(n==0){
    document.write("Zero",n);
}
else{
    document.write("Negative",n);
}





//Tarnary operation.........


var n, result;
n=parseFloat(prompt("Enter A number"));
result=n>0? "Positive":n<0? "Negative":"Zero";
document.write("",result);




//////             FUNCTION             \\\\\\\\\\\\\\\\\


////        IIFEs (Imadeit Invokable Function)       \\\\\\\\\


///task--7


var num1,num2, sum;
num1=parseFloat(prompt("Enter First Number:"));
num2=parseFloat(prompt("Enter Second Number:"));

(function myFunc(sum){
    
    document.write("Sum Of Two Numbers:",sum);
})(num1+num2);







//// Function expression


var num1,num2, sum;
num1=parseFloat(prompt("Enter First Number:"));
num2=parseFloat(prompt("Enter Second Number:"));

const head=(function myFunc(sum){
    
    document.write("Sum Of Two Numbers:",sum);
})
head(num1+num2);






////                 Arrey      \\\\\\


var group=new Array ();//var group=["Arif","Razi","Zaman","Zarif","Faiyaz","Zerrin"];
group[0]="Arif";
group[1]="Razi";
group[2]="Zaman";
group[3]="Zarif";
group[4]="Faiyaz";
group[5]="Zerrin";

document.write(group.length);
document.write(group[5]);

group.push("Tanvir");
group.pop("Zaman");







///Arrey ConcatINATION............


var x, y,sum;
x=[2,3,4,5];
y=["a","c","r","y","f"];
sum=x.concat(y);
document.write(sum);





/////////       26//01//2023         ////////








/// /////     JAVASCRIPT OBJECT      \\\\\\



//////  variable

var name =  "Arif Razi";
var age = 29;
var cgpa = 3.1;
var language =["Bangla","Hindi","English","Undu"];

console.log(cgpa);

/////   object

//how create an object
//how to print value of object
//adding aconstractor fuction


var student ={
    name :  "Arif Razi",
    age : 29,
    cgpa : 3.1,
    language :["Bangla","Hindi","English","Undu"]
}
console.log(student.name);

var student1 ={
    name :  "Arif Razi",
    age : 29,
    cgpa : 3.1,
    language :["Bangla","Hindi","English","Undu"]
}


var student2 ={
    name :  "Arif Razi",
    age : 29,
    cgpa : 3.1,
    language :["Bangla","Hindi","English","Undu"]
}


var student3 ={
    name :  "Arif Razi",
    age : 29,
    cgpa : 3.1,
    language :["Bangla","Hindi","English","Undu"]
}


var student3 ={
    name :  "Arif Razi",
    age : 29,
    cgpa : 3.1,
    language :["Bangla","Hindi","English","Undu"]
}





//////     making a constractor 
 

function Student(name,age,cgpa,language){
    this.name = name;
    this.age = age;
    this. cgpa = cgpa;
    this. language = language;
}
var student1= new Student("Arif Razi",29,3.12,["Bangla","English","Hindi"]);
var student2= new Student("Zaman",29.1,3.1,["Bangla","English","Hindi"]);
var student3= new Student("Arif",29.5,3.124,["Bangla","English","Hindi"]);
var student4= new Student("Razi",29.7,3.127,["Bangla","English","Hindi"]);

console.log(student2.language);
console.log(student1.name);
console.log(student3.age);
console.log(student4.cgpa);






/////      Adding function inside a constructor...



function Student(name,age,cgpa,language){
    this.name = name;
    this.age = age;
    this. cgpa = cgpa;
    this. language = language;
    

    this.display=function(){
        console.log(this.language);
        console.log(this.name);
        console.log(this.age);
        console.log(this.cgpa);

    }
}
var student1= new Student("Arif Razi",29,3.12,["Bangla","English","Hindi"]);
var student2= new Student("Zaman",29.1,3.1,["Bangla","English","Hindi"]);
var student3= new Student("Arif",29.5,3.124,["Bangla","English","Hindi"]);
var student4= new Student("Razi",29.7,3.127,["Bangla","English","Hindi"]);

student1.display();
student2.display();
student3.display();
student4.display();



//////    guessing game using math function   \\\\




var win=0,lose=0;
for ( var i=1; i<5; i++){
    var guessNumber=parseFloat(prompt("Enter a number:"));
    var randamNumber=Math.random()*5;
    randamNumber=Math.floor(randamNumber)+1;
    console.log(randamNumber);
    if(guessNumber==randamNumber){
        console.log("You Won");
        win++;

    }
    else{
        console.log("You Lose");
        lose++;
    }
}
document.write("You Win ",win++," Times<br>");
document.write("You Lose ",lose++," Times");






///// Playing with Date object in JavaScruipt  \\\\\



var date = new Date();
console.log(date);
var year =  date.getFullYear();
console.log(year);
var month =  date.getMonth();
console.log(month);
var day =  date.getDay();
console.log(day);
var hour =  date.getHours();
console.log(hour);
var min =  date.getMinutes();
console.log(min);





//////     Playing with some basic document object model




document.getElementById("dev").innerHTML="I Want To Be A Web Devoloper."

var finishLine=document.getElementById("end");
finishLine.innerHTML="Please Vanish All Lorem Word";





////**** IN CLASS NAME AND TAGNAME WE MUST USE INDEX NUMBER ******\\\\\\



document.getElementsByClassName("de")[0].innerHTML="Developer"
document.getElementsByTagName("p")[0].innerHTML="Hellow JAVA"





///////**** In quretSelector inn ID we use "#", class ".", tagName keep normal */

document.querySelector("#dev").innerHTML="QureySlector"
document.querySelector(".de").innerHTML="la la la la la la"
document.querySelector("p").innerHTML="Java Script"





////////   qureySelectorAll we use same index number.also here we see different type of more than class,id,tag usess   \\\\\\\


document.querySelector("a").innerHTML="I am Java Script Learner"
document.querySelector("li a").innerHTML="I am Java Script Learner"
document.querySelector("h1").innerHTML="I am Java Script Learner"
document.querySelectorAll("h2")[1].innerHTML="I am Java Script Learner"





///////  Event hndeling \\\\\\\




function myFunc(){
    alert("Call from function");
}



function myFunc2(){
   var myVar= document.querySelector("#paraId");
   myVar.innerHTML= "Lorem ipsum dolor sit amet consectetur adipisicing.";

}





///////   date 28.01.2024    \\\\\\\






//////     Adding some text in HTML element through JavaScript   \\\\


var heading3=document.createElement("h1");
var text=document.createTextNode("Practising JavaScript");
heading3.appendChild(text);

var first= document.getElementById("my-div");
first.appendChild(heading3);
     




/////  remove some text from html elememt   \\\\

var removeHeading2=document.getElementsByTagName("h1")[2];
first.removeChild(removeHeading2);

var heading0=document.createElement("h1");
var text2= document.createTextNode("Adding Some Thing In first Heading");
var heading1=document.getElementsByTagName("h1")[1];
heading0.appendChild(text2);
first.insertBefore(heading0,heading1)
*/




///////   IMAGES Slider   \\\\\\\



var photos=["./images/travel.jpg","./images/italy.jpg","./images/maldives.jpg","./images/brazil.jpg"];

var imgTag=document.querySelector("img");


var count=0;
function next(){
    imgTag.src=photos[count];
    count++;

    if(count>=photos.length){
        count=0;
        imgTag.src=photos[count];
    }
    else{
        imgTag.src=photos[count];
    }
}
function previous(){
    count--;

    if(count<0){
        imgTag.src=photos[count];
        count=photos.length-1;
        imgTag.src=photos[count];
    }
    else{
        imgTag.src=photos[count];

    }

}


//////  SECOND ITEMS  \\\\\\
   

var image=["./images/html.png","./images/js.png","./images/node.png","./images/icon-1.png","./images/icon-2.png","./images/icon-3.png"];
var sorce=document.querySelectorAll("img")[1];


var i=0;
function nextFunc(){
    sorce.src=image[i]
    i++;
    if(i>=image.length){
     i=0; 
     sorce.src=image[i];  
    }
}

function prevFunc(){
    sorce.src=image[i]
    i--;
    if(i<=0){
        i=image.length-1;
        sorce.src=image[i];  
    }

}







///////////        CSS Style add in JavaScript        \\\\\\\\\



var arif=document.querySelector("#zarif");
function styleMe(){

    // arif.style.color="red";
    // arif.style.fontSize="40px";
    // arif.style.fontStyle="italic";
    arif.classList.add("styler");

}

function unStyleMe(){
    arif.classList.remove("styler");
    
}



///////ADD EVENT LISINER     \\\\\\


/// ADDD STYLE

var razi=document.querySelector("#zarif");

razi.addEventListener("mouseover",myFunc);
function myFunc(){
    razi.classList.add("styler");

}
razi.addEventListener("mouseout",myFunc);
function myFunc(){
    razi.classList.remove("styler");
}



////// ADDD TEXT


var btn=document.querySelectorAll(".myButton")[0];
btn.addEventListener("click",myFunc);
function myFunc(){
    var text =this.innerHTML;
 var btn=document.querySelector("h4");
 btn.innerHTML=text +" is clicked";
}

var btn=document.querySelectorAll(".myButton")[1];
btn.addEventListener("click",myFunc);
function myFunc(){
    var text =this.innerHTML;
 var btn=document.querySelector("h4");
 btn.innerHTML=text +" is clicked";
}

var btn=document.querySelectorAll(".myButton")[2];
btn.addEventListener("click",myFunc);
function myFunc(){
    var text =this.innerHTML;
 var btn=document.querySelector("h4");
 btn.innerHTML=text +" is clicked";
}


////PLAYING WITH MORE


var len=document.querySelectorAll(".myButton").length;
for(i=0; i<len; i++){
    var btn=document.querySelectorAll(".myButton")[i];
btn.addEventListener("click",myFunc);
function myFunc(){
    var text =this.innerHTML;
 var btn=document.querySelector("h4");
 btn.innerHTML=text +" is clicked";
}

}






////// PLAYING AUDIO BY PRESSING BUTTON    \\\\\\\



var len=document.querySelectorAll(".button").length;

for(var i=0; i<=len; i++){
    var button=document.querySelectorAll(".button")[i];
    button.addEventListener("click",myFunc);

function myFunc(){
    var text=this.innerHTML;
    console.log(text);  


    switch(text){

        case "Sound-1":
            var audio = new Audio("./sound/realize-your-dreams-187607.mp3");
            audio.play();
            break;
            case "Sound-2":
                var audio = new Audio("./sound/better-day-186374.mp3");
                audio.play();
                break;
                case "Sound-3":
                    var audio = new Audio("./sound/mellow-future-bass-bounce-on-it-184234.mp3");
                    audio.play();
                    break;
                    case "Sound-4":
                        var audio = new Audio("./sound/once-in-paris-168895.mp3");
                        audio.play();
                        break;
                        case "Sound-5":
                            var audio = new Audio("./sound/good-night-160166.mp3");
                            audio.play();
                            break;
                            case "Sound-6":
                                var audio = new Audio("./sound/lo-fi-midnight-hip-hop_60sec-187367.mp3");
                                audio.play();
                                break;
                                case "Sound-7":
                                    var audio = new Audio("./sound/sunshine-bliss-181126.mp3");
                                    audio.play();
                                    break;

    }
}

}





////////    SOUND WITH ANIMATION   \\\\\\


var len=document.querySelectorAll(".button").length;

for(var i=0; i<=len; i++){
    var button=document.querySelectorAll(".button")[i];
    button.addEventListener("click",myFunc);


    function myFunc(){
        var text=this.innerHTML;
        console.log(text);  
        audioPlay(text);
        animationPlay(text);

    }
}




function audioPlay(text){
    switch(text){

        case "Sound-1":
            var audio = new Audio("./sound/realize-your-dreams-187607.mp3");
            audio.play();
            break;
            case "Sound-2":
                var audio = new Audio("./sound/better-day-186374.mp3");
                audio.play();
                break;
                case "Sound-3":
                    var audio = new Audio("./sound/mellow-future-bass-bounce-on-it-184234.mp3");
                    audio.play();
                    break;
                    case "Sound-4":
                        var audio = new Audio("./sound/once-in-paris-168895.mp3");
                        audio.play();
                        break;
                        case "Sound-5":
                            var audio = new Audio("./sound/good-night-160166.mp3");
                            audio.play();
                            break;
                            case "Sound-6":
                                var audio = new Audio("./sound/lo-fi-midnight-hip-hop_60sec-187367.mp3");
                                audio.play();
                                break;
                                case "Sound-7":
                                    var audio = new Audio("./sound/sunshine-bliss-181126.mp3");
                                    audio.play();
                                    break;

    }
}


function animationPlay(text){
  var select= document.querySelector("."+text);
  select.classList.add("ac");
}








