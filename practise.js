

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



var len=document.getElementsByClassName("button").length;

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


var len=document.getElementsByClassName("button").length;

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
  select.classList.add("anim");
}





/////////   sound    animation    keyboard key press     \\\\\



var len=document.getElementsByClassName("button").length;

for(var i=0; i<len; i++){
    var btn=document.querySelectorAll(".button")[i];
    btn.addEventListener("click",myFunc);


    function myFunc(text){
        var text=this.innerHTML;
        console.log(text);  
        audioPlay(text);
        playAnimation(text);

    }
}



document.addEventListener("keypress",function(event){
    var text=event.key;
    console.log(text);
    audioPlay(text);
    playAnimation(text);
});





function playAnimation(text){
    var selectedButton = document.querySelector("."+text);
     selectedButton.classList.add("anim");
     setTimeout(function(){
       selectedButton.classList.remove("anim");
   
     },2000);
   }




function audioPlay(text){
    switch(text){
        case "a":
            var audio = new Audio("./sound/realize-your-dreams-187607.mp3");
            audio.play(1000);
            break;
            case "b":
                var audio = new Audio("./sound/better-day-186374.mp3");
                audio.play();
                break;
                case "c":
                    var audio = new Audio("./sound/mellow-future-bass-bounce-on-it-184234.mp3");
                    audio.play();
                    break;
                    case "d":
                        var audio = new Audio("./sound/once-in-paris-168895.mp3");
                        audio.play();
                        break;
                        case "e":
                            var audio = new Audio("./sound/good-night-160166.mp3");
                            audio.play();
                            break;
                            case "f":
                                var audio = new Audio("./sound/lo-fi-midnight-hip-hop_60sec-187367.mp3");
                                audio.play();
                                break;
                                case "g":
                                    var audio = new Audio("./sound/sunshine-bliss-181126.mp3");
                                    audio.play();
                                    break;

    }
    

}




////  how to work on change EVENT in njjava script   \\\\


console.clear();
// var input=document.querySelector("input");
var input=document.querySelector("input[name=name]");
//console.log(input);
input.addEventListener('change',changeHandeler);
function changeHandeler(e){
    console.log(e);
    console.log(e.type);
     console.log(e.target);
    console.log(e.target.className);
       console.log(e.target.id);
    console.log(e.target.value);

}



/////     change event on label    \\\\


console.clear();
var input=document.querySelectorAll("input[name=program]");
console.log(input);
Array.from(input).map((maping)=>{
    maping.addEventListener('change',programHandeler)
    function programHandeler(e){
        if(e.target.checked)
        console.log(e.target.value);
    }
})




////// change event on Select   \\\\\\



 var department=document.querySelector("#department");
 console.log(department);
 department.addEventListener('change',handleDepartment);
 function handleDepartment(e){
    console.log(e.target.value);
 }
 





 //////   Form  creation JS data handeling  \\\\\\


 const form=document.querySelector("form");
 const name=form.querySelector("div #name");
 var email=form.querySelector("div #email");
 var password=form.querySelector("div #password");



 //console.log(name);

 form.addEventListener('submit',formHandeler)
 function formHandeler(e){
    e.preventDefault();
    // console.log(name.value);
    // console.log(email.value);
    // console.log(password.value);

    const userInfo={
        name:name.value,
        email:email.value,
        password:password.value,
    }
    console.log(userInfo);
    name.value="";
    email.value="";
    password.value="";

 }
 



 ////////    Video event object     \\\\\

 // #canplay #play #playing #pause #ended #volumechange


 const video = document.querySelector("video");
 video.addEventListener("canplay",function(){
    console.log("canplay");
 });
 video.addEventListener("play",function(){
    console.log("play");
 });
 video.addEventListener("playing",function(){
    console.log("playing");
 });
 video.addEventListener("pause",function(){
    console.log("pause");
 });
 video.addEventListener("volumechange",function(){
    console.log("volumechange");
 });
 video.addEventListener("ended",function(){
    console.log("Thanks For Watching.");
 });
 




 //////////    #load #unload #scroll #resize #toggle    \\\\\


 window.addEventListener("load",function(){
    console.log("load");
 });
 window.addEventListener("unload",function(){
    console.log("unload");
 });




//// scroll


window.addEventListener("scroll",function(){
    console.log("scroll");
})
window.addEventListener("resize",function(){
    console.log("resize");
})




////////  toggle

const details=document.querySelector("div details");
details.addEventListener("toggle",function(e){
    console.log("toggle");
    console.log(e.target.open);
})





/////// Mouse event   \\\\\\

// #onclick #ondblclick #onmouse #onmouseenter #onmouseleave #onmousemove #onmouseover

/// #onmouseup #onmousedown


var squar=document.querySelector("#squar");
squar.addEventListener("click",function(e){
    console.log("click");
    console.log(e);
    console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.className);
    console.log(e.target.innerHTML);
    console.log(e.target.textContent);
    console.log(e.target.innerText);

});
squar.addEventListener("dblclick",function(){
    console.log("double click");

});
squar.addEventListener("mouseup",function(){
    console.log("mouseup");

});
squar.addEventListener("mousedown",function(){
    console.log("mousedown");

});
squar.addEventListener("mouseenter",function(){
    console.log("mouseenter");

});
squar.addEventListener("mouseover",function(){
    console.log("mouseover");

});
squar.addEventListener("mouseleave",function(){
    console.log("mouseleave");

});
squar.addEventListener("mousemove",function(e){
    console.log("mousemove");
    console.log("ClientX: ",e.clientX+"ClientY: ",e.clientY);
    console.log("offsetX: ",e.offsetX+"offsetY: ",e.offsetY);
});




//// click event betweeen three button by m,aking map    \\\\\




const buttons=document.querySelectorAll(".btn");
console.log(buttons);
Array.from(buttons).map((button) => {
    button.addEventListener("click",function(e){
        console.log(e.target.innerText);
    })

});





/////////  event on KEYBOARD KEYS     \\\\\\



console.clear();
const text=document.querySelector("div textarea");
text.addEventListener("keydown",function(e){
     console.log(e.key);
    if(e.repeat){
        alert("Do not Repeat");
    }
});
text.addEventListener("keypress",function(e){
    console.log(e.key);
});
text.addEventListener("keyup",function(e){
    console.log(e.key);
});




//   ///     FOCUS EVENT    \\\\\

///   #onblur  #onfocus  #onfocusin  #onfocusout


const input=document.querySelector("div #input");
// input.addEventListener("focus",function(){
//     // console.log("focus");

// });
input.addEventListener("focusin",function(){
    console.log("focus in");
    input.style.backgroundColor="Orange";
    input.style.padding="1rem";
});

// input.addEventListener("blur",function(){
//     console.log("blar");
// });
input.addEventListener("focusout",function(e){
    console.log("focus out");
    console.log(e.target.value);
    input.style.backgroundColor="white";
    input.style.padding="0rem";
    input.value=e.target.value.toUpperCase();
});




//////  #Oncopy  #Oncut   #Onpaste   \\\\\


const input=document.querySelector("div #input");
const p = document.querySelector("div #prgf");
    input.addEventListener("copy",function(){
        console.log("You Have Copied");
        p.innerText=("You Have Copied");
        });
    input.addEventListener("cut",function(){
        console.log("You Have Cut");
        p.innerText=("You Have Cut");
        });
    input.addEventListener("paste",function(){
        console.log("You Have Pasted");
        p.innerText=("You Have Pasted");
        });





////////   Drag and  Drop  \\\\\\


const drop = document.querySelector("#drop");
const drag = document.querySelector("#drag");
drag.addEventListener('dragstart',function(e){
    let setData=e.dataTransfer.setData("data",e.target.id);

});

drop.addEventListener('dragover',function(e){
    e.preventDefault();
});

drop.addEventListener('drop',function(e){
   let getData = e.dataTransfer.getData("data");
   console.log(getData);
   let div=document.getElementById(getData);
    drop.appendChild(div);
    e.preventDefault();
});






///////       TRY CATCH THROUGH    \\\\\\\\\\


var btn=document.querySelector("#check");
btn.addEventListener("click",function(){
    var valu=document.querySelector(".try").value;
    console.log(valu);
    try{
        if(valu<5){
            throw "Input is low."
        }
        else if(valu>10){
            throw "Input is high."

        }

    }
    catch(err){
        console.log(err);
    }
});






//////    ES6 function declaration   \\\\\


/// ES-5

function add(x,y){
    let sum = x+y;
    console.log(sum);
}
add(10,15);


/// ES-6

const addition = (x, y) =>{
    let sum=x+y;
    console.log(sum);
}
addition(20,30);





/////// Hoisting   \\\\\\\

x=20
console.log(x);
var x;
const x;
let x;


/////  Hoisting example
x=20
if(true){
    y=10
    console.log(y);
    var y;
}
console.log(x);
var x;



/////  "use strict mode"  in this we can not use without declaring a variable

//normal mode
x=20;
console.log(x);


//use strict mode..

"use strict"
x=20;
console.log(`x = ${x}`);

//Aanother Example

"use strict"
x=20;
console.log(`x = ${x}`);
var x;

//Aanother Example

"use strict"
let x
x=20;
console.log(`x = ${x}`);




////// Default & Rest parameters   \\\\


///Default parameters...

function display(massage = "I love javascript."){
    console.log(massage);
}
display();
display("i love bangladesh.");


/// Rest parameters...  

function rest(x,y, ...z){
    console.log(`x = ${x}, y = ${y}, z = ${z}.`);
}
rest(10,20,30,40,50,60,70,80,90);



//////   Spread Operators  \\\

///   Spread operator use at any place any where...

function spread(x,y,z){
    return(x+y+z);
}
let numbers = [1,2,3];
console.log(numbers);
console.log(spread(...numbers));
let numbers2 = [0,...numbers,4,5,6];
console.log(numbers2);
console.log(numbers.concat(numbers2));
console.log(...numbers, ...numbers2);



///spread operator in an object
let p1={
    Name : "Arif Razi",
    Age : 28
}

let p2={
    Nationality : "Bangladeshi",
    Ocupation : "Programer"
}
let p = p1 + p2;
let q = {...p1, ...p2};
console.log(p);
console.log(q);




///////   Object Leterel   \\\\\\

//Traditional Function
function studentInfo(name,id){
    return{
        name : name,
        id : id
    }
}
console.log(studentInfo("Arif Razi",2));


//object litarel

function studentInfo(name,id){
    return{
        name,
        id 
    }
}
console.log(studentInfo("Arif Razi",2));


// Another Fuction

let massage = {
    body :function(){
        return `hello i am object function`
    }
}
console.log(massage.body())


// Another Fuction

let massage = {
    body (){
        return `hello i am object function`
    }
}
console.log(massage.body())


// Another Fuction


let massage = {
    'body name' :function(){
        return `hello i am object function`
    }
}
console.log(massage['body name']());


// Another Fuction

let massage = {
    'body name' (){
        return `hello i am object function`
    }
}
console.log(massage['body name']());





//////   for of   &    for in   \\\\\\


const names = ["arif", "Zarif", "razi", "faiyaz"];
for(let name of names){
    console.log(name);
}
console.log(names);


//Another Example

let students={
    name : "arif",
    id : 2,
    age : 29
}
for(let x in students){
    console.log(x);
    console.log(students[x]);
    console.log(`${x} : ${students[x]}`);
}



////////  for each   \\\\\\\

let numbers=[10,20,30,40,50];
numbers.forEach(myFunction);
function myFunction(x){
    console.log(x);
}


// Another Example

let numbers=[10,20,30,40,50];
numbers.forEach(function(x){
    console.log(x);
});




/// take an array and squre them then keep tem another array

let numbers = [1,2,3,4,5];
let squareNumbers = [];
numbers.forEach(function(x){
    squareNumbers.push(x+5);
})
console.log(squareNumbers);




///// map and filter function  \\\\\\

///map

let numbers = [1,2,3,4,5,10,23,45,67,9];
let squareNumbers = numbers.map(function(x){
    return x*x;
})
console.log(squareNumbers);




//// filter  

let numbers = [1,2,3,4,5,10,23,45,67,9];
let squareNumbers = numbers.filter(function(x){
    return x<10;
})
console.log(squareNumbers);


//Traditional function

function display1(){
    console.log("I am display 1");
}
display1()

//Arrow funtion
const display2=()=> {
    console.log("I am display 2");
}
display2()

//Arrow Function
const display3=()=> 
    console.log("I am display 3");
display3()

//Arrow Function
const display4=()=>"I am display 4";
console.log(display4);

// Traditional Function

function add1(num1,num2){
   return num1+num2;
}
console.log(add1(20,30));

 // Arrow function
 const add2=(num1,num2)=>{
    return num1+num2;
 }
 console.log(add2(10,20));

 //Arrow function
 const add3=(num1,num2)=> num1+num2;
 console.log(add3(100,200));



///   Using filter and map function in Traaditional function and arrow function

let students = [
    {
        name:"arif",
        id:1,
        cgpa:2.22
    },
    {
        name:"zarif",
        id:2,
        cgpa:3.22
    },
    {
        name:"arsiya",
        id:3,
        cgpa:4.22
    },
    {
        name:"razi",
        id:4,
        cgpa:3.56
    },
    {
        name:"zuyaina",
        id:5,
        cgpa:4.12
    }
] 
console.log(students);



//using traditional function

function studentInfo(){
    return students.filter(function (x){
        return x.cgpa >4;
    }).map(function(y){
        return y.name;
    });

}
console.log(studentInfo());


//Using Arrow Function
const studentInfo2=()=>students.filter((c)=>c.cgpa>3).map((z)=>z.id);
console.log(studentInfo2());




// Array Destructure
 
let numbers = [20,30,40,50,60,70];
let [num1,num2,num3,num4,num5,mum6]=numbers;
console.log(numbers[4]);
console.log(num4);


// Destructure in spred operator

let numbers = [10,20,30,40,50,60];
let [x,y, ...z] = numbers;
console.log(x);
console.log(y);
console.log(...z);


//Destructure in object

const studentInfo = {
    name:"Arif",
    id:131,
    cgpa:2.67
}
// console.log(studentInfo.name);
// console.log(studentInfo.id);
// console.log(studentInfo.cgpa);
const {name,id,cgpa}=studentInfo
console.log(name);
console.log(id);
console.log(cgpa);



//Destructure in function

const student = {
    name:"arif",
    id:141,
    cgpa:3.33
}
// const studentInfo = (student) =>{
//     console.log(student.name);
// }
// studentInfo(student);
const studentInfo = ({name,id,cgpa}) =>{
    console.log(name);
    console.log(id);
    console.log(cgpa);

}
studentInfo(student);



// Find method in an Array

//find first even number and his index number also..

let numbers = [11,5,99,25,55,12,6,87];
const evenNumber = numbers.find((x) => x%2===0);
const evenNumberIndex = numbers.findIndex((x) => x%2===0);
console.log(evenNumber);
console.log(evenNumberIndex);
 


///Using Find method in an Array object to find first cgpa above 4

const student = [
    {
        name : "Arif",
        id : 101,
        cgpa : 3.2
    },
    {
        name : "Zarif",
        id : 102,
        cgpa : 4.0
    },
    {
        name : "Razi",
        id : 103,
        cgpa : 4.2
    },
    {
        name : "Faiyaz",
        id : 104,
        cgpa : 3.7
    },
    {
        name : "Erfan",
        id : 105,
        cgpa : 5.1
    },
]
const studentInfo = student.find((x) => x.cgpa>5);
console.log(studentInfo);

  
 /////   Synchoronous asynchornous  function

 // Synchornous function
 
 const taskOne = () =>{
    console.log("This is task-1")
 }

 const taskTwo = () =>{
    console.log("This is task-2")
 }

 const taskThree = () =>{
    console.log("This is task-3")
 }

 const taskFour = () =>{
    console.log("This is task-4")
 }

 const taskFive = () =>{
    console.log("This is task-5")
 }

 const taskSix = () =>{
    console.log("This is task-6")
 }
 taskOne ()
 taskTwo ()
 taskThree ()
 taskFour ()
 taskFive ()
 taskSix ()
 


 // Asynchornous function
 
 const taskOne = () =>{
    console.log("This is task-1")
 };
 const dataLoading = () =>{
    console.log("This is task-2")
 };

 const taskTwo = () =>{
    setTimeout(dataLoading,2000); 
 };

 const taskThree = () =>{
    console.log("This is task-3")
 };

 const taskFour = () =>{
    console.log("This is task-4")
 };

 const taskFive = () =>{
    console.log("This is task-5")
 };

 const taskSix = () =>{
    console.log("This is task-6")
 };
 taskOne ();
 taskTwo ();
 taskThree ();
 taskFour ();
 taskFive ();
 taskSix ();
 


 // Asynchornous  with anonimus function
 
 const taskOne = () =>{
    console.log("This is task-1")
 };

 const taskTwo = () =>{
    setTimeout(()=>{
        console.log("this is task-2")
    },3000); 
 };

 const taskThree = () =>{
    console.log("This is task-3")
 };

 const taskFour = () =>{
    console.log("This is task-4")
 };

 const taskFive = () =>{
    console.log("This is task-5")
 };

 const taskSix = () =>{
    console.log("This is task-6")
 };
 taskOne ();
 taskTwo ();
 taskThree ();
 taskFour ();
 taskFive ();
 taskSix ();
 


 //////  Call back function   \\\\\\
 
 const square = (x) =>{
    console.log(`Square of ${x} : ${x*x}`);
 }
//  square(5);


// const y = square;
// y(5);

const higherOrderFunction = (num,callback) =>{
    callback(num);
}
higherOrderFunction(6,square);

  
   /// callback Function

const taskOne = (callback) =>{
    console.log("This is task-1")
    callback();
 };

 const taskTwo = (callback) =>{
    setTimeout(()=>{
        console.log("this is task-2")
        callback();
    },3000); 
 };

 const taskThree = (callback) =>{
    console.log("This is task-3")
    callback();
 };

 const taskFour = (callback) =>{
    console.log("This is task-4")
    callback();
 };

 const taskFive = (callback) =>{
    console.log("This is task-5")
    callback();
 };

 const taskSix = () =>{
    console.log("This is task-6")
 };
 taskOne (() =>{
    taskTwo(() =>{
        taskThree(() => {
            taskFour(() => {
                taskFive(() => {
                    taskSix();
                });
            });
        });
    });
 });
 

 //console.log("Welcome to check.js");


// How to create a promise.......
// pending,resolve,reject

const promise1 = new Promise((resolve,reject) => {
    let completedPromise = true;
    if(completedPromise){
        resolve("Completed promise 1");
    }
    else{
        reject("Not Completed promise 1");
    }

});
const promise2 = new Promise ((resolve,reject)=>{
    resolve("Completed Promise 2");
})
//console.log(promise1);
// promise1.then((res)=>{
//     console.log(res);
// });
// promise1.catch((err)=>{
//     console.log(err);
// });
// promise2.then((ress)=>{
//     console.log(ress)
// });
// Promise.all([promise1, promise2]).then((res) => {
//     console.log(res)
// });
Promise.all([promise1, promise2]).then((res1,res2) => {
    console.log(res1,res2)
});
console.log("Goodbye from check.js");


//// setTimeout

const promise1 = new Promise((resolve,reject) => {
    setTimeout(()=>{
        resolve("Completed promise 1");
    },3000)
});
const promise2 = new Promise ((resolve,reject)=>{
setTimeout(()=>{
    resolve("Completed Promise 2");
},1000)
});

Promise.race([promise1, promise2]).then((res) => {
    console.log(res)
});




const  taskOne = () => {
    return new Promise ((resolve,reject)=>{
        resolve("Task 1 is Completed")
    });
};

const  taskTwo = () => {
    return new Promise ((resolve,reject)=>{
        reject("Task 2 is Not Completed")
    });
};

const  taskThree = () => {
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Task 3 is Completed")
        },3000)

    });
};

const  taskFour = () => {
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Task 4 is Completed")
        },4000)
    });
};

taskOne()
.then((res)=>{console.log(res)})
.then(taskTwo)
.then((res)=>{console.log(res)})
.then(taskThree)
.then((res)=>{console.log(res)})
.then(taskFour)
.then((res)=>{console.log(res)})
.catch(err=>{console.log(err)})



const  taskOne = () => {
    return new Promise ((resolve,reject)=>{
        resolve("Task 1 is Completed")
    });
};

const  taskTwo = () => {
    return new Promise ((resolve,reject)=>{
        resolve("Task 2 is Completed")
    });
};

const  taskThree = () => {
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            reject("Task 3 is not finished")
        },3000)

    });
};

const  taskFour = () => {
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Task 4 is Completed")
        },4000)
    });
};

async function callAllTasks(){
    const t1 = await taskOne();
    console.log(t1);
    const t2 = await taskTwo();
    console.log(t2);
    const t3 = await taskThree();
    console.log(t3);
    const t4 = await taskFour();
    console.log(t4);
}
callAllTasks()


////async-await try catch function


const  taskOne = () => {
    return new Promise ((resolve,reject)=>{
        resolve("Task 1 is Completed")
    });
};
const  taskTwo = () => {
    return new Promise ((resolve,reject)=>{
        resolve("Task 2 is Completed")
    });
};

const  taskThree = () => {
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            reject("Task 3 is not finished")
        },3000)

    });
};

const  taskFour = () => {
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Task 4 is Completed")
        },4000)
    });
};

async function callAllTasks(){
try{
    const t1 = await taskOne();
    console.log(t1);
    const t2 = await taskTwo();
    console.log(t2);
    const t3 = await taskThree();
    console.log(t3);
    const t4 = await taskFour();
    console.log(t4);
}
catch(err){
    console.log(err)
}
}
callAllTasks()




//// XMLhttp request


const makeRequest = (method, url, data) =>{
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = () =>{
        let data =xhr.response;
        console.log(JSON.parse(data));
    }
    xhr.onerror = () =>{
        console.log("Error is here");
    }
    xhr.send(JSON.stringify(data));

}


const getData = () => {

makeRequest('Get','https://jsonplaceholder.typicode.com/posts');

}
getData();


 const sendData = () => {
    
    makeRequest('POST','https://jsonplaceholder.typicode.com/posts',{
        title: 'foo',
        body: 'bar',
        userId: 1,
      })

}
sendData();   


const updateData = () => {
    
    makeRequest('PUT','https://jsonplaceholder.typicode.com/posts/1',{
        id: 1,
        title: 'foomaa',
        body: 'barmaa',
        userId: 1,
      })
}   
updateData();



const updateSingleData = () => {
    
    makeRequest('PATCH','https://jsonplaceholder.typicode.com/posts/1',{
    
        title: 'Hello JavaScript',
      })
}   
updateSingleData();




const deleteData = () => {
    
    makeRequest('DELETE','https://jsonplaceholder.typicode.com/posts/1')
}   
deleteData();
 





//// XMLHttp request using promise

const makeRequest = (method, url, data) =>{
 return new Promise(() => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = () =>{
        let data =xhr.response;
        console.log(JSON.parse(data));
    }
    xhr.onerror = () =>{
        console.log("Error is here");
    }
    xhr.send(JSON.stringify(data));
 });

}


//////// axios

const getData = () => {

makeRequest('Get','https://jsonplaceholder.typicode.com/posts')
.then((res) => {
    console.log(res);
});

}
getData();


axios
//.get("https://jsonplaceholder.typicode.com/posts")
.then((res) => {console.log(res.data)})
.catch((err) => {console.log(err)});



.delete("https://jsonplaceholder.typicode.com/posts/1")
.then((res) => {console.log(res.data)})
.catch((err) => {console.log(err)});




.patch("https://jsonplaceholder.typicode.com/posts/1", {
    method: 'PATCH',
    body: JSON.stringify({
      body: 'barmaabaha',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
})
.then((res) => {console.log(res.data)})
.catch((err) => {console.log(err)});


.put("https://jsonplaceholder.typicode.com/posts/1", {
    method: 'PUT',
    body: JSON.stringify({
      id:1,
      title: 'foomaaba',
      body: 'barmaaba',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
})
.then((res) => {console.log(res.data)})
.catch((err) => {console.log(err)});



.post("https://jsonplaceholder.typicode.com/posts", {
    method: 'POST',
    body: JSON.stringify({
      title: 'foomaa',
      body: 'barmaa',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
})
.then((res) => {console.log(res.data)})
.catch((err) => {console.log(err)});



const makeRequest = async (config) => {
    return await axios(config);
};


const deleteData = () => {
    makeRequest({
        url:"https://jsonplaceholder.typicode.com/posts/2",
        method:"DELETE"
    })
    .then((res) => {console.log(res)})
    .catch((err) => {console.log(err)});
};
deleteData();



const updateData = () => {
    makeRequest({
        url:"https://jsonplaceholder.typicode.com/posts/2",
        method:"PUT",
        data:JSON.stringify({
            id:"101",
            title: 'foomaa',
            body: 'barmaa',
            userId: 1,
          }),
    })
    .then((res) => {console.log(res)})
    .catch((err) => {console.log(err)});
};
updateData();



const createData = () => {
    makeRequest({
        url:"https://jsonplaceholder.typicode.com/posts",
        method:"POST",
        data:JSON.stringify({
            title: 'foomaa',
            body: 'barmaa',
            userId: 1,
          }),
    })
    .then((res) => {console.log(res)})
    .catch((err) => {console.log(err)});
};
createData();



const getData = () => {
    makeRequest("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {console.log(res)})
    .catch((err) => {console.log(err)});
};
getData();








