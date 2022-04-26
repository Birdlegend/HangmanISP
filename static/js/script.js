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

//const wordbank = ["grim", "valor", "pogchamp"];

//const word = wordbank[Math.floor(Math.random() * wordbank.length)]
//console.log(word);

//setTimeout(() => {
//    var sTable = document.getElementById("wordTable");
//    for (i = 0; i < word.length; i++) {
//	var wordCell = sTable.rows[0].insertCell(word[i])
//	wordCell.setAttribute("contenteditable", "true")
//	wordCell.setAttribute("onkeypress", "return (this.innerText.length <= 0)")
//    }
//}, "1")
