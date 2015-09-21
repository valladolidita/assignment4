var myQuote1 = {
	author: "Churchill",
	date: 1949,
	bce: false
};

var myQuote2 = {
	author: "Ghandi",
	date: 1942,
	bce: false
};

var myQuote3 = {
	author: "Demosthenes",
	date: 342,
	bce: true
};

var myArray = ["myQuote1", "myquote2", "myQuote3"];

var yearsApart = myQuote1.date - myQuote2.date;

console.log(myQuote2.author + "'s speech and " + myQuote1.author + "'s speech are " + yearsApart + " years apart. ");

//buttons 

document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
  console.log("There are " + myArray.length + " speeches on the page.");
});

document.getElementById('BtnChurchill').addEventListener('click',
function(){   
//Code in here executes when the user clicks the "Churchill" button.   
	console.log("This speech was written by " +
myQuote1.author + " in " + myQuote1.date + ". It is " + myQuote1.bce +
" that this year is B.C.E."); 
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
  	console.log("This speech was written by " +
myQuote2.author + " in " + myQuote2.date + ". It is " + myQuote2.bce +
" that this year is B.C.E."); 
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
    console.log("This speech was written by " +
myQuote3.author + " in " + myQuote3.date + ". It is " + myQuote3.bce +
" that this year is B.C.E."); 
});

