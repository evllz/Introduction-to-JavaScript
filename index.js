/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

let votingAge = 18;
if (votingAge > 18){
    console.log(true);
}
else{
    console.log(false);
}



//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)


let num1 = 0;
let num2 = 2;
if(num2>1){
    num1 = 1;
    console.log(num1);
}
else{
    num1 = 2;
    console.log(num1);
}


//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

let num3 = "1999";
console.log(Number(num3));




//Task d: Write a function to multiply a*b 

let a = 5;
let b = 5;
function multiply (c,d){
    return c*d;
}
console.log(multiply(a,b));



/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

let age = 5;
function dogyears (a){
    return a*7;
}
console.log(dogyears(age));



/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

function dogfeeder (weight,age){
    if (age < 1){
        if (monthsage >= 0.166 && monthsage <= 0.333){
            return "Puppy Option 1: " + (monthsage*0.1)*100 + "-lbs";
        }
        else if (monthsage >= 0.166 && monthsage <= 0.5831){
            return "Puppy Option 2: " + (monthsage*0.05)*100 + "-lbs";
        }
        else if (monthsage >= 0.5831 && monthsage < 1){
            return "Puppy Option 3: " + (monthsage*0.04)*100 + "-lbs";
        }
    }
    else if (age >= 1){
        if (weight <= 5){
            return ("Adult Option 1: " + (weight*0.05)*100 + "-lbs");
        }
        else if (weight >= 6 && weight <= 10){
            return ("Adult Option 2: " + (weight*0.04)*100 + "-lbs");
        }
        else if (weight >= 11 && weight <= 15){
            return ("Adult Option 3: " + (weight*0.03)*100 + "-lbs");
        }
        else if (weight >15){
            return ("Adult Option 4: " + (weight*0.02)*100 + "-lbs");
        }          
    }

}

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  

console.log(dogfeeder(15,1));


/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

 function game(choice){
    let comp = Math.floor(Math.random()*3)+1; /* Comp opt: 1-rock 2-paper and 3-sissor*/
    console.log(comp);
    if ( choice === 'rock' && comp === 1){
        console.log('Draw');
    }
    else if ( choice === 'sissors' && comp === 3){
        console.log('Draw');
    }
    else if ( choice === 'paper' && comp === 2){
        console.log('Draw');
    }
    else if ( choice === 'rock' && comp === 1){
        console.log('Draw');
    }
    else if ( choice === 'rock' && comp === 3){
        console.log('You Win!');
    }
    else if ( choice === 'paper' && comp === 1){
        console.log('You win!');
    }
    else if ( choice === 'sissors' && comp === 2){
        console.log('You win!');
    }
    else {
        console.log('You lose!');
    }
 } 
  
game('rock');
/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function metricConverter(KM){
    return KM/1.609 + " Miles";
}

console.log(metricConverter(15));


//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  

function ftTocm(ft){
    return ft*30.48 + " cm";
}

console.log(ftTocm(15));


/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`

function anoyingsong(bottles){
for (i = bottles; i >= 0; i--){
  if (i > 0){
      console.log("Total bottles in to wall " + i + " pass one around and now is " + (i-1) + " bottles in the wall"); 
  }
  else{
    console.log("no more bottles");
  }

}
}
 anoyingsong(99);

/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
function grading(grade){
  if (grade >= 90){
    return "A";
  }
  else if (grade < 90 && grade >= 80){
    return "B";
  }  
  else if (grade < 80 && grade >= 70) {
    return "C";
  } 
  else if (grade < 70 && grade >= 60){
    return "C";
  }
  else if (grade < 60){
    return "F";
  } 
}
console.log(grading(75));

  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method

function vowls(string){
  let count = 0;
  let x;
  for  (x of string){
    if (x == 'a' | x == 'e'| x == 'i'| x == 'o'| x == 'u'|x == 'A' | x == 'E'| x == 'I'| x == 'O'| x == 'U'){
      count=count+1;
    }
  }
  return count;
}

console.log(vowls('Erick'));




/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object

let choice = document.getElementById("pick").value;
function game(choice){
    let comp = Math.floor(Math.random()*3)+1; /* Comp opt: 1-rock 2-paper and 3-sissor*/
    let result;
    if ( choice === 'rock' && comp === 1){
        console.log('Draw');
    }
    else if ( choice === 'sissors' && comp === 3){
        result = 'Draw';
    }
    else if ( choice === 'paper' && comp === 2){
        result = 'Draw';
    }
    else if ( choice === 'rock' && comp === 1){
        result = 'Draw';
    }
    else if ( choice === 'rock' && comp === 3){
        result = 'You Win!';
    }
    else if ( choice === 'paper' && comp === 1){
        result = 'You Win!';
    }
    else if ( choice === 'sissors' && comp === 2){
        result = 'You Win!';
    }
    else {
        result = 'You lose!';
    }
    document.getElementById("print").innerHTML = result;
 } 


