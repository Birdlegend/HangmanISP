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
var definition = ""
var numLetters = 0
getJSON("https://random-words-api.vercel.app/word").then(data => {
    console.log(data[0]);
    word = data[0].word;
    definition = data[0].definition;
    numLetters = word.length;
    console.log(`look at this word: ${word}`);
    console.log(`so that's what that means: ${definition}`);
    console.log(`I wish I had that many letters: ${numLetters}`);
})

window.onload = function() {
word = "cheeser"
category = "word"

var aTable = document.getElementById("alphaTable");
    var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    for (i = 0; i < 13; i++) {
        var alpha1Cell = aTable.rows[0].insertCell(alphabet[12 - i]);
        alpha1Cell.innerHTML = alphabet[12 - i]
        var alpha2Cell = aTable.rows[1].insertCell(alphabet[25 - i]);
        alpha2Cell.innerHTML = alphabet[25 - i]
        alpha1Cell.setAttribute("id", "alphaCell");
        alpha1Cell.setAttribute("onclick", "letterSelection(this.innerHTML)");
        alpha2Cell.setAttribute("id", "alphaCell");
        alpha2Cell.setAttribute("onclick", "letterSelection(this.innerHTML)");
    }
setTimeout(() => {
    document.getElementById("category").innerHTML = `category: ${category}`
	var wTable = document.getElementById("hangTable");
	for (i = 0; i < word.length; i++) {
		var wordCell = wTable.rows[0].insertCell(word[i]);
		wordCell.setAttribute("id", "hangCell");
    }
}, "300");
}

function letterSelection(letter) {
    var wTable = document.getElementById("hangTable");
    var lowerLetter = letter.toLowerCase()
    var indices = [];
    for (i = 0; i < word.length; i++) {
        if (word[i] === lowerLetter) indices.push(i);
    }
    console.log(indices)
    indices.forEach(index => wTable.rows[0].cells[index].innerHTML = letter);
    var full = true
    for (i = 0; i < wTable.rows[0].cells.length; i++) {
        if (wTable.rows[0].cells[i].innerHTML == "") {
            full = false
            break
        }
    }
    if (full == true) {
        console.log("win")
    }
}
