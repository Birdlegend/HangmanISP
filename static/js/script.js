const wordbank = ["grim", "valor", "pogchamp"];

const word = wordbank[Math.floor(Math.random() * wordbank.length)]
console.log(word);

setTimeout(() => {
    var sTable = document.getElementById("wordTable");
    for (i = 0; i < word.length; i++) {
        var wordCell = sTable.rows[0].insertCell(word[i])
        wordCell.setAttribute("contenteditable", "true")
        wordCell.setAttribute("onkeypress", "return (this.innerText.length <= 0)")
    }
}, "1")