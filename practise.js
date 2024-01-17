

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








