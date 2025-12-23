function firstChar(text) {
  // your code here
	const trimed = text.trim()
  if(trimed.length===0){
	  return ""
  }else
	  return trimed[0]
	
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
 const text = prompt("Enter text:");
alert(firstChar(text));
