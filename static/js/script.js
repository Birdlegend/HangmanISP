//JSON
const getJSON = async url => {
    const response = await fetch(url);
    if (!response.ok)
	throw new Error(response.statusText);

    const data = response.json();
    return data;
}
console.log("fetching...");
var word = ""
var id = ""
var category = ""
var numLetters = 0
getJSON("https://www.wordgamedb.com/api/v1/words/random").then(data => {
    console.log(data);
    word = data.word;
    id = data._id;
    category = data.category;
    numLetters = data.numLetters;
    console.log(`look at this word: ${word}`);
    console.log(`thats quite the id: ${id}`);
    console.log(`that's really some category: ${category}`);
    console.log(`I wish I had that many letters: ${numLetters}`);
})

window.onload = function() {
var aTable = document.getElementById("alphaTable");
    var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    for (i = 0; i < 13; i++) {
        var alpha1Cell = aTable.rows[0].insertCell(alphabet[12 - i]);
        alpha1Cell.innerHTML = alphabet[12 - i]
        var alpha2Cell = aTable.rows[1].insertCell(alphabet[25 - i]);
        alpha2Cell.innerHTML = alphabet[25 - i]
        alpha1Cell.setAttribute("id", "alphaCell");
        alpha2Cell.setAttribute("id", "alphaCell");
    }
setTimeout(() => {
	var wTable = document.getElementById("hangTable");
	for (i = 0; i < word.length; i++) {
		var wordCell = wTable.rows[0].insertCell(word[i]);
		wordCell.setAttribute("id", "hangCell");
    }
}, "250");
}
