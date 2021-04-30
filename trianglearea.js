// An example of calculating the area of a triangle if the measurements are unknown (in this example you can see your answer if it is right or wrong).
var triangleArea = function() {
    var base = parseFloat(document.getElementById ('base').value);
    var height = parseFloat(document.getElementById ('height').value);
    
    var output = document.getElementById('output');
    if(isNaN(base) || isNaN(height)) {
        output.textContent = "You did not enter two numbers.";
    } else {
    var area = 0.5 * base * height;
    output.textContent = "Area = " + area;
    }
}; 

// TEST DATA 


// case 1, triangelOne
var base = 10;
var height = 13;
var area = 0.5 * base * height;
console.log(area); 

// case 1, triangelTwo
var base = 16.5;
var height = 20.3;
var area = 0.5 * base * height;
console.log(area);

// case 2, triangelThree
var base = 16.5;
var height = 20.3;
var area = 0.5 * base * height;
console.log(area);

// case 2, triangelFour
var base = 20.3;
var height = 16.5;
var area = 0.5 * base * height;
console.log(area);

// case 3, triangelFive
var base = 7.8;
var height = 5.6;
var area = 0.5 * base * height;
console.log(area);


//  case 3, triangelSix
var base = 9.3;
var height = 12.4;
var area = 0.5 * base * height;
console.log(area);
 

// TEMPLATE LITERALS 
const area1 = "triangelOne";
const area2 = "triangelTwo";
const area3 = "triangelThree";
const area4 = "triangelFour";
const area5 = "triangelFive";
const area6 = "triangelSix";
const areaResult =  

" Result " + " = " + area2 + " or " + area3 + " or " + area4 + " is the biggest " + " 167.475cm (same output) " + " and " + area5 +
 " is the smallest " + "21.84cm" + " while " + area1 + " is 65cm" + " and " + area6 + " is 57.7cm."; 
console.log(areaResult);





 
