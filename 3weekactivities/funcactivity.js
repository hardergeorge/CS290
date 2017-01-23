//works because of hoisting
print_word("word");

function print_word(word) 
{
	if(typeof(word) == typeof("a string") && !word.includes(" ")){
		console.log(word);
	} else {
		console.log("Not a word");
	}
}

//does not work
printWord("word");

var printWord = function() {
	if(typeof(word) == typeof("a string") && !word.includes(" ")){
		console.log(word);
	} else {
		console.log("Not a word");
	}
}