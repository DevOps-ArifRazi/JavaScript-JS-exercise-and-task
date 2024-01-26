





////    MAKING AREA CALCULATION IMPORT VALUE FROM USER    \\\\



var base, height, squarearea,trianglearea;
base=parseFloat(prompt("Enter Your Base:"));
height=parseFloat(prompt("Enter Your Height:"));

squarearea=(base*height);
trianglearea=((base*height)/2);

//document.write("Square Area Is:"+squarearea);
//document.write("Triangle area is:"+trianglearea);

document.write("Square Area Is:",squarearea);
document.write("Triangle area is:",trianglearea);




//// TEMPURATURE CONVERTER IMPORT VALUE FROM USER    \\\\



///Farenhite to celcious

var farh, celc;
farh=parseFloat(prompt("Enter Tempurature in Farenhite:"));
celc=((farh-32)*(5/9));
document.write("Tempurature in Celcious is:",celc);







///Celcious to Farenhite


var celc, farh;
celc=parseFloat(prompt("Enter Celcious Tempurature:"));
farh=((celc*(9/5))+32);
document.write("Farenhite Tempurature is:",farh);
 







///Time Converter


var year,yearr,month,day,hour,min,sec;

year=parseFloat(prompt("Enter number of Year"));
yearr=(year*1);
month=(year*12);
day=(month*30);
hour=(day*24);
min=(hour*60);
sec=(min*60);

document.write("Imput Number of Year:",yearr,"<br>");
document.write("Number of Month:",month,"<br>");
document.write("Number of Day:",day,"<br>");
document.write("Number of Hour:",hour,"<br>");
document.write("Number of Minit:",min,"<br>");
document.write("Number of Second:",sec,"<br>");






//// Task-4: FINDING GREAD MARK IN EXAM    \\\\\



var num;
num=parseFloat(prompt("Please Enter Your Mark Between 0 to 100:"));
document.write("You Got ",num," Marke In you Subject.</br>");
if(num>100){
    document.write("You Entered Wrong Mark Number.");
}
 else if(num>=80){
    document.write("Congratulations! You grade Is: A+");
}
else if(num>=70){
    document.write("Congratulations! You grade Is: A");
}
else if(num>=60){
    document.write("Congratulations! You grade Is: B+");
}
else if(num>=50){
    document.write("Congratulations! You grade Is: B");
}
else if(num>=40){
    document.write("Congratulations! You grade Is: C");
}
else if(num>=33){
    document.write("Congratulations! You grade Is: D");
}    
else{
    document.write("Sorry! You grade Is: F");
}



///ANOTHER

var num;
num=parseFloat(prompt("Please Enter Your Mark Between 0 to 100:"));
document.write("You Got ",num," Marke In you Subject.</br>");
if(100<num || num<0){
    document.write("You Entered Wrong Mark Number.");
}
 else if(100<=num && num>=80){
    document.write("Congratulations! You grade Is: A+");
}
else if(79<=num && num>=70){
    document.write("Congratulations! You grade Is: A");
}
else if(69<= num && num>=60){
    document.write("Congratulations! You grade Is: B+");
}
else if(59<= num && num>=50){
    document.write("Congratulations! You grade Is: B");
}
else if(49<= num && num>=40){
    document.write("Congratulations! You grade Is: C");
}
else if(39<= num && num>=33){
    document.write("Congratulations! You grade Is: D");
}    
else{
    document.write("Sorry! You grade Is: F");
}







// Find Vowel or Consonent using Switch case...........


var charc;
charc = prompt("Enter a letter:");
charc=charc.toLowerCase();
switch(charc){
        case "a":
        document.write("It's Vowle");
        break;
        case "e":
        document.write("It's Vowle");
        break;
        case "i":
        document.write("It's Vowle");
        break;
        case "o":
        document.write("It's Vowle");
        break;
        case "u":
        document.write("It's Vowle");
        break;
        default:
        document.write("It's Consonent");
}





/////    Task-6 print addition of those numbers from 1 to 100 which iS divided by 3 and 5    \\\\\\\\\


var n, sum;
n=1;
sum=0;
while(n<=100){
    n=n+1;
    if(n%3==0 && n%5==0){
        document.write(" ",n);
        sum=sum+n;
    }
    
    
}
document.write(" ::: ",sum);





//////       Task7-FINDIN LARGE NUMBER BETWEEN THREE NUMBERS    \\\\\\\


var num1, num2, num3, result;
num1=parseFloat(prompt("Enter Your First Number"));
num2=parseFloat(prompt("Enter Your Second Number"));
num3=parseFloat(prompt("Enter Your Third Number"));
result=num1>num2 && num1>num3? "Number 1 Large":num2>num1 && num2>num3? "Number 2 Large":"number 3 large";
document.write("",result);






/////      task 6-USING FUNCTION BUILD SMALL CALCULATOR      \\\\\\\


var num1,num2,sum;

num1=parseFloat(prompt("Enter First Number:"));
num2=parseFloat(prompt("Enter Your Second Number:"));
document.write("First Number Is : ",num1,"<br>");
document.write("Second Number Is : ",num2,"<br>");

function addition(num1,num2){
    sum=num1+num2;
    document.write("Sum : ",sum,"<br>");

}

function subtraction(num1,num2){

    sub=num1-num2;
    document.write("Sub : ",sub,"<br>");

}


function multiplication(num1,num2){
    mult=num1*num2;
    document.write("Multi : ",mult,"<br>");

}


function division(num1,num2){
    divi=num1/num2;
    document.write("Division : ",divi,"<br>");

}

function restnumber(num1,num2){
    rest=num1%num2;
    document.write("Div Rest Number :",rest,"<br>");

}

addition(num1,num2)
subtraction(num1,num2);
multiplication(num1,num2);
division(num1,num2);
restnumber(num1,num2);




//Take number from user for Array,display them and also display the sum....


var i,num=[i],sum=0;

for(i=0; i<6; i++){
   num[i]=parseFloat(prompt("Enter Number:"));
}


for(i=0; i<5; i++){
    document.write("",num[i],"<br>");
    sum=sum+num[i];

}
document.write("Sum is:",sum);







//////     Task no 08 (Print the highest number from an ARRAY using function by user input)



var j,arreyOneD=[j];
for (j=0; j<6; j++){
    arreyOneD[j]=parseFloat(prompt("Enter Number"));

}
function highestScore(){
    var max=arreyOneD[0];
    for ( var i=1; i<arreyOneD.length; i++){
        if (max<arreyOneD[i]){
            max=arreyOneD[i];
        }
    }
    return max;
}

highestScore(arreyOneD);
document.write(highestScore(arreyOneD));







////////     Task 9 (Find the highestvrun Scorer from two dimentional Arrey)


var arreyTwoD=[
    ["Ashraful",195],
    ["Sakib",19],
    ["Musfique",96],
    ["Mahmudhllah",45],
    ["Mashrafee",313]
];

function highestRunScorer(playersInfo){
var max = arreyTwoD[0][0];
var maxrun = arreyTwoD[0][1];
for(var i=1; i<arreyTwoD.length; i++){
    if(maxrun<arreyTwoD[i][1]){
        maxrun=arreyTwoD[i][1];
        max=arreyTwoD[i][0];
    };

};
return(max);
}
highestRunScorer(arreyTwoD);
document.write(highestRunScorer(arreyTwoD));


